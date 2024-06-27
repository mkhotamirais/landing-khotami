import { FaBars, FaCaretLeft, FaHouse, FaUser, FaXmark } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { useMm } from "../store/useMm";
import { useState } from "react";
import { Link } from "react-router-dom";
import { mainMenus } from "../lib/data";

export function BtnMm() {
  const { openMm, toggleOpenMm } = useMm();
  const [hideBtn, setHideBtn] = useState(false);
  const handleClick = (e) => {
    e.stopPropagation();
    toggleOpenMm();
  };
  return (
    <motion.div
      className={`z-50 fixed bottom-4 border rounded-full w-12 text-xl h-12 flex items-center justify-center shadow-xl`}
      animate={{ left: hideBtn ? "-3rem" : "1rem" }}
      transition={{ duration: 0.2, type: "spring", stiffness: 200, damping: 20 }}
    >
      <motion.button onClick={handleClick} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
        <motion.div
          initial={false}
          animate={{ rotate: openMm ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="bg-gray-50 w-10 h-10 flex items-center justify-center rounded-full"
        >
          {openMm ? <FaXmark className="text-xl" /> : <FaBars className="text-xl" />}
        </motion.div>{" "}
      </motion.button>
      <button
        onClick={() => setHideBtn((prev) => !prev)}
        className={`${hideBtn ? "rotate-180" : ""} absolute left-full translate-x-2`}
      >
        <FaCaretLeft />
      </button>
      <BtnMenu />
    </motion.div>
  );
}

export function BtnMenu() {
  const { openMm, removeOpenMm } = useMm();
  const [hoveredMenu, setHoveredMenu] = useState("Landing Page");

  return (
    <AnimatePresence>
      {openMm && (
        <motion.div
          className="z-40 fixed bottom-[4.5rem] left-4 w-12 border rounded-full text-xl flex flex-col items-center py-1 gap-1"
          initial={{ opacity: 0, scale: 0.8, y: 80 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 80 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          {mainMenus.map((item) => (
            <div key={item.label}>
              <motion.button
                key={item.label}
                onClick={(e) => {
                  e.stopPropagation();
                  setHoveredMenu(item.label);
                }}
                className="bg-gray-50 z-40 relative rounded-full w-10 h-10 flex items-center justify-center"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,.1)" }}
                onHoverStart={() => setHoveredMenu(item.label)}
                onHoverEnd={() => setHoveredMenu(null)}
              >
                <item.icon />
                {hoveredMenu === item.label && (
                  <motion.div
                    className="z-30 absolute bottom-0 left-full w-[70vw] overflow-hidden pl-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="border rounded-xl bg-white w-full text-left p-2">
                      <h3 className="text-lg font-medium mb-2">{item.label}</h3>
                      <div className="flex flex-wrap gap-1">
                        {item.subMenus.map((itm, i) => (
                          <Link
                            onClick={() => {
                              if (openMm) removeOpenMm();
                            }}
                            to={itm.href}
                            key={i}
                            className="text-sm p-2 border rounded-lg hover:text-cyan-500"
                          >
                            {itm.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.button>
            </div>
          ))}
          <Link to="/portofolio-saya">
            <motion.button
              className="bg-gray-50 z-40 relative rounded-full w-10 h-10 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <FaUser />
            </motion.button>
          </Link>
          <Link to="/">
            <motion.button
              className="bg-gray-50 z-40 relative rounded-full w-10 h-10 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <FaHouse />
            </motion.button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
