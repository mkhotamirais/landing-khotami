import {
  IoLaptopOutline,
  IoGameControllerOutline,
  IoAppsOutline,
  IoLibraryOutline,
  IoBookOutline,
} from "react-icons/io5";
import { SlSocialYoutube } from "react-icons/sl";

export const mainMenus = [
  {
    label: "Apps",
    icon: IoAppsOutline,
    description: "Contains simple applications that are easy to use.",
    subMenus: [
      { href: "clock", label: "Clock" },
      { href: "stopwatch", label: "Stopwatch" },
      { href: "symbol-color", label: "Symbol Color" },
    ],
  },
  {
    label: "Landing Page",
    icon: IoLaptopOutline,
    description: "Contains several landing page models from various types of websites.",
    subMenus: [
      { href: "lp-1", label: "lp 1" },
      { href: "lp-2", label: "lp 2" },
    ],
  },
  {
    label: "Library",
    icon: IoLibraryOutline,
    description: "Contains simple component models as building blocks for the UI.",
    subMenus: [
      { href: "element-scroll-1", label: "Element Scroll 1" },
      { href: "element-scroll-2", label: "Element Scroll 2" },
      { href: "progress-bar-1", label: "progress bar 1" },
      { href: "bulb-1", label: "bulb 1" },
      { href: "bulb-2", label: "bulb 2" },
      { href: "parallax-1", label: "Parallax 1" },
      { href: "parallax-2", label: "Parallax 2" },
      { href: "fliptext", label: "Flip Text" },
      { href: "float-nav-1", label: "Float Nav 1" },
      { href: "float-nav-2", label: "Float Nav 2" },
      { href: "float-nav-3", label: "Float Nav 3" },
    ],
  },
  {
    label: "Game",
    icon: IoGameControllerOutline,
    description: "Contains simple and easy-to-play games to fill your free time.",
    subMenus: [
      { href: "snack", label: "Snack" },
      { href: "tictactoe", label: "Tictactoe" },
    ],
  },
  {
    label: "Youtube Tutorial",
    icon: SlSocialYoutube,
    description: "Contains the results of my learning from following tutorials on various YouTube channels.",
    subMenus: [
      { href: "webdecoded-1", label: "Webdecoded 1" },
      { href: "web-design-mastery-1", label: "Web Design Mastery 1" },
    ],
  },
  {
    label: "Theory",
    icon: IoBookOutline,
    description: "Contains theoretical references as a foundation for building websites.",
    subMenus: [
      { href: "color", label: "Color" },
      { href: "source-image", label: "Source Image" },
      { href: "google-font-pairing", label: "Google Font Pairing" },
    ],
  },
];
