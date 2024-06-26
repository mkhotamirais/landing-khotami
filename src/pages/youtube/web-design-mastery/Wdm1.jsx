import { RiMenuLine } from "react-icons/ri";
import "./wdm1.css";
import { useState } from "react";

const wds1Menus = [
  { href: "#", label: "Destination" },
  { href: "#", label: "Package" },
  { href: "#", label: "Blog" },
  { href: "#", label: "About Us" },
  { href: "#", label: "Contact" },
];

export default function Wdm1() {
  const [openNav, setOpenNav] = useState(false);
  const handleNav = () => {
    console.log(openNav);
    setOpenNav((prev) => !prev);
  };

  const handleMain = () => {
    if (openNav) setOpenNav(false);
  };

  return (
    <main className="font-poppins min-h-screen relative" onClick={handleMain}>
      <nav className="fixed isolate w-full z-50 md:static md:mx-auto max-w-[1200px] md:flex md:items-center md:snap-both md:gap-8">
        <div className="p-4 w-full flex items-center justify-between bg-orange-500 flex-1 p-0">
          <div>
            <a href="#" className="text-2xl font-medium font-bebasNeue text-white">
              Soul<span>Travel</span>
            </a>
          </div>
          <button onClick={handleNav} className="text-2xl text-white cursor-pointer" id="menu-btn">
            <RiMenuLine />
          </button>
        </div>
        <ul
          className={`absolute top-20 border w-full p-8 flex flex-col items-center justify-center gap-8 bg-orange-500 duration-500 -z-10 ${
            openNav ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {wds1Menus.map((item, i) => (
            <li key={i} className="">
              <a href="#" className="font-medium text-gray-50 hover:text-gray-700">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden">
          <button className="font-">Sign Up</button>
          <button>Sign In</button>
        </div>
      </nav>
    </main>
  );
}
