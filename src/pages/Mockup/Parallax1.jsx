import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function Parallax1() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -400]);
  const y3 = useTransform(scrollY, [0, 500], [0, -700]);
  const y4 = useTransform(scrollY, [0, 500], [0, -1000]);
  const y5 = useTransform(scrollY, [0, 500], [0, -1300]);
  const smoothY1 = useSpring(y1, { stiffness: 100, damping: 60 });
  const smoothY2 = useSpring(y2, { stiffness: 100, damping: 50 });
  const smoothY3 = useSpring(y3, { stiffness: 100, damping: 40 });
  const smoothY4 = useSpring(y4, { stiffness: 100, damping: 30 });
  const smoothY5 = useSpring(y5, { stiffness: 100, damping: 20 });
  return (
    <div className="overflow-hidden">
      <motion.div
        style={{ y: smoothY1 }}
        className="absolute rounded-full bg-blue-500 w-[10rem] h-[10rem] mt-[20rem]"
      />
      <motion.div
        style={{ y: smoothY2 }}
        className="border absolute rounded-full bg-red-500 w-[10rem] h-[10rem] ml-[10rem] mt-[25rem]"
      />
      <motion.div
        style={{ y: smoothY3 }}
        className="border absolute rounded-full bg-green-500 w-[10rem] h-[10rem] ml-[20rem] mt-[30rem]"
      />
      <motion.div
        style={{ y: smoothY4 }}
        className="border absolute rounded-full bg-green-500 w-[10rem] h-[10rem] ml-[30rem] mt-[35rem]"
      />
      <motion.div
        style={{ y: smoothY5 }}
        className="border absolute rounded-full bg-green-500 w-[10rem] h-[10rem] ml-[40rem] mt-[40rem]"
      />
    </div>
  );
}
