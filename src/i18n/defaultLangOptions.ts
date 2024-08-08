export const Languages = [
  { name: "English", value: "en" },
  { name: "Español", value: "es" },
] as const; //read only

export const defaultLanguage = "en";
export type Lang = (typeof Languages)[number]["value"];
