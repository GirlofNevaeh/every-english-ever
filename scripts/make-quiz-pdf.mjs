// node --experimental-strip-types --import ./scripts/ts-resolve.mjs scripts/make-quiz-pdf.mjs
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { PDFDocument, rgb } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import { quizPacks } from "./quiz-pdf-data.ts";

const letters = ["A", "B", "C", "D"];
const pageWidth = 595.28;
const pageHeight = 841.89;
const margin = 46;
const russet = rgb(140 / 255, 47 / 255, 57 / 255);
const yew = rgb(31 / 255, 77 / 255, 58 / 255);
const ink = rgb(26 / 255, 26 / 255, 26 / 255);

const regularBytes = readFileSync("assets/fonts/SourceSans3-Regular.ttf");
const boldBytes = readFileSync("assets/fonts/SourceSans3-Bold.ttf");

function wrap(text, font, size, width) {
  const words = String(text).split(/\s+/).filter(Boolean);
  const lines = [];
  let line = "";
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (font.widthOfTextAtSize(next, size) <= width) {
      line = next;
      continue;
    }
    if (line) lines.push(line);
    line = word;
  }
  if (line) lines.push(line);
  return lines.length ? lines : [""];
}

mkdirSync("public/quiz", { recursive: true });

for (const pack of quizPacks()) {
  const pdf = await PDFDocument.create();
  pdf.registerFontkit(fontkit);
  const regular = await pdf.embedFont(regularBytes, { subset: true });
  const bold = await pdf.embedFont(boldBytes, { subset: true });
  const contentWidth = pageWidth - margin * 2;
  let page = pdf.addPage([pageWidth, pageHeight]);
  let y = pageHeight - margin;

  const newPage = () => {
    page = pdf.addPage([pageWidth, pageHeight]);
    y = pageHeight - margin;
    drawHeader(false);
  };

  const ensure = (height) => {
    if (y - height < margin + 18) newPage();
  };

  const drawHeader = (first) => {
    page.drawRectangle({ x: 0, y: pageHeight - 8, width: pageWidth, height: 8, color: russet });
    const title = `${pack.title}  ·  ${pack.quiz}`;
    page.drawText(title, { x: margin, y: y - 4, size: first ? 18 : 12, font: bold, color: russet });
    y -= first ? 28 : 22;
    if (first) {
      const noteLines = wrap(pack.note, regular, 12, contentWidth);
      for (const line of noteLines) {
        page.drawText(line, { x: margin, y, size: 12, font: regular, color: yew });
        y -= 16;
      }
      y -= 8;
    }
  };

  drawHeader(true);

  for (const item of pack.items) {
    const promptLines = wrap(`${item.n}.  ${item.prompt}`, bold, 12, contentWidth);
    const choiceLines = item.choices.map((choice, index) =>
      wrap(`${letters[index]}.  ${choice}`, regular, 11, contentWidth - 16),
    );
    const height = promptLines.length * 16 + choiceLines.reduce((sum, lines) => sum + lines.length * 14, 0) + 12;
    ensure(height);
    for (const line of promptLines) {
      page.drawText(line, { x: margin, y, size: 12, font: bold, color: ink });
      y -= 16;
    }
    item.choices.forEach((_, index) => {
      for (const line of choiceLines[index]) {
        page.drawText(line, { x: margin + 12, y, size: 11, font: regular, color: ink });
        y -= 14;
      }
    });
    y -= 10;
  }

  const pages = pdf.getPages();
  pages.forEach((sheet, index) => {
    const label = `${index + 1} / ${pages.length}`;
    const width = regular.widthOfTextAtSize(label, 10);
    sheet.drawText(label, {
      x: pageWidth - margin - width,
      y: 28,
      size: 10,
      font: regular,
      color: yew,
    });
  });

  const bytes = await pdf.save();
  const file = `public/quiz/every-english-ever-quiz-${pack.locale}.pdf`;
  writeFileSync(file, bytes);
  console.log(file, pages.length, "pages", bytes.length, "bytes");
}
