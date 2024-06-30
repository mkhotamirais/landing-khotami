import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useState } from "react";

const data = [
  { title: "carousel1", description: "", urlImg: "/images/pex-nature1.jpg" },
  { title: "carousel2", description: "", urlImg: "/images/pex-nature2.jpg" },
  { title: "carousel3", description: "", urlImg: "/images/pex-nature3.jpg" },
  { title: "carousel3", description: "", urlImg: "/images/pex-beach1.jpg" },
];

export default function Carousel1() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <section className="w-full min-h-screen">
      <div className="relative w-[70vw] h-[60vh] mx-auto border border-red-500 flex flex-row overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ x: direction === 1 ? "-100%" : "100%", opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction === 1 ? "100%" : "-100%", opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute object-cover object-center h-full w-full"
          >
            <img loading="eager" src={data[index].urlImg} alt={data[index].title} className="h-full w-full" />
          </motion.div>
        </AnimatePresence>
        <button
          onClick={handlePrev}
          className="bg-gray-500 absolute left-0 top-1/2 transform -translate-y-1/2 text-4xl text-white"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-500 absolute right-0 top-1/2 transform -translate-y-1/2 text-4xl text-white"
        >
          Next
        </button>
      </div>
    </section>
  );
}
