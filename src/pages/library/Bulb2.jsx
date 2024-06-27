import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const boxColorMenu = [
  { label: "red", color: "bg-red-500" },
  { label: "green", color: "bg-green-500" },
  { label: "blue", color: "bg-blue-500" },
  { label: "purple", color: "bg-purple-500" },
  { label: "yellow", color: "bg-yellow-500" },
];

export default function Bulb2() {
  const { scrollY } = useScroll();
  const [startAnimation, setStartAnimation] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setStartAnimation(latest > 50);
  });

  return (
    <div>
      <div className="text-3xl text-center mt-20">Scroll (sampai ketinggian 50px) untuk memulai animasi</div>
      <motion.div
        id="blub1"
        className="flex flex-wrap gap-5 w-1/2 min-h-32 p-6 border rounded mx-auto mt-[25vh] items-center justify-center"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.5,
            },
          },
        }}
        // initial="hidden"
        // animate="visible"
        initial="hidden"
        animate={startAnimation ? "visible" : "hidden"}
      >
        {boxColorMenu.map((item, i) => (
          <motion.div
            key={i}
            className={`w-16 h-16 rounded ${item.color} flex items-center justify-center text-white`}
            variants={{
              hidden: { opacity: 0, scale: 0.8, y: 50 },
              visible: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: {
                  duration: 1,
                },
              },
            }}
          >
            {item.label}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
