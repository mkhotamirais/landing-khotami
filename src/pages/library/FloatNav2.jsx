import { useEffect, useState } from "react";
import { FaBlog, FaHouse, FaPhone, FaUser } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const flaotNavMenus = [
  { label: "home", icon: <FaHouse /> },
  { label: "about", icon: <FaUser /> },
  { label: "contact", icon: <FaPhone /> },
  { label: "blog", icon: <FaBlog /> },
];

export default function FloatNav2() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    const handleTimeout = setTimeout(() => {
      lastScrollY > 0 ? setVisible(false) : setVisible(true);
    }, 3000);

    isScrolling ? setVisible(true) : handleTimeout;

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(handleTimeout);
    };
  }, [lastScrollY, isScrolling]);

  return (
    <section className="min-h-screen">
      <motion.nav
        initial={{ x: "-50%", y: 0 }}
        animate={{ x: "-50%", y: visible ? 0 : -100 }}
        whileHover={{ y: 0 }}
        className="border left-1/2 fixed top-5 rounded-full p-2 shadow-xl"
      >
        <div className="flex gap-1">
          {flaotNavMenus.map((item) => (
            <Link to={`#${item.label}`} key={item.label} className="border capitalize rounded-full p-1 px-2">
              {item?.label}
            </Link>
          ))}
        </div>
      </motion.nav>
      <div id="home" className="min-h-[90vh] border mt-20 scroll-mt-0">
        <h2 className="uppercase text-4xl">home</h2>
      </div>
      <div id="about" className="min-h-[90vh] border mt-20 scroll-mt-20">
        <h2 className="uppercase text-4xl">about</h2>
      </div>
      <div id="contact" className="min-h-[90vh] border mt-20 scroll-mt-20">
        <h2 className="uppercase text-4xl">contact</h2>
      </div>
      <div id="blog" className="min-h-[90vh] border mt-20 scroll-mt-20">
        <h2 className="uppercase text-4xl">blog</h2>
      </div>
    </section>
  );
}
