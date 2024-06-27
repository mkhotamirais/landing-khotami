import { motion, useScroll, useSpring } from "framer-motion";

export default function ProgressBar1() {
  const { scrollYProgress } = useScroll();

  const scaleXSpring = useSpring(scrollYProgress);

  return (
    <section className="w-full min-h-[180vh]">
      <div className="fixed top-0">Page Scroll Progress</div>
      <motion.div className="h-2 bg-red-500 w-full fixed top-6 origin-left" style={{ scaleX: scrollYProgress }} />
      <div className="fixed top-8">Page Scroll Progress Sprig Smoothing</div>
      <motion.div className="h-2 bg-red-500 w-full fixed top-14 origin-left" style={{ scaleX: scaleXSpring }} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full text-2xl px-3">
        Scroll me and look at the top
      </div>
    </section>
  );
}
