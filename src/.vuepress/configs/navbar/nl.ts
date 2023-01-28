import type { NavbarConfig } from "@vuepress/theme-default";

export const nl: NavbarConfig = [
  {
    text: "Home",
    link: "/nl/",
  },
  {
    text: "Meer",
    children: [
      {
        text: "Over deze website",
        children: [
          "/changes/",
          "/nl/privacy/",
          {
            text: "Broncode",
            link: "https://github.com/ricardobalk/website",
          },
          {
            text: "Tor-versie",
            link: "http://nciwf3vh63efdjqymcpq2uey2ahufyskyzeon4zomd6vg4lpdg5vfiyd.onion/",
          },
        ],
      },
      {
        text: "Engelstalige pagina's",
        children: [
          {
            text: "Blog",
            link: "/blog/",
          },
          {
            text: "Handleidingen",
            link: "/guides/",
          },
        ],
      },
    ],
  },
];
