import { useState } from "react";

const googleFontPairingMenus = [
  { title: null, content: null },
  { title: "font-merriweather", content: "font-openSans" },
  { title: "font-playfairDisplay", content: "font-montserrat" },
  { title: "font-lora", content: "font-lato" },
  { title: "font-roboto", content: "font-robotoSlab" },
  { title: "font-PTSerif", content: "font-PTSans" },
  { title: "font-oswald", content: "font-raleway" },
  { title: "font-bitter", content: "font-sourceSans3" },
  { title: "font-nunito", content: "font-nunitoSans" },
];

export default function GoogleFontPairingTheory() {
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [active, setActive] = useState(0);

  const handleClick = (judul, konten, i) => {
    setTitle(judul);
    setContent(konten);
    setActive(i);
  };

  return (
    <div className="">
      <div className="flex gap-1 justify-center flex-wrap">
        {googleFontPairingMenus.map((item, i) => (
          <button
            key={i}
            onClick={() => handleClick(`${item.title}`, `${item.content}`, i)}
            className={`border ${
              active === i ? "bg-cyan-700" : "bg-cyan-500"
            }  hover:opacity-50 text-white px-2 rounded-lg`}
          >
            {item.title ? `${item.title.split("-")[1]} & ${item.content.split("-")[1]}` : "Default"}
          </button>
        ))}
      </div>
      <h2 className={`${title} text-3xl`}>Google Font Pairing</h2>
      <p className={`${content}`}>
        Merriweather & Open Sans: Merriweather (untuk judul): Sebuah serif yang elegan dan mudah dibaca. Open Sans
        (untuk teks isi): Sebuah sans-serif yang bersih dan modern. <br />
        Playfair Display & Montserrat: Playfair Display (untuk judul): Sebuah serif dengan nuansa klasik. Montserrat
        (untuk teks isi): Sebuah sans-serif yang bergaya dan mudah dibaca. <br />
        Lora & Lato: Lora (untuk judul): Sebuah serif yang elegan dan serbaguna. Lato (untuk teks isi): Sebuah
        sans-serif yang modern dan mudah dibaca. <br />
        Roboto & Roboto Slab: Roboto (untuk teks isi): Sebuah sans-serif yang sangat populer dan mudah dibaca. Roboto
        Slab (untuk judul): Versi slab-serif dari Roboto, memberikan sedikit variasi sambil tetap menjaga konsistensi.{" "}
        <br />
        PT Serif & PT Sans: PT Serif (untuk judul): Sebuah serif yang klasik dan formal. PT Sans (untuk teks isi):
        Sebuah sans-serif yang bersih dan mudah dibaca. <br />
        Oswald & Raleway: Oswald (untuk judul): Sebuah sans-serif yang condong dan bergaya. Raleway (untuk teks isi):
        Sebuah sans-serif yang ringan dan modern. <br />
        Bitter & Source Sans Pro: Bitter (untuk judul): Sebuah serif yang kuat dan mudah dibaca. Source Sans Pro (untuk
        teks isi): Sebuah sans-serif yang bersih dan profesional. <br />
        Nunito & Nunito Sans: Nunito (untuk judul): Sebuah sans-serif yang bulat dan ramah. Nunito Sans (untuk teks
        isi): Versi sans-serif dari Nunito, memberikan kesan konsistensi.
      </p>
    </div>
  );
}
