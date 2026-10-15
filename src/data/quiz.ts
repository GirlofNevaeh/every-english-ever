import { counties } from "./counties";
import { people } from "./people";
import { places } from "./places";
import { timeline } from "./timeline";

export type QuizQuestion = {
  id: string;
  prompt: string;
  choices: [string, string, string, string];
  answer: number;
};

type Draft = {
  id: string;
  prompt: string;
  correct: string;
  wrong: [string, string, string];
};

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleChoices(draft: Draft, rng: () => number): QuizQuestion {
  const choices = [draft.correct, ...draft.wrong];
  for (let i = choices.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    const swap = choices[i];
    choices[i] = choices[j] ?? choices[i];
    choices[j] = swap;
  }
  const answer = choices.indexOf(draft.correct);
  return {
    id: draft.id,
    prompt: draft.prompt,
    choices: [choices[0], choices[1], choices[2], choices[3]] as [
      string,
      string,
      string,
      string,
    ],
    answer,
  };
}

function others<T>(items: T[], skip: number, label: (item: T) => string, rng: () => number) {
  const pool = items.filter((_, index) => index !== skip).map(label);
  const unique = [...new Set(pool)].filter((item) => item !== label(items[skip]));
  const picked: string[] = [];
  const used = new Set<number>();
  let guard = 0;
  while (picked.length < 3 && guard < 40) {
    guard += 1;
    const index = Math.floor(rng() * unique.length);
    if (used.has(index)) continue;
    used.add(index);
    const value = unique[index];
    if (value) picked.push(value);
  }
  return picked as [string, string, string];
}

