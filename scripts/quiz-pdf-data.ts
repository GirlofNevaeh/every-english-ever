import { localeIds, type LocaleId } from "../src/i18n/languages";
import { translate } from "../src/i18n/translate";
import { questions } from "../src/data/quiz";

export type QuizPack = {
  locale: LocaleId;
  title: string;
  quiz: string;
  note: string;
  items: { n: number; prompt: string; choices: string[] }[];
};

export function quizPacks(): QuizPack[] {
  return localeIds.map((locale) => ({
    locale,
    title: translate(locale, "Every English Person Ever"),
    quiz: translate(locale, "Quiz"),
    note: translate(locale, "This sheet has 200 questions. It has no answers."),
    items: questions.map((question, index) => ({
      n: index + 1,
      prompt: translate(locale, question.prompt),
      choices: question.choices.map((choice) => translate(locale, choice)),
    })),
  }));
}
