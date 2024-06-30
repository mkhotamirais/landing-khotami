import { useState } from "react";
import { background } from "../../lib/cssData";

export default function Css1() {
  const [active, setActive] = useState(0);
  const [style, setStyle] = useState({
    background: "url('images/uns-female3-h-xs.jpg') top/contain no-repeat content-box padding-box fixed",
  });

  const handleClick = (item, i) => {
    setActive(i);
    setStyle(item);
  };

  return (
    <section id="css1" style={style} className="min-h-[120vh] size-1 w-full p-3">
      <div className="text-inherit text-center border rounded-xl text-gray-400">
        background: bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit;
      </div>
      <div className="flex flex-col gap-2 fixed inset-2 right-10 top-24 sm:top-16 overflow-y-scroll">
        {background.map((item, i) => (
          <button
            onClick={() => handleClick(item, i)}
            key={i}
            className={`${
              active === i ? "bg-gray-200" : "bg-white bg-opacity-50"
            } border text-sm rounded-xl text-left hover:bg-gray-200 p-1 px-2 transition-all duration-150`}
          >
            {JSON.stringify(item).replaceAll(",", ", ")}
          </button>
        ))}
      </div>
    </section>
  );
}
