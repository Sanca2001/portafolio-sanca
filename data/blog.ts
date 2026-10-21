export type Post = {
  title: string;
  category: string;
  date: string;
  dateLabel: string;
  image: string;
  text: string;
};

export const posts: Post[] = [
  { title: "Design conferences in 2024", category: "Design", date: "2024-02-23", dateLabel: "Feb 23, 2024", image: "https://i.postimg.cc/DysCZrWs/blog-1.jpg", text: "In 2024, several exciting design conferences are set to take place, offering opportunities for professionals and enthusiasts to connect, learn, and share innovative ideas." },
  { title: "Best fonts every designer", category: "Design", date: "2024-01-29", dateLabel: "Jan 29, 2024", image: "https://i.postimg.cc/QC7qFDMs/blog-2.jpg", text: "When it comes to typography, choosing the right font is essential for effective design. In this article, I'll bring a brief overview of some of the best fonts that every designer should consider incorporating into their toolkit." },
  { title: "Design digest #80", category: "Design", date: "2023-12-20", dateLabel: "Dec 20, 2023", image: "https://i.postimg.cc/W1T71QcL/blog-3.jpg", text: "Hello, my friends. In this Design Digest, I'll show you a curated collection of the latest trends, insights, and innovations in the design world. This edition highlights key themes and discussions that are shaping the future of design." },
  { title: "2023 UI interactions", category: "Design", date: "2023-11-29", dateLabel: "Nov 29, 2023", image: "https://i.postimg.cc/2S0n8yxh/blog-4.jpg", text: "As we move into 2024, 2023 was marked by the rapidly evolution of the landscape of UI interactions, driven by advancements in technology and user expectations. Dive with me in this text to see the main areas changed in this year." },
  { title: "The forgotten art of spacing", category: "Design", date: "2023-11-12", dateLabel: "Nov 12, 2023", image: "https://i.postimg.cc/YCCmVkw9/blog-5.jpg", text: "In the realm of design, spacing is often an overlooked yet crucial element that can significantly impact the overall aesthetic and functionality of a composition. This post will emphasize the importance of white space, margins, and padding in creating visually appealing and effective designs." },
  { title: "Design digest #79", category: "Design", date: "2023-10-20", dateLabel: "Oct 20, 2023", image: "https://i.postimg.cc/zBCBvP16/blog-6.jpg", text: "Hi, my friends. In this Design Digest I'll focus in the tools and resources that we use daily in our projects. Also, I'll include examples of software recommendations, online courses, and design communities that foster collaboration and learning." },
];
