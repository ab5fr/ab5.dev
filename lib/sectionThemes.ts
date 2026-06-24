import {
  Home,
  Code2,
  FolderKanban,
  GraduationCap,
  Mail,
  type LucideIcon,
} from "lucide-react";

export type SectionTheme = {
  id: string;
  label: string;
  icon: LucideIcon;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
};

export const sections: SectionTheme[] = [
  {
    id: "home",
    label: "Home",
    icon: Home,
    colors: {
      primary: "#0f0c29",
      secondary: "#302b63",
      accent: "#6b3fa0",
    },
  },
  {
    id: "skills",
    label: "Skills",
    icon: Code2,
    colors: {
      primary: "#0a1f1f",
      secondary: "#0d3d3d",
      accent: "#1a8a8a",
    },
  },
  {
    id: "projects",
    label: "Projects",
    icon: FolderKanban,
    colors: {
      primary: "#1a1208",
      secondary: "#3d2a0d",
      accent: "#c47f17",
    },
  },
  {
    id: "education",
    label: "Education",
    icon: GraduationCap,
    colors: {
      primary: "#0d1029",
      secondary: "#1e2a5f",
      accent: "#3d5af1",
    },
  },
  {
    id: "contact",
    label: "Contact",
    icon: Mail,
    colors: {
      primary: "#1a0a14",
      secondary: "#3d1a2e",
      accent: "#c43d7a",
    },
  },
];

export const TRANSITION_DURATION_MS = 900;
