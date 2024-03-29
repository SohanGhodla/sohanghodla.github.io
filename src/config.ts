import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://sohanghodla.github.io/",
  author: "Sohan Ghodla",
  title: "Sohan Ghodla",
  content:
    "A personal website aimed at showcasing research output of Sohan Ghodla in Physics, Astrophysics, Gravitational waves, compact objects, accretion disks and black holes.",
  lightAndDarkMode: true,
  postPerPage: 10,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/sohanghodla",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:sgho069@aucklanduni.ac.nz",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
