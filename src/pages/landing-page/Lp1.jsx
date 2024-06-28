import { useState } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";

const navMenus = [
  { href: "#", label: "destinasi" },
  { href: "#", label: "pakes wisata" },
  { href: "#", label: "pemesanan" },
  { href: "#", label: "tentang kami" },
  { href: "#", label: "kontak" },
];

export default function Lp1() {
  const [openNav, setOpenNav] = useState(false);

  const handleBody = () => {
    setOpenNav(false);
  };

  const handleToggleNav = (e) => {
    e.stopPropagation();
    setOpenNav((prev) => !prev);
  };

  return (
    <section onClick={handleBody} className="font-poppins min-h-screen">
      <nav className="h-16 flex items-center justify-between md:px-4 lg:px-12 xl:px-24">
        <div className="z-20 flex justify-between bg-orange-500 px-4 md:px-0 md:bg-transparent h-full md:w-fit items-center w-full">
          <a href="/" className="font-bebasNeue text-2xl">
            logo<span className="text-white md:text-orange-500">khotami</span>.
          </a>
          <button
            onClick={handleToggleNav}
            className={`${openNav ? "rotate-180" : ""} text-white text-xl md:hidden transition-all duration-150`}
          >
            {openNav ? <FaXmark /> : <FaBars />}
          </button>
        </div>
        <div
          className={`z-10 ${
            openNav ? "translate-y-0" : "-translate-y-full"
          } absolute md:static md:translate-y-0 top-16 flex flex-col lg:gap-4 md:flex-row inset-x-0 py-2 md:py-0 bg-orange-500 md:bg-white transition-all duration-150`}
        >
          {navMenus.map((item) => (
            <a
              href={item.href}
              key={item.label}
              className="py-3 px-4 md:px-2 text-white md:text-gray-800 capitalize text-center md:border-b-2 border-b-white hover:border-b-orange-500 flex items-center justify-center hover:text-gray-800 transition-all duration-300 md:w-max"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden md:flex gap-5">
          <button className="hover:text-orange-500">Register</button>
          <button className="bg-orange-500 hover:bg-orange-400 text-white rounded-xl p-2 px-3">Login</button>
        </div>
      </nav>
      {/* <header>header</header> */}
    </section>
  );
}
