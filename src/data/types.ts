export type PeriodId =
  | "early"
  | "kingdoms"
  | "middle"
  | "tudors"
  | "georgian"
  | "victorian"
  | "modern";

export type RoleId =
  | "ruler"
  | "writer"
  | "scientist"
  | "maker"
  | "artist"
  | "healer"
  | "explorer"
  | "helper";

export const periods: { id: PeriodId; label: string; years: string }[] = [
  { id: "early", label: "Early times", years: "to about 600" },
  { id: "kingdoms", label: "Kingdoms", years: "600–1066" },
  { id: "middle", label: "Middle Ages", years: "1066–1485" },
  { id: "tudors", label: "Tudors and Stuarts", years: "1485–1714" },
  { id: "georgian", label: "Georgian times", years: "1714–1837" },
  { id: "victorian", label: "Victorian times", years: "1837–1901" },
  { id: "modern", label: "Modern times", years: "1901 to now" },
];

export const roles: { id: RoleId; label: string }[] = [
  { id: "ruler", label: "Rulers" },
  { id: "writer", label: "Writers" },
  { id: "scientist", label: "Scientists" },
  { id: "maker", label: "Makers" },
  { id: "artist", label: "Artists" },
  { id: "healer", label: "Healers" },
  { id: "explorer", label: "Explorers" },
  { id: "helper", label: "Helpers" },
];

export type Invention = {
  name: string;
  shared?: string;
};

export type Person = {
  slug: string;
  name: string;
  years: string;
  period: PeriodId;
  role: RoleId;
  knownFor: string;
  lines: string[];
  places: string[];
  inventions?: Invention[];
  /** Key in the picture library, only when the image is certainly them and free to use. */
  picture?: string;
};

export type County = {
  slug: string;
  name: string;
  town: string;
  land: string;
  facts: [string, string];
};

export type Place = {
  slug: string;
  name: string;
  county: string;
  lon: number;
  lat: number;
  lines: string[];
  picture: string;
};

export type TimeEvent = {
  id: string;
  when: string;
  title: string;
  text: string;
  picture?: string;
};

export type Picture = {
  src: string;
  alt: string;
  maker: string;
  licence: string;
  source: string;
  kind: "photograph" | "painting";
};

export type Project = {
  id: string;
  stage: StageId;
  kind: "individual" | "team";
  title: string;
  need: string[];
  steps: string[];
  done: string;
};

export type StageId =
  | "reception"
  | "year-1"
  | "year-2"
  | "year-3"
  | "year-4"
  | "year-5"
  | "year-6";

export const stages: { id: StageId; label: string }[] = [
  { id: "reception", label: "Reception" },
  { id: "year-1", label: "Age 5-6" },
  { id: "year-2", label: "Age 6-7" },
  { id: "year-3", label: "Age 7-8" },
  { id: "year-4", label: "Age 8-9" },
  { id: "year-5", label: "Age 9-10" },
  { id: "year-6", label: "Age 10-11" },
];
