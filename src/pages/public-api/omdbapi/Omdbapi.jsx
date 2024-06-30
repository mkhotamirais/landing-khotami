import { useEffect, useState } from "react";
import { useOmdb } from "../../../store/useOmdb";
import { Loading } from "./OmdbUtils";
import OmdbItems from "./OmdbItems";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Omdbapi() {
  const { s, setS, movies, getMovies, loadMoviesPage, errMoviesPage } = useOmdb();
  const [search, setSearch] = useState("");
  useEffect(() => {
    getMovies(s);
  }, [getMovies, s]);

  const handleSearch = (e) => {
    e.preventDefault();
    setS(search);
  };

  let content;
  if (loadMoviesPage) content = <Loading />;
  else if (errMoviesPage) content = <div>error</div>;
  else {
    const renderMovies = movies && movies?.map((item) => <OmdbItems key={item?.imdbID} item={item} />);
    content = (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-1">
        {renderMovies}
      </div>
    );
  }

  return (
    <section className="bg-gray-700 relative min-h-screen w-full px-2 lg:px-16 py-3">
      <div className="flex justify-between my-3">
        <h1 className="roboto text-2xl text-white font-medium text-center">ObdmApi</h1>
        <form onSubmit={handleSearch} className="flex gap-1 w-48">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 bg-inherit border rounded-lg w-full"
            placeholder="Search here..."
          />
          <button className="border w-10 rounded-lg flex items-center justify-center hover:opacity-50">
            <FaMagnifyingGlass />
          </button>
        </form>
      </div>
      {content}
    </section>
  );
}
