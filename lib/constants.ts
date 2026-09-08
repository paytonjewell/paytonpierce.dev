export const skills = {
  languages: ["HTML", "CSS", "SCSS", "JavaScript", "TypeScript"],
  frameworksState: ["React", "Vue", "NextJS", "Redux"],
  stylingUI: ["Tailwind", "ShadCN", "Motion"],
  backendData: ["Strapi", "Supabase", "Rest APIs / JSON", "fetch / axios"],
  devWorkflow: ["git", "Cypress", "Jest"],
};

export const contact = {
  email: "paytontaylor96@gmail.com",
  resume: {
    href: "/PaytonPierceResume.pdf",
    download: "PaytonPierceResume",
  },
};

export const ACCENTS = [
  { id: "default", label: "Default", from: "#bd93f9", to: "#ff79c6" },
  { id: "green", label: "Green", from: "#51fa7b", to: "#8be9fd" },
  { id: "yellow", label: "Yellow", from: "#f1fa8c", to: "#ffb86c" },
] as const;
