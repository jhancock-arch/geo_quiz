// data/countries.ts
export type Country = {
  id: string;                 // unique slug, e.g. "japan"
  name: string;               // what user must guess
  continent: "Africa" | "Asia" | "Europe" | "North America" | "South America" | "Oceania";
  iso2: string;               // for map highlighting later (e.g. "JP")
  photos: { src: string; alt: string }[]; // put images in /public/photos or use URLs
  facts: string[];            // your curated facts
  aliases?: string[];         // accepted alternative spellings
};

export const COUNTRIES: Country[] = [
  {
    id: "japan",
    name: "Japan",
    continent: "Asia",
    iso2: "JP",
    photos: [
      { src: "/photos/japan-1.jpg", alt: "Mountain landscape" },
      { src: "/photos/japan-2.jpg", alt: "City at night" },
    ],
    facts: [
      "Known for seasonal festivals and regional food traditions.",
      "Typical daily budget: $$$ (placeholder).",
      "Flight from California: $$ (placeholder).",
      "Travel advisory: (placeholder).",
    ],
    aliases: ["Nippon"],
  },
  {
    id: "chile",
    name: "Chile",
    continent: "South America",
    iso2: "CL",
    photos: [
      { src: "/photos/chile-1.jpg", alt: "Desert landscape" },
      { src: "/photos/chile-2.jpg", alt: "Mountain and lake" },
    ],
    facts: [
      "One of the longest north–south countries in the world.",
      "Typical daily budget: $$ (placeholder).",
      "Flight from California: $$ (placeholder).",
      "Travel advisory: (placeholder).",
    ],
  },
];