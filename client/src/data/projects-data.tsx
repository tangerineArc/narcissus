import { Binary, BriefcaseBusiness, Swords, Tornado } from "lucide-react";

export const projects = [
  {
    title: "Asphodel",
    url: "https://github.com/tangerineArc/asphodel",
    description:
      "a two-pass assembler and emulator based on a custom instruction set ",
    icon: <Binary />,
  },
  {
    title: "Résumé Builder",
    url: "https://github.com/tangerineArc/resume-builder",
    description:
      "create, preview and print résumés on the fly using an easy-to-use WYSIWYG editor",
    icon: <BriefcaseBusiness />,
  },
  {
    title: "Aeolus",
    url: "https://github.com/tangerineArc/aeolus",
    description:
      "frontend client for displaying weather-data from Visual Crossing",
    icon: <Tornado />,
  },
  {
    title: "Battleship",
    url: "https://github.com/tangerineArc/battleship",
    description: "play the battleship game in the browser",
    icon: <Swords />,
  },
];
