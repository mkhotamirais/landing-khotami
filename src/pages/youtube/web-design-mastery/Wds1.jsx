import { RiMenuLine } from "react-icons/ri";
import "./wds1.css";

const wds1Menus = [
  { href: "#", label: "Destination" },
  { href: "#", label: "Package" },
  { href: "#", label: "Blog" },
  { href: "#", label: "About Us" },
  { href: "#", label: "Contact" },
];

export default function Wds1() {
  return (
    <main className="font-bebas-neue">
      <nav>
        <div className="nav__header">
          <div className="nav__logo">
            <a href="#">
              Soul<span>Travel</span>
            </a>
          </div>
          <div className="nav__menu__btn" id="menu-btn">
            <RiMenuLine />
          </div>
        </div>
        <ul>
          {wds1Menus.map((item, i) => (
            <li key={i}>
              <a href="#">{item.label}</a>
            </li>
          ))}
        </ul>
        <div>
          <button className="font-">Sign Up</button>
          <button>Sign In</button>
        </div>
      </nav>
    </main>
  );
}
