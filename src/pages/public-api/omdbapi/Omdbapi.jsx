import { useEffect } from "react";
import { useOmdb } from "../../../store/useOmdb";
import { Loading } from "./OmdbUtils";
import OmdbItems from "./OmdbItems";

export default function Omdbapi() {
  const { movies, getMovies, loadMoviesPage, errMoviesPage } = useOmdb();
  useEffect(() => {
    getMovies();
  }, [getMovies]);
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
    <section className="min-h-screen w-full px-2 lg:px-12">
      <h1 className="roboto text-2xl font-medium text-center">ObdmApi</h1>
      {content}
    </section>
  );
}
