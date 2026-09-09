import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export const SITE_NAME = "Payton Pierce";

export const MY_TIME_ZONE = "America/Chicago";

export const skillGroups = [
  {
    label: "Languages",
    items: ["HTML", "CSS", "SCSS", "JavaScript", "TypeScript"],
  },
  { label: "Frameworks & State", items: ["React", "Vue", "NextJS", "Redux"] },
  { label: "Styling & UI", items: ["Tailwind", "ShadCN", "Motion"] },
  {
    label: "Backend & Data",
    items: ["Strapi", "Supabase", "Rest APIs / JSON", "fetch / axios"],
  },
  { label: "Dev Workflow", items: ["git", "Cypress", "Jest"] },
] as const;

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

export const ACCENT_STORAGE_KEY = "accent";
export const ACCENT_ATTRIBUTE = "data-accent";

export const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/paytonjewell/",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/payton-pierce/",
    label: "LinkedIn",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/paytonpiercedev",
    label: "Twitter",
  },
];
