export const categories = ["All", "Web Design", "Applications", "Desarrollo web"] as const;

export type Category = (typeof categories)[number];

export type Project = {
  title: string;
  category: Exclude<Category, "All">;
  image: string;
};

export const projects: Project[] = [
  { title: "Sistema de Inventario", category: "Desarrollo web", image: "/images/projects/Sistema de Inventarios/1.jfif" },
];
