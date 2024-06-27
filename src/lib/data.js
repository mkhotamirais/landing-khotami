import { FaBookOpen, FaComputer, FaGamepad, FaYoutube, FaScrewdriverWrench } from "react-icons/fa6";
import { TbLibrary } from "react-icons/tb";

export const mainMenus = [
  {
    label: "Landing Page",
    icon: FaComputer,
    subMenus: [
      { href: "lp-1", label: "lp 1" },
      { href: "lp-2", label: "lp 2" },
    ],
  },
  {
    label: "Library",
    icon: TbLibrary,
    subMenus: [
      { href: "bulb-1", label: "bulb 1" },
      { href: "bulb-2", label: "bulb 2" },
      { href: "parallax-1", label: "Parallax 1" },
      { href: "parallax-2", label: "Parallax 2" },
      { href: "fliptext", label: "Flip Text" },
      { href: "float-nav-1", label: "Float Nav 1" },
      { href: "float-nav-2", label: "Float Nav 2" },
    ],
  },
  {
    label: "Game",
    icon: FaGamepad,
    subMenus: [
      { href: "snack", label: "Snack" },
      { href: "tictactoe", label: "Tictactoe" },
    ],
  },
  {
    label: "Youtube Tutorial",
    icon: FaYoutube,
    subMenus: [
      { href: "webdecoded-1", label: "Webdecoded 1" },
      { href: "web-design-mastery-1", label: "Web Design Mastery 1" },
    ],
  },
  {
    label: "Theory",
    icon: FaBookOpen,
    subMenus: [
      { href: "color", label: "Color" },
      { href: "google-font-pairing", label: "Google Font Pairing" },
    ],
  },
  {
    label: "Tools",
    icon: FaScrewdriverWrench,
    subMenus: [
      { href: "clock", label: "Clock" },
      { href: "stopwatch", label: "Stopwatch" },
    ],
  },
];
