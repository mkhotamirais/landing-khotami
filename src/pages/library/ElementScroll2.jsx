import Processing from "../../components/Processing";

export default function ElementScroll2() {
  return <Processing />;
}

// import { useRef } from "react";
// import { motion, useScroll } from "framer-motion";

// function Item() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["end end", "start start"],
//   });

//   return (
//     <section className="flex items-center justify-normal h-screen">
//       <div ref={ref} className="w-1/4 h-[50vh] border border-red-500 relative">
//         <figure className="progress">
//           <svg
//             width="75"
//             height="75"
//             viewBox="0 0 100 100"
//             className="sticky top-0 w-20 h-20 m-0 p-0 -translate-x-full -rotate-90"
//           >
//             <circle
//               cx="50"
//               cy="50"
//               r="30"
//               pathLength="1"
//               className="bg"
//               strokeDashoffset="0"
//               strokeWidth="5%"
//               fill="none"
//               stroke="red"
//               opacity=".2"
//             />
//             <motion.circle
//               cx="50"
//               cy="50"
//               r="30"
//               strokeDashoffset="0"
//               strokeWidth="5%"
//               fill="none"
//               pathLength="1"
//               stroke="red"
//               style={{ pathLength: scrollYProgress }}
//             />
//           </svg>
//         </figure>
//       </div>
//     </section>
//   );
// }

// //   section {
// //     height: 100vh;
// //     display: flex;
// //     justify-content: center;
// //     align-items: center;
// //   }

// export default function ElementScroll2() {
//   return (
//     <section className="h-screen items-center justify-center flex flex-col gap-8">
//       <Item />
//       <Item />
//       <Item />
//       <Item />
//       <Item />
//       <Item />
//       <Item />
//       <Item />
//       <Item />
//       <Item />
//       <Item />
//       <Item />
//     </section>
//   );
// }
