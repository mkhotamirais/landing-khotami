import { Link } from "react-router-dom";
import { FaArrowDownLong } from "react-icons/fa6";
import { useMm } from "../../store/useMm";
import { Button } from "../../components/Buttons";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function Hero() {
  const { toggleOpenMm } = useMm();
  const { scrollY } = useScroll();

  const yTransH1 = useTransform(scrollY, [0, 50], [0, -300]);
  const scaleTransP = useTransform(scrollY, [0, 100], [1, 0]);
  const rotateTransButtons = useTransform(scrollY, [0, 250], ["0", "90deg"]);
  const yTransDown = useTransform(scrollY, [450, 550], [0, 500]);
  const opacityTransDown = useTransform(scrollY, [450, 550], [1, 0]);

  const ySpringH1 = useSpring(yTransH1, { stiffness: 300, damping: 30 });

  const handleClick = (e) => {
    e.stopPropagation();
    toggleOpenMm();
  };
  return (
    <motion.section
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="z-10 font-raleway px-3 w-full h-screen text-center flex flex-col gap-12 items-center justify-center"
    >
      <div className="flex flex-col items-center gap-6">
        <motion.h1 style={{ y: ySpringH1 }} className="uppercase text-4xl md:text-5xl font-oswald">
          welcome to landing-Apps
        </motion.h1>
        <motion.p style={{ scale: scaleTransP }} className="text-lg md:text-xl">
          Thank you for your visit. <br />
          Hello, I&apos;m Khotami, I&apos;m a web developer
        </motion.p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          style={{ rotateX: rotateTransButtons }}
          transition={{ delay: 0.5 }}
          className="flex  gap-3"
        >
          <Link to="portofolio-saya">
            <Button className={"border w-32 border-cyan-500 rounded-full capitalize"}>About Me</Button>
          </Link>
          <Button onClick={handleClick} className={"w-32 border border-gray-500 rounded-full capitalize"}>
            eksplore
          </Button>
        </motion.div>
      </div>
      <motion.div
        initial={{ scale: 0, y: 100 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ delay: 1 }}
        style={{ y: yTransDown, opacity: opacityTransDown }}
      >
        <Link to="#summary">
          <Button>
            <FaArrowDownLong className="text-gray-700" />
          </Button>
        </Link>
      </motion.div>
    </motion.section>
  );
}
