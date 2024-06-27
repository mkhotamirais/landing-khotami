import { FaBookOpen, FaComputer, FaGamepad, FaYoutube } from "react-icons/fa6";
import { TbLibrary } from "react-icons/tb";
import { GrAppsRounded } from "react-icons/gr";

export const mainMenus = [
  {
    label: "Apps",
    icon: GrAppsRounded,
    description: "Contains simple applications that are easy to use.",
    subMenus: [
      { href: "clock", label: "Clock" },
      { href: "stopwatch", label: "Stopwatch" },
      { href: "symbol-color", label: "Symbol Color" },
    ],
  },
  {
    label: "Landing Page",
    icon: FaComputer,
    description: "Contains several landing page models from various types of websites.",
    subMenus: [
      { href: "lp-1", label: "lp 1" },
      { href: "lp-2", label: "lp 2" },
    ],
  },
  {
    label: "Library",
    icon: TbLibrary,
    description: "Contains simple component models as building blocks for the UI.",
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
    description: "Contains simple and easy-to-play games to fill your free time.",
    subMenus: [
      { href: "snack", label: "Snack" },
      { href: "tictactoe", label: "Tictactoe" },
    ],
  },
  {
    label: "Youtube Tutorial",
    icon: FaYoutube,
    description: "Contains the results of my learning from following tutorials on various YouTube channels.",
    subMenus: [
      { href: "webdecoded-1", label: "Webdecoded 1" },
      { href: "web-design-mastery-1", label: "Web Design Mastery 1" },
    ],
  },
  {
    label: "Theory",
    icon: FaBookOpen,
    description: "Contains theoretical references as a foundation for building websites.",
    subMenus: [
      { href: "color", label: "Color" },
      { href: "google-font-pairing", label: "Google Font Pairing" },
    ],
  },
];

export const symbolColorMenus = [
  { name: "red", hex: "#ff0000", bgHex: "bg-[#ff0000]" },
  { name: "green", hex: "#00ff00", bgHex: "bg-[#00ff00]" },
  { name: "blue", hex: "#0000ff", bgHex: "bg-[#0000ff]" },
];
