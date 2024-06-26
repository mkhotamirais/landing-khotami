import { FaComputer, FaGamepad, FaGear, FaYoutube } from "react-icons/fa6";

export const mainMenus = [
  {
    label: "Landing Page",
    icon: FaComputer,
    subMenus: ["Shop1", "Shop2", "School1", "School2"],
  },
  {
    label: "Mockup",
    icon: FaGear,
    subMenus: ["parallax1", "parallax2", "fliptext", "floatnav", "floatnav2"],
  },
  {
    label: "Game",
    icon: FaGamepad,
    subMenus: ["ular", "tictactoe"],
  },
  {
    label: "From Youtube",
    icon: FaYoutube,
    subMenus: ["webdecoded1", "lainnya"],
  },
];
