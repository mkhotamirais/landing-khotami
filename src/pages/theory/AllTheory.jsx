import { allTheory } from "../../lib/allTheory";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useTheory } from "../../store/useTheory";
import { useState } from "react";

const Container = ({ children }) => {
  return <section className="max-w-4xl mx-auto bg-white">{children}</section>;
};
Container.propTypes;

export default function AllTheory() {
  const { search, category, showSearch } = useTheory();

  let filteredTheory;
  filteredTheory = allTheory;
  if (category || search) {
    filteredTheory = filteredTheory.filter((t) => t.category === category && t.title.includes(search));
  }

  const totalPerPage = 10;
  const [pageKini, setPageKini] = useState(1);

  const totalData = filteredTheory.length;
  const totalPage = Math.ceil(totalData / totalPerPage);

  const indexAkhir = pageKini * totalPerPage;
  const indexAwal = indexAkhir - totalPerPage;

  const pageData = filteredTheory.slice(indexAwal, indexAkhir);

  const nextPage = () => (pageKini !== totalPage ? setPageKini(pageKini + 1) : null);
  const prevPage = () => (pageKini !== 1 ? setPageKini(pageKini - 1) : null);

  const renderPagination = () => {
    const pages = [];
    const startPage = Math.max(1, pageKini - 2);
    const endPage = Math.min(totalPage, pageKini + 2);

    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => setPageKini(1)}
          className={`${pageKini === 1 ? "bg-gray-100" : "bg-white"} border aspect-square w-7`}
        >
          1
        </button>
      );
      if (startPage > 2)
        pages.push(
          <span key="start-ellipsis" className="border aspect-square w-7 text-center">
            ...
          </span>
        );
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setPageKini(i)}
          className={`${pageKini === i ? "bg-gray-100" : "bg-white"} border aspect-square w-7`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPage) {
      if (endPage < totalPage - 1)
        pages.push(
          <span key="end-ellipsis" className="border aspect-square w-7 text-center">
            ...
          </span>
        );
      pages.push(
        <button
          key={totalPage}
          onClick={() => setPageKini(totalPage)}
          className={`${pageKini === totalPage ? "bg-gray-100" : "bg-white"} border aspect-square w-7`}
        >
          {totalPage}
        </button>
      );
    }

    return pages;
  };

  let content;
  if (pageData.length > 0) {
    content = filteredTheory
      // .slice(0, 5)
      .slice(indexAwal, indexAkhir)
      .map((item, i) => (
        <div key={i} className="mb-3">
          <h3 className="font-lora text-lg font-medium">{item.title}</h3>
          <h4>
            Category: <b>{item.category}</b>
          </h4>
          <p className="text-sm">{item.content}</p>
        </div>
      ));
  } else
    content = (
      <div className="text-center pt-24">
        hasil <i>{search}</i> tidak ditemukan
      </div>
    );

  return (
    <div className="min-h-screen w-full font-openSans leading-relaxed bg-gray-200">
      <Container>
        <nav className="sticky top-0 bg-white flex items-center justify-between h-16 border px-3">
          <div className="flex items-center gap-3">
            <h2 className="font-lora text-xl font-bold">AllTheory</h2>
            <Category setPageKini={setPageKini} />
          </div>
          <Search className="hidden sm:block" setPageKini={setPageKini} />
          <SearchBtn className={"block sm:hidden"} />
        </nav>
        {showSearch && <Search className={"block sm:hidden w-full sticky top-16"} />}

        <div className="bg-gray-50 px-3 min-h-screen">{content}</div>
        <div className="flex flex-wrap gap-1 py-2 pb-12 justify-center">
          <button disabled={pageKini === 1} onClick={prevPage} className="disabled:opacity-50 border px-2">
            prev
          </button>
          {renderPagination()}
          <button disabled={pageKini === totalPage} onClick={nextPage} className="disabled:opacity-50 border px-2">
            next
          </button>
        </div>
      </Container>
    </div>
  );
}

function SearchBtn({ className }) {
  const { showSearch, toggleShowSearch } = useTheory();
  return (
    <button
      onClick={toggleShowSearch}
      className={`${className} border size-10 rounded-full flex items-center justify-center hover:scale-105`}
    >
      {showSearch ? <FaTimes /> : <FaMagnifyingGlass />}
    </button>
  );
}
SearchBtn.propTypes;

function Search({ className, setPageKini }) {
  const { search, setSearch } = useTheory();
  const handleChange = (e) => {
    setSearch(e.target.value);
    setPageKini(1);
  };
  return (
    <input
      type="search"
      value={search}
      onChange={handleChange}
      placeholder="Search here.."
      className={`${className} border-b rounded focus:outline-none p-2`}
    />
  );
}
Search.propTypes;

function Category({ className, setPageKini }) {
  const { category, setCategory } = useTheory();

  const handleChange = (e) => {
    setCategory(e.target.value);
    setPageKini(1);
  };

  const groupTheory = Object.groupBy(allTheory, (t) => t.category);
  const groupCategory = Object.entries(groupTheory);

  return (
    <select
      name="category"
      value={category}
      className={`${className} border-b rounded p-2 focus:outline-none`}
      onChange={handleChange}
    >
      <option value="">Category</option>
      {groupCategory.map(([cat], i) => (
        <option key={i} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}
Category.propTypes;
