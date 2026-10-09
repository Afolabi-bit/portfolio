import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
  SiReact,
  SiLeaflet,
  SiNpm,
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiLighthouse,
  SiStripe,
  SiOpenai,
  SiGooglegemini,
  SiGo,
  SiMongodb,
  SiRender,
} from "react-icons/si";

// Scalable tech icon mapping
export const techIcons = {
  // Next.js
  NextJs: { icon: SiNextdotjs, color: "var(--dark-text)" },
  "Next.js": { icon: SiNextdotjs, color: "var(--dark-text)" },

  // TypeScript
  TypeScript: { icon: SiTypescript, color: "var(--dark-text)" },

  // Tailwind CSS
  TailwindCSS: { icon: SiTailwindcss, color: "var(--dark-text)" },
  Tailwind: { icon: SiTailwindcss, color: "var(--dark-text)" },

  // Prisma
  "Prisma ORM": { icon: SiPrisma, color: "var(--dark-text)" },
  Prisma: { icon: SiPrisma, color: "var(--dark-text)" },

  // PostgreSQL
  PostgreSQL: { icon: SiPostgresql, color: "var(--dark-text)" },
  Postgres: { icon: SiPostgresql, color: "var(--dark-text)" },

  // React
  ReactJS: { icon: SiReact, color: "var(--dark-text)" },
  React: { icon: SiReact, color: "var(--dark-text)" },

  // Go / Golang
  Golang: { icon: SiGo, color: "var(--dark-text)" },
  Go: { icon: SiGo, color: "var(--dark-text)" },
  golang: { icon: SiGo, color: "var(--dark-text)" },
  go: { icon: SiGo, color: "var(--dark-text)" },

  // MongoDB
  MongoDB: { icon: SiMongodb, color: "var(--dark-text)" },
  Mongodb: { icon: SiMongodb, color: "var(--dark-text)" },
  Mongo: { icon: SiMongodb, color: "var(--dark-text)" },
  mongodb: { icon: SiMongodb, color: "var(--dark-text)" },

  // Google Gemini AI
  Gemini: { icon: SiGooglegemini, color: "var(--dark-text)" },
  "Google Gemini": { icon: SiGooglegemini, color: "var(--dark-text)" },
  "Google AI": { icon: SiGooglegemini, color: "var(--dark-text)" },

  // Lighthouse
  Lighthouse: { icon: SiLighthouse, color: "var(--dark-text)" },
  "Google Lighthouse": { icon: SiLighthouse, color: "var(--dark-text)" },

  // Zustand
  Zustand: { icon: SiReact, color: "var(--dark-text)" },

  // Stripe & OpenAI
  Stripe: { icon: SiStripe, color: "var(--dark-text)" },
  OpenAI: { icon: SiOpenai, color: "var(--dark-text)" },

  // Leaflet
  LeafLet: { icon: SiLeaflet, color: "var(--dark-text)" },
  Leaflet: { icon: SiLeaflet, color: "var(--dark-text)" },

  // NPM
  NPM: { icon: SiNpm, color: "var(--dark-text)" },
  npm: { icon: SiNpm, color: "var(--dark-text)" },

  // Render & Kinde
  Render: { icon: SiRender, color: "var(--dark-text)" },
  Kinde: { icon: SiReact, color: "var(--dark-text)" },

  // Firebase
  Firebase: { icon: SiFirebase, color: "var(--dark-text)" },

  // HTML / CSS / JS
  HTML: { icon: SiHtml5, color: "var(--dark-text)" },
  CSS: { icon: SiCss3, color: "var(--dark-text)" },
  JS: { icon: SiJavascript, color: "var(--dark-text)" },
  JavaScript: { icon: SiJavascript, color: "var(--dark-text)" },
};

// Get icon for a technology
export const getTechIcon = (techName) => {
  return techIcons[techName] || techIcons[techName?.toLowerCase?.()] || { icon: SiReact, color: "var(--dark-text)" };
};