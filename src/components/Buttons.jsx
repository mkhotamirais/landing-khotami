import { FaChevronLeft, FaHouse } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Button({ children, onClick, className, className2, disabled = false }) {
  const [isTapped, setIsTapped] = useState(false);

  const handleTap = () => {
    setIsTapped(true);
    const timeout = setTimeout(() => {
      setIsTapped(false);
    }, 0);
    return () => clearTimeout(timeout);
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${className} relative disabled:opacity-50 flex items-center justify-center`}
    >
      <motion.div
        className={`${className2} rounded-full p-3 w-full`}
        whileHover={{ backgroundColor: "#efefef" }}
        animate={{ backgroundColor: "#ffffff" }}
        transition={{ type: "tween", duration: 0.2 }}
        onTap={handleTap}
      >
        {children}
        <AnimatePresence>
          {isTapped && (
            <motion.div
              className="block scale-0 bg-[rgba(0,0,0,.1)] absolute inset-0 rounded-full origin-center"
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 1, opacity: isTapped ? 1 : 0 }}
              exit={{ opacity: 0, transition: { duration: 0.6 } }}
              transition={{ duration: 0.1 }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  );
}
Button.propTypes;

export function Prev() {
  return (
    <Link to={-1}>
      <Button>
        <FaChevronLeft />
      </Button>
    </Link>
  );
}
Prev.propTypes;

export function BackHome() {
  return (
    <Button href={"/"}>
      <FaHouse />
    </Button>
  );
}