const handcrafted: Draft[] = [
  {
    id: "wallace",
    prompt: "Charles Darwin wrote about natural selection. Who else reached the same idea, and was born in Wales?",
    correct: "Alfred Russel Wallace",
    wrong: ["Isaac Newton", "Michael Faraday", "Ada Lovelace"],
  },
  {
    id: "franklin-share",
    prompt: "Rosalind Franklin took X-ray pictures of DNA. Which sentence is fair?",
    correct: "Her pictures mattered, and other scientists shared the model.",
    wrong: [
      "She invented the jet engine alone.",
      "She was a queen of the Iceni.",
      "She built Stonehenge.",
    ],
  },
  {
    id: "leibniz",
    prompt: "Isaac Newton worked on a kind of maths called calculus. Who else, in Germany, also worked it out?",
    correct: "Gottfried Leibniz",
    wrong: ["Hans von Ohain", "Thomas Edison", "James Watt"],
  },
  {
    id: "watt",
    prompt: "Thomas Newcomen built an early steam engine in Devon. Who later improved steam engines, and was born in Scotland?",
    correct: "James Watt",
    wrong: ["William Shakespeare", "Bede", "Percy Shaw"],
  },
  {
    id: "trevithick",
    prompt: "Who built a steam locomotive that ran at Penydarren, in Wales, before Stephenson's public railways?",
    correct: "Richard Trevithick",
    wrong: ["Christopher Wren", "John Harrison", "Tim Berners-Lee"],
  },
  {
    id: "swan-edison",
    prompt: "Joseph Swan made an early electric light bulb. Who else, in America, also made one?",
    correct: "Thomas Edison",
    wrong: ["Alfred Russel Wallace", "Hilda of Whitby", "John Flamsteed"],
  },
  {
    id: "cailliau",
    prompt: "Tim Berners-Lee invented the World Wide Web. Who worked with him, and came from Belgium?",
    correct: "Robert Cailliau",
    wrong: ["Francis Drake", "Josiah Wedgwood", "Grace Darling"],
  },
  {
    id: "web-not-internet",
    prompt: "Which sentence about Tim Berners-Lee is true?",
    correct: "The web is a way to share pages. Other people had already built the internet.",
    wrong: [
      "He built every computer in the world.",
      "He was queen of England.",
      "He raised the stones at Avebury.",
    ],
  },
  {
    id: "jenner-world",
    prompt: "Edward Jenner tried vaccination in Gloucestershire. What had people in other lands already known?",
    correct: "Ways to guard against smallpox",
    wrong: ["How to build a jet engine", "The words of The Canterbury Tales", "How to print books in Westminster"],
  },
  {
    id: "hadrian-border",
    prompt: "Where does Hadrian's Wall stand?",
    correct: "In the border country with Scotland, in the north of England",
    wrong: ["On the white cliffs of Dover", "In the middle of Cornwall", "Inside St Paul's Cathedral"],
  },
  {
    id: "stonehenge-sure",
    prompt: "What does this site say about Stonehenge?",
    correct: "We are not sure what the circle was for.",
    wrong: [
      "It was built as a railway station.",
      "Alfred wrote a book about every stone.",
      "It is a Tudor palace.",
    ],
  },
  {
    id: "anthem",
    prompt: "Which sentence about singing is true?",
    correct: "God Save the King is the anthem of the United Kingdom, not of England alone.",
    wrong: [
      "England has its own official anthem.",
      "Jerusalem is the official anthem of England.",
      "Each county has to use a different anthem.",
    ],
  },
  {
    id: "year-1066",
    prompt: "What happened in 1066?",
    correct: "William of Normandy became king after the battle of Hastings.",
    wrong: [
      "The Romans first arrived.",
      "Tim Berners-Lee invented the web.",
      "Mary Anning found her first fossil.",
    ],
  },
  {
    id: "romans-leave",
    prompt: "What happened in the early 400s?",
    correct: "The Roman armies left.",
    wrong: ["The Great Fire burned London.", "Victoria became queen.", "The jet aeroplane flew."],
  },
  {
    id: "city-county",
    prompt: "Which sentence about London is true?",
    correct: "The City of London is its own ceremonial county. Greater London is a different one.",
    wrong: [
      "The City of London is in Scotland.",
      "Greater London is the smallest county.",
      "London has no counties at all.",
    ],
  },
  {
    id: "boudica-sources",
    prompt: "Why are we not sure of every detail about Boudica?",
    correct: "The Roman accounts were written by her enemies.",
    wrong: [
      "She wrote the accounts herself in a diary we still have.",
      "She lived after the Victorians.",
      "She invented the light bulb.",
    ],
  },
  {
    id: "caxton-share",
    prompt: "William Caxton set up a printing press at Westminster. What is also true?",
    correct: "Printing was already used in Germany and in other lands.",
    wrong: [
      "He invented paper in the Lake District.",
      "Nobody else had ever printed a book.",
      "He built Hadrian's Wall.",
    ],
  },
  {
    id: "hooke-spring",
    prompt: "Robert Hooke and Christiaan Huygens both worked on a spring for watches. What does this site say?",
    correct: "We are not sure who was first.",
    wrong: [
      "Huygens was the queen of Mercia.",
      "The spring was invented at Stonehenge.",
      "Hooke was born in Jamaica.",
    ],
  },
  {
    id: "seacole-born",
    prompt: "Where was Mary Seacole born?",
    correct: "Kingston, in Jamaica",
    wrong: ["York", "Penzance", "Whitby"],
  },
  {
    id: "nightingale-born",
    prompt: "Where was Florence Nightingale born?",
    correct: "Florence, in Italy, to English parents",
    wrong: ["Cardiff, in Wales", "Edinburgh, in Scotland", "Dublin, in Ireland"],
  },
  {
    id: "handel-born",
    prompt: "Where was George Frideric Handel born?",
    correct: "Halle, in Germany",
    wrong: ["Stratford-upon-Avon", "Jarrow", "Halifax"],
  },
  {
    id: "equiano",
    prompt: "What does Olaudah Equiano's page say about his birth?",
    correct: "He wrote that he was born in West Africa. We are not sure of the exact place.",
    wrong: [
      "He was born in the City of London.",
      "He was king of Wessex.",
      "He designed the Clifton Suspension Bridge.",
    ],
  },
  {
    id: "civil-wars",
    prompt: "What does this site say about the 1640s?",
    correct: "People in England fought a civil war about the king and Parliament.",
    wrong: [
      "The first farmers arrived.",
      "The Romans built Bath.",
      "Amy Johnson flew to Australia.",
    ],
  },
  {
    id: "industry",
    prompt: "What changed life in the industrial towns?",
    correct: "New mills and railways",
    wrong: ["The building of Stonehenge", "The Synod of Whitby", "The first Astronomer Royal"],
  },
  {
    id: "tudor-court",
    prompt: "Which sentence fits the Tudor court?",
    correct: "Music, plays, and portraits mattered, and the ruler's word carried great weight.",
    wrong: [
      "Everyone already had a jet engine.",
      "Parliament met only in York Minster.",
      "Printing had not been invented anywhere.",
    ],
  },
  {
    id: "aethelflaed-role",
    prompt: "Who was the Lady of the Mercians and a daughter of Alfred?",
    correct: "Æthelflæd",
    wrong: ["Jane Austen", "Mary Anning", "Boudica"],
  },
  {
    id: "whittle-share",
    prompt: "Frank Whittle designed a jet engine in England. Who also built an early jet, in Germany?",
    correct: "Hans von Ohain",
    wrong: ["Bede", "Capability Brown", "Margery Kempe"],
  },
  {
    id: "turing-team",
    prompt: "Alan Turing worked on secret messages in the Second World War. Which sentence is fair?",
    correct: "He worked with a large team. Polish mathematicians had already done important work.",
    wrong: [
      "He broke every code in the world with no help.",
      "He was a Tudor queen.",
      "He painted the Royal Crescent.",
    ],
  },
  {
    id: "harrison-job",
    prompt: "What did John Harrison's sea clocks help sailors to find?",
    correct: "Longitude, how far east or west they were",
    wrong: ["The height of Scafell Pike", "The author of Jane Eyre", "The county town of Rutland"],
  },
  {
    id: "bazalgette",
    prompt: "What did Joseph Bazalgette build under London?",
    correct: "Great sewers",
    wrong: ["Hadrian's Wall", "A stone circle", "The first printing press"],
  },
  {
    id: "rutland-size",
    prompt: "Which ceremonial county is the smallest in England?",
    correct: "Rutland",
    wrong: ["North Yorkshire", "Devon", "Greater London"],
  },
  {
    id: "birmingham-county",
    prompt: "Which county is Birmingham in?",
    correct: "West Midlands",
    wrong: ["Warwickshire", "Cornwall", "Norfolk"],
  },
  {
    id: "liverpool-county",
    prompt: "Which county is Liverpool in?",
    correct: "Merseyside",
    wrong: ["Lancashire", "Kent", "Herefordshire"],
  },
  {
    id: "york-county",
    prompt: "York is a famous city. Which ceremonial county is it in?",
    correct: "North Yorkshire",
    wrong: ["West Yorkshire", "County Durham", "Essex"],
  },
  {
    id: "brunel-father",
    prompt: "Isambard Kingdom Brunel was born in Portsmouth. Where was his father, Marc, born?",
    correct: "France",
    wrong: ["Wales", "Scotland", "Jamaica"],
  },
  {
    id: "farmers",
    prompt: "When did the first farmers reach this land?",
    correct: "About 6,000 years ago",
    wrong: ["In 1066", "In 1948", "In the 1640s"],
  },
  {
    id: "crick-share",
    prompt: "Francis Crick helped to build a model of DNA. Who else does his page name?",
    correct: "James Watson, Maurice Wilkins, and Rosalind Franklin",
    wrong: ["Only himself", "Alfred and Æthelflæd", "Drake and Raleigh"],
  },
  {
    id: "polish-note",
    prompt: "Before Turing's team at Bletchley Park, who had already done important work on the secret messages?",
    correct: "Polish mathematicians",
    wrong: ["The builders of Avebury", "The Brontë sisters", "The potters of Burslem"],
  },
];

