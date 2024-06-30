import { useJp } from "../../../store/useJp";
import { FaBars, FaXmark } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const navMenu = [
  { href: "", label: "home" },
  { href: "jp-user", label: "user" },
  { href: "jp-post", label: "post" },
];

export default function Jsonplaceholder() {
  const { nav, exitNav } = useJp();

  const handleClick = () => {
    if (nav) exitNav();
  };

  return (
    <main className="font-faunaOne min-h-screen w-full">
      <header className="h-16 border-b flex items-center justify-between md:justify-start md:gap-12 px-4 md:px-24">
        <a href="https://jsonplaceholder.typicode.com" className="font-cinzel text-xl">
          Jsonplaceholder
        </a>
        <NavBtn />
        <NavMdUp />
        <NavMdDown />
      </header>
      <section onClick={handleClick} className="min-h-[calc(100vh-4rem)] text-sm px-4 md:px-24">
        <Outlet />
      </section>
    </main>
  );
}

function NavBtn() {
  const { nav, toggNav } = useJp();
  return (
    <button
      onClick={toggNav}
      className={`${nav ? "rotate-180" : ""} block sm:hidden text-2xl p transition-all duration-150`}
    >
      {nav ? <FaXmark /> : <FaBars />}
    </button>
  );
}

function NavContent({ className }) {
  const { nav, exitNav } = useJp();
  const handleClick = () => {
    if (nav) exitNav();
  };
  return navMenu.map((item) => (
    <NavLink onClick={handleClick} to={item.href} key={item.href} className={`${className} hover:text-cyan-500`}>
      {item.label}
    </NavLink>
  ));
}

function NavMdUp() {
  return (
    <nav className="hidden md:flex gap-6">
      <NavContent />
    </nav>
  );
}

function NavMdDown() {
  const { nav } = useJp();
  return (
    <nav
      className={`${
        nav ? "scale-y-100" : "scale-y-0"
      } z-40 origin-top border-b absolute top-16 inset-x-0 flex md:hidden flex-col p-4 bg-white transition-all duration-150`}
    >
      <NavContent className={"py-2"} />
    </nav>
  );
}
