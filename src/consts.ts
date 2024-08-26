import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Robert Krause",
  EMAIL: "mail@robertkrau.se",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION:
    "robertkrau.se is a side project of mine where I write about whatever I want.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Probably a lot of gaming and hardware related stuff.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Proud of my work",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "twitter-x",
    HREF: "https://x.com/feinripp",
  },
  {
    NAME: "github",
    HREF: "https://github.com/robkrause",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/robert-k-krause/",
  },
];
