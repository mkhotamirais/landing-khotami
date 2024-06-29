import Processing from "../../components/Processing";

export default function Lp3() {
  return <Processing />;
}

// import { motion, useScroll, useTransform } from "framer-motion";

// export default function Lp3() {
//   const { scrollY } = useScroll();
//   const y1 = useTransform(scrollY, [0, 500], [0, 100]);
//   const y2 = useTransform(scrollY, [0, 500], [0, -50]);
//   const y3 = useTransform(scrollY, [0, 500], [0, -200]);

//   return (
//     <section className="relative min-h-[100vh] w-full">
//       <motion.img style={{ y: y1 }} src="/images/pex-nature3.jpg" alt="img3" className="object-cover w-full h-screen" />
//       <motion.img
//         style={{ y: y2 }}
//         src="/images/pngt-grass2.png"
//         alt="img2"
//         className="z-40 absolute bottom-0 md:-bottom-[20vh] xl:-bottom-[25vh] w-full"
//       />
//       <motion.img style={{ y: y3 }} src="/images/pngt-grass.png" alt="img1" className="z-50 absolute -bottom-[80vh]" />
//     </section>
//   );
// }
