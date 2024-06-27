import { useState } from "react";
import { symbolColorMenus } from "../../lib/colorData";
import { motion } from "framer-motion";

export default function SymbolColor() {
  const [colorData, setColorData] = useState({
    nameIdn: "putih",
    nameEng: "white",
    hex: "#ffffff",
    bgHex: "bg-[#ffffff] text-gray-900",
    rgb: "(255, 255, 255)",
    sifat: "Bersih, murni, sederhana.",
    psikologi:
      "Putih sering dikaitkan dengan kesucian, kesederhanaan, dan kepolosan. Ini juga bisa memberikan kesan ruang yang terbuka dan bersih.",
    penggunaan:
      "Digunakan untuk memberikan kesan bersih, terang, dan luas, sering digunakan dalam desain minimalis atau medis.",
  });

  const [active, setActive] = useState("#ffffff");
  const [search, setSearch] = useState("");

  const handleClick = (item) => {
    setColorData(item);
    setActive(item.hex);
  };
  return (
    <section className="font-poppins w-full h-screen bg-gray-100 flex flex-col items-center p-3 sm:px-12 md:px-20 lg:px-48 xl:px-72 justify-center">
      <SearchColor search={search} setSearch={setSearch} />
      <div className={`${colorData.bgHex} h-[90vh] relative rounded-xl size-full flex flex-col p-1`}>
        <div className="relative h-1/2 rounded-xl bg-gray-50 flex flex-col">
          <div className="h-5/6 flex flex-col overflow-y-scroll rounded p-2 gap-[0.2rem]">
            {symbolColorMenus
              .filter((c) => c.nameEng.includes(search) || c.nameIdn.includes(search))
              .map((item) => (
                <motion.button
                  key={item.hex}
                  onClick={() => handleClick(item)}
                  className={`flex justify-between px-2 capitalize items-center p-1 rounded-lg`}
                  animate={{ backgroundColor: active === `${item.hex}` ? `${item.hex}` : "#afffff" }}
                  whileHover={{ backgroundColor: `${colorData.hex}` }}
                >
                  <div>
                    {item.nameEng} ({item.nameIdn})
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="font-mono uppercase">{item.hex}</div>
                    <div className={`w-5 rounded h-5 ${item.bgHex}`} />
                  </div>
                </motion.button>
              ))}
          </div>
          <div className={`${colorData.bgHex} h-1/6 rounded-xl m-1 gap-1 flex items-center justify-center`}>
            <span className="capitalize">{colorData.nameEng}</span>:
            <span className="font-mono uppercase">{colorData.hex}</span>
          </div>
        </div>
        <div className="h-1/2 rounded-xl bg-gray-50 flex flex-col">
          <div className={`${colorData.bgHex} capitalize h-1/6 rounded-xl m-1 flex items-center justify-center`}>
            Description {colorData.nameEng}
          </div>
          <div className={`text-gray-900 h-5/6 p-2 flex flex-col gap-2 overflow-y-scroll`}>
            <div>
              <span className="font-medium">Name</span>: {colorData?.nameEng} ({colorData?.nameIdn})
            </div>
            <div>
              <span className="font-medium">Hex</span>: <span className="font-mono uppercase">{colorData?.hex}</span>
            </div>
            <div>
              <span className="font-medium">RGB</span>: {colorData?.rgb}
            </div>
            <div>
              <span className="font-medium">Sifat</span>: {colorData?.sifat}
            </div>
            <div>
              <span className="font-medium">Psikologi</span>: {colorData?.psikologi}
            </div>
            <div>
              <span className="font-medium">Penggunaan</span>: {colorData?.penggunaan}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SearchColor({ search, setSearch }) {
  return (
    <input
      value={search}
      type="search"
      onChange={(e) => setSearch(e.target.value)}
      className="border placeholder:text-sm w-full rounded-xl p-2 focus:outline-cyan-500 mb-2"
      placeholder="Search by name (eng/idn) [44 colors available]"
    />
  );
}
SearchColor.propTypes;
