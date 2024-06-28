import { useState } from "react";
import { background } from "../../lib/cssData";

export default function Css1() {
  const [active, setActive] = useState(null);
  const [style, setStyle] = useState({});

  const handleClick = (item, i) => {
    setActive(i);
    setStyle(item);
  };

  return (
    <section id="css1" style={style} className="min-h-[150vh] size-1 w-full p-3">
      <div className="flex flex-col gap-2">
        {background.map((item, i) => (
          <button
            onClick={() => handleClick(item, i)}
            key={i}
            className={`${
              active === i ? "bg-gray-200" : "bg-none"
            } border bg-white text-sm rounded-xl text-left hover:bg-gray-200 p-1 px-2 transition-all duration-150`}
          >
            {JSON.stringify(item)}
          </button>
        ))}
      </div>
    </section>
  );
}
