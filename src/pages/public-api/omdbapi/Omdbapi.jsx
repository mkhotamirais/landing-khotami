import { useEffect } from "react";
import { useOmdb } from "../../../store/useOmdb";
import { Loading } from "./OmdbUtils";
import OmdbItems from "./OmdbItems";
import { OmdbPlot, OmdbSearch, OmdbType, OmdbY } from "./OmdbParams";

export default function Omdbapi() {
  const { params, movies, getMovies, loadMoviesPage, errMoviesPage } = useOmdb();
  useEffect(() => {
    getMovies(params);
  }, [getMovies, params]);

  let content;
  if (loadMoviesPage) content = <Loading />;
  else if (errMoviesPage) content = <div>error</div>;
  else {
    if (movies?.length > 0) {
      const renderMovies = movies && movies?.map((item) => <OmdbItems key={item?.imdbID} item={item} />);

      content = (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-1">
          {renderMovies}
        </div>
      );
    } else content = <div className="text-white text-center mt-12 text-lg italic">no result</div>;
  }

  return (
    <section className="bg-gray-700 relative min-h-screen w-full px-2 lg:px-16 py-3">
      <div className="sticky top-0 z-50 bg-slate-700 py-1">
        <OmdbLogo className={"block sm:hidden"} />
        <div className="flex justify-between my-3 w-full">
          <OmdbLogo className={"hidden sm:block"} />
          <div className="flex gap-3 w-full sm:w-auto">
            <OmdbNotSearch className="hidden sm:flex" />
            <OmdbSearch />
          </div>
        </div>
        <OmdbNotSearch className="flex sm:hidden w-full mb-3" />
      </div>

      {content}
    </section>
  );
}

const OmdbLogo = ({ className }) => (
  <a href="https://www.omdbapi.com/" className={`${className} text-gray-200`}>
    <h1 className="roboto text-2xl font-medium text-center">ObdmApi</h1>
  </a>
);
OmdbLogo.propTypes;

const OmdbNotSearch = ({ className }) => {
  return (
    <div className={`${className} flex gap-1`}>
      <OmdbType />
      <OmdbY />
      <OmdbPlot />
    </div>
  );
};
OmdbNotSearch.propTypes;
