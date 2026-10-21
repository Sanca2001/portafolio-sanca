export type TimelineItem = { title: string; period: string; text: string };
export type Skill = { name: string; value: number };

export const education: TimelineItem[] = [
  {
    title: "University school of the arts",
    period: "2008 - 2010",
    text: "There I learnt a wide range of topics that are essential to understanding both the theory and practical aspects of computing. This involves programming fundamentals, computer architecture, operating systems, databases, software engineering, problem solving, collaboration and communication soft skills.",
  },
  {
    title: "New York Academy of Art",
    period: "2006 - 2007",
    text: "I chose my master degree in technology. There I deepened my knowledge, enhanced my skills in the area and learnt how to increase my career prospects in a competitive job market.",
  },
  {
    title: "High School of Art and Design",
    period: "2003 - 2005",
    text: "There I learnt foundational courses and computer sciences fundamentals. In the institution, I chose my specialization in web-development that involves front-end and back-end technologies, user interface designs and content management systems.",
  },
];

export const experience: TimelineItem[] = [
  {
    title: "Creative director",
    period: "2015 - Present",
    text: "I can develop and oversee creative concepts for projects and campaigns managing a team of designers, writers, and other creative professionals.",
  },
  {
    title: "Art director",
    period: "2013 - 2015",
    text: "I create and develop visual concepts that align with the project's goals and objectives, supervising the design process and managing timelines and budgets for design projects.",
  },
  {
    title: "Web designer",
    period: "2010 - 2013",
    text: "I create logos, color schemes and typography for a brand's identity. Also I develop graphics for websites, social media and digital ads with applications that enhance user experience.",
  },
];

export const skills: Skill[] = [
  { name: "Web Design", value: 80 },
  { name: "Graphic Design", value: 70 },
  { name: "Branding", value: 90 },
  { name: "WordPress", value: 50 },
];
