import { useEffect } from "react";
import { useOmdb } from "../../../store/useOmdb";

export default function OmdbModalId({ itemId, modalId, onClose }) {
  const { singleMovie: movie, loadSingleMovie, getMovieByimdbID } = useOmdb();

  useEffect(() => {
    if (modalId) {
      getMovieByimdbID(modalId);
    }
  }, [getMovieByimdbID, modalId]);

  let content;
  if (loadSingleMovie) content = <div>loading...</div>;
  else
    content = (
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${
          modalId === itemId ? "scale-100" : "scale-0"
        } bg-white p-1 w-[90vw] sm:w-1/2 h-[80vh] transition-all duration-500 rounded overflow-hidden`}
      >
        <h2 className="font-roboto text-xl mb-2">{movie?.Title}</h2>
        <div className="font-robotoSlab">
          <img src={movie?.Poster} alt="image poster" className="w-1/2 float-right" />
          <div className="text-sm">
            <div className="mb-2">
              <span className="font-medium">Actors: </span>
              <span>{movie?.Actors}</span>
            </div>
            <div className="mb-2">
              <span className="font-medium">Year: </span>
              <span>{movie?.Year}</span>
            </div>
            <div className="mb-2">
              <span className="font-medium">Country: </span>
              <span>{movie?.Country}</span>
            </div>
            <div className="mb-2">
              <span className="font-medium">Genre: </span>
              <span>{movie?.Genre}</span>
            </div>
            <div className="mb-2">
              <span className="font-medium">Released: </span>
              <span>{movie?.Released}</span>
            </div>
            <div className="mb-2">
              <span className="font-medium">Runtime: </span>
              <span>{movie?.Runtime}</span>
            </div>
            <div className="mb-2">
              <span className="font-medium">Type: </span>
              <span>{movie?.Type}</span>
            </div>
            <div className="mb-2">
              <span className="font-medium">imdbRating: </span>
              <span>{movie?.imdbRating}</span>
            </div>
            <div className="mb-2">
              <span className="font-medium">Writer: </span>
              <span>{movie?.Writer}</span>
            </div>
            <div className="mb-2">
              <span className="font-medium">Plot: </span>
              <span>{movie?.Plot}</span>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div
      onClick={onClose}
      className={`${
        modalId === itemId ? "z-50 opacity-100" : "-z-10 opacity-0"
      } fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex items-center justify-center transition-all duration-300`}
    >
      {content}
    </div>
  );
}
OmdbModalId.propTypes;
