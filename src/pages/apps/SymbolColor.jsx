import { useState } from "react";
import { symbolColorMenus } from "../../lib/data";

export default function SymbolColor() {
  const [colorData, setColorData] = useState({
    name: "red",
    hex: "#ff0000",
    bgHex: "bg-[#ff0000]",
  });

  const handleClick = ({ name, hex, bgHex }) => {
    setColorData({ name, hex, bgHex });
  };
  return (
    <section className="w-full h-screen bg-gray-50 flex items-center p-3 justify-center">
      <div className={`${colorData.bgHex} rounded-xl size-full flex flex-col p-1 gap-1 `}>
        <div className="size-full rounded-xl bg-white flex flex-col">
          <div className="h-4/5 flex flex-col overflow-y-scroll rounded p-2">
            {symbolColorMenus.map((item) => (
              <button
                key={item.hex}
                onClick={() => handleClick({ name: item.name, hex: item.hex, bgHex: item.bgHex })}
                className="flex justify-between"
              >
                {item.name}
                <div className={`w-5 rounded h-5 ${item.bgHex}`}></div>
              </button>
            ))}
          </div>
          <div className="h-1/5" />
        </div>
        <div className="size-full rounded-xl bg-white flex flex-col">
          <div className="h-1/5" />
          <div className="h-4/5 p-2 rounded">Deskripsi</div>
        </div>
        <div
          className={`absolute w-3/4 border-white border-2 h-32 rounded-2xl ${colorData.bgHex} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col text-white capitalize text-2xl
        `}
        >
          <div className="border-b-2 border-white h-full flex items-center justify-center">
            {colorData.name}: {colorData.hex}
          </div>
          <div className="border-t-2 border-white h-full flex items-center justify-center">description</div>
        </div>
      </div>
    </section>
  );
}
