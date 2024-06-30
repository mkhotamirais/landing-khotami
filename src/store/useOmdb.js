import { create } from "zustand";

const omdbUrl = `https://www.omdbapi.com/?apikey=99773434`;

export const useOmdb = create((set) => ({
  movies: null,
  singleMovie: null,
  loadMoviesPage: false,
  loadSingleMovie: false,
  errMoviesPage: false,
  getMovies: async () => {
    set({ loadMoviesPage: true });
    let response = await fetch(`${omdbUrl}&s=naruto`);
    let result = await response.json();
    if (result.Response === "True") {
      set({ movies: result.Search, loadMoviesPage: false });
    }
  },
  getMovieByimdbID: async (imdbID) => {
    set({ loadSingleMovie: true });
    let response = await fetch(`${omdbUrl}&i=${imdbID}`);
    let result = await response.json();
    if (result.Response === "True") {
      set({ singleMovie: result, loadSingleMovie: false });
    }
    console.log(result);
  },
}));
