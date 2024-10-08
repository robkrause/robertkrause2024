import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Robert Krause",
  EMAIL: "mail@robertkrau.se",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_WORKS_ON_HOMEPAGE: 2,
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

export const IMPRINT: Metadata = {
  TITLE: "Imprint",
  DESCRIPTION: "Imprint of robertkrau.se",
};

export const DATA_PRIVACY: Metadata = {
  TITLE: "Data privacy",
  DESCRIPTION: "Data privacy of robertkrau.se",
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
