import { useState } from "react";
import { Button } from "../../components/Buttons";
import { googleFontList, googleFontPairingMenus } from "../../lib/googleFont";

export default function GoogleFontPairingTheory() {
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [active, setActive] = useState(0);

  const handleClick = (judul, konten, i) => {
    setTitle(judul);
    setContent(konten);
    setActive(i);
  };

  const totalMono = googleFontList.filter((g) => g.type == "monospace").length;
  const totalSerif = googleFontList.filter((g) => g.type == "serif").length;
  const totalSansSerif = googleFontList.filter((g) => g.type == "sans-serif").length;

  return (
    <section className="p-3 sm:px-12 lg:px-24 bg-zinc-50">
      <div className="flex gap-1 justify-center w-full sm:w-2/3 mx-auto flex-wrap mb-8">
        {googleFontPairingMenus.map((item, i) => (
          <Button
            key={i}
            onClick={() => handleClick(`${item.title}`, `${item.content}`, i)}
            className={`border ${active === i ? "border-cyan-700" : "border-gray-300"}`}
            className2={`p-1 px-2`}
          >
            {i}
          </Button>
        ))}
      </div>
      <h2 className={`${title} text-4xl my-3`}>
        {title?.split("-")[1]} & {content?.split("-")[1]} (title & content)
      </h2>
      <p className={`${content} leading-relaxed`}>
        Google Font Pairing: 1. Merriweather & Open Sans; 2. Playfair Display & Montserrat; 3. Lora & Lato; 4. Roboto &
        Roboto Slab; 5. PT Serif & PT Sans; 6. Oswald & Raleway; 7. Bitter & Source Sans Pro; 8. Nunito & Nunito Sans;
        9. Spectral & Rubik; 10. Oswald & Noto Sans; 11. Space Mono & Muli; 12. Fjalla One & Libre Baskerville; 13.
        Cinzel & Fauna One; 14. Abril Fatface & Poppins; 15. Ubuntu & Lora
      </p>

      <h2 className="text-3xl mt-5 mb-3">Google Font List</h2>
      <p>
        Monospace {totalMono} | Serif {totalSerif} | Sans-Serif {totalSansSerif}
      </p>
      <ol className="list-inside list-decimal">
        {googleFontList
          .sort((a, b) => (a.title > b.title ? 1 : a.title < b.title ? -1 : 0))
          .map((item) => (
            <li key={item.title} className={`${item.classTw} leading-relaxed`}>
              {item.title} | Hello World | {item.type}
            </li>
          ))}
      </ol>
    </section>
  );
}
