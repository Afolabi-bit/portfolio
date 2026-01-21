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

  // Leaflet
  LeafLet: { icon: SiLeaflet, color: "var(--dark-text)" },
  Leaflet: { icon: SiLeaflet, color: "var(--dark-text)" },

  // NPM
  NPM: { icon: SiNpm, color: "var(--dark-text)" },
  npm: { icon: SiNpm, color: "var(--dark-text)" },

  // Render
  Render: { icon: SiReact, color: "var(--dark-text)" }, // Using React icon as placeholder

  // Kinde (using a generic icon)
  Kinde: { icon: SiReact, color: "var(--dark-text)" }, // Using React icon as placeholder

  // Firebase
  Firebase: { icon: SiFirebase, color: "var(--dark-text)" },

  // HTML
  HTML: { icon: SiHtml5, color: "var(--dark-text)" },

  // CSS
  CSS: { icon: SiCss3, color: "var(--dark-text)" },

  // JavaScript
  JS: { icon: SiJavascript, color: "var(--dark-text)" },
  JavaScript: { icon: SiJavascript, color: "var(--dark-text)" },
};

// Get icon for a technology
export const getTechIcon = (techName) => {
  return techIcons[techName] || { icon: SiReact, color: "var(--dark-text)" }; // Default fallback
};
