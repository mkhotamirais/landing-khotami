import { useState } from "react";

const pageDatas = [
  { id: "1", letter: "a" },
  { id: "2", letter: "b" },
  { id: "3", letter: "c" },
  { id: "4", letter: "d" },
  { id: "5", letter: "e" },
  { id: "6", letter: "f" },
  { id: "7", letter: "g" },
  { id: "8", letter: "h" },
  { id: "9", letter: "i" },
  { id: "10", letter: "j" },
  { id: "11", letter: "k" },
  { id: "12", letter: "l" },
  { id: "13", letter: "m" },
  { id: "14", letter: "n" },
  { id: "15", letter: "o" },
  { id: "16", letter: "p" },
  { id: "17", letter: "q" },
  { id: "18", letter: "r" },
  { id: "19", letter: "s" },
  { id: "20", letter: "t" },
  { id: "21", letter: "u" },
  { id: "22", letter: "v" },
  { id: "23", letter: "w" },
  { id: "24", letter: "x" },
  { id: "25", letter: "y" },
  { id: "26", letter: "z" },
];

export default function Paginasi() {
  const [totalPerPage, setTotalPerPage] = useState(10);
  const totalData = pageDatas.length;
  const totalPage = Math.ceil(totalData / totalPerPage);

  const [pageKini, setPageKini] = useState(1);

  const indexAkhir = pageKini * totalPerPage;
  const indexAwal = indexAkhir - totalPerPage;

  const pageData = pageDatas.slice(indexAwal, indexAkhir);

  const nextPage = () => (pageKini !== totalPage ? setPageKini(pageKini + 1) : null);
  const prevPage = () => (pageKini !== 1 ? setPageKini(pageKini - 1) : null);

  return (
    <section className="bg-gray-50 min-h-screen w-[95vw] mx-auto flex items-center justify-center">
      <div className="border rounded p-3 w-full sm:w-1/2 lg:w-1/4 aspect-square bg-white">
        <div className="flex justify-center">
          <input
            value={totalPerPage}
            type="number"
            min={5}
            max={26}
            onChange={(e) => {
              if (e.target.value < 5) {
                e.target.value = 5;
              }
              if (e.target.value > 26) {
                e.target.value = 26;
              }
              setTotalPerPage(e.target.value);
              setPageKini(1);
            }}
            // className="border w-12 p-3 text-xl aspect-square appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            className="border w-20 p-3 text-xl"
          />
        </div>
        <div className="flex flex-wrap gap-1 my-2 justify-center">
          <button disabled={pageKini === 1} onClick={prevPage} className="disabled:opacity-50 border px-2">
            prev
          </button>
          {Array(totalPage)
            .fill(totalPage)
            .map((item, i) => (
              <button
                onClick={() => setPageKini(i + 1)}
                key={i}
                className={`${pageKini == i + 1 ? "bg-gray-100" : "bg-white"} border aspect-square w-7`}
              >
                {i + 1}
              </button>
            ))}
          <button disabled={pageKini === totalPage} onClick={nextPage} className="disabled:opacity-50 border px-2">
            next
          </button>
        </div>
        <div className="flex gap-2 flex-wrap justify-around">
          {pageData?.map((item) => (
            <div key={item.id} className="border w-1/4 rounded p-3 flex items-center justify-center">
              {item.id}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