function buildQuestions(): QuizQuestion[] {
  const rng = mulberry32(1066);
  const drafts: Draft[] = [...handcrafted];
  const seen = new Set(drafts.map((draft) => draft.prompt));

  const add = (draft: Draft) => {
    if (seen.has(draft.prompt)) return;
    if (new Set([draft.correct, ...draft.wrong]).size !== 4) return;
    if (draft.wrong.some((item) => item === draft.correct)) return;
    seen.add(draft.prompt);
    drafts.push(draft);
  };

  people.forEach((person, index) => {
    const wrong = others(people, index, (item) => item.name, rng);
    if (wrong.length < 3) return;
    add({
      id: `who-${person.slug}`,
      prompt: `Who is known for this? ${person.knownFor}`,
      correct: person.name,
      wrong,
    });
  });

  people.forEach((person, index) => {
    const place = person.places[0];
    if (!place) return;
    const wrong = others(people, index, (item) => item.places[0] ?? "London", rng);
    if (wrong.length < 3 || wrong.includes(place)) return;
    add({
      id: `where-${person.slug}`,
      prompt: `Which place do we link with ${person.name}?`,
      correct: place,
      wrong,
    });
  });

  counties.forEach((county, index) => {
    const wrong = others(counties, index, (item) => item.town, rng);
    if (wrong.length < 3) return;
    add({
      id: `town-${county.slug}`,
      prompt: `What is the main town or city of ${county.name}?`,
      correct: county.town,
      wrong,
    });
  });

  places.forEach((place, index) => {
    const county = counties.find((item) => item.slug === place.county);
    if (!county) return;
    const wrongNames = others(
      places,
      index,
      (item) => counties.find((countyItem) => countyItem.slug === item.county)?.name ?? "Rutland",
      rng,
    );
    if (wrongNames.length < 3 || wrongNames.includes(county.name)) return;
    add({
      id: `county-of-${place.slug}`,
      prompt: `${place.name} is in which ceremonial county?`,
      correct: county.name,
      wrong: wrongNames,
    });
  });

  timeline.forEach((event, index) => {
    const wrong = others(timeline, index, (item) => item.when, rng);
    if (wrong.length < 3) return;
    add({
      id: `when-${event.id}`,
      prompt: `When does this belong? ${event.text}`,
      correct: event.when,
      wrong,
    });
  });

  const chosen = drafts.slice(0, 200);
  if (chosen.length !== 200) {
    throw new Error(`Expected 200 quiz questions, built ${chosen.length}.`);
  }
  return chosen.map((draft) => shuffleChoices(draft, rng));
}

export const questions: QuizQuestion[] = buildQuestions();
