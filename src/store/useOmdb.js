import { create } from "zustand";

const omdbUrl = `https://www.omdbapi.com/?apikey=99773434`;

export const useOmdb = create((set) => ({
  movies: null,
  singleMovie: null,
  loadMoviesPage: false,
  loadSingleMovie: false,
  errMoviesPage: false,
  s: "",
  setS: (s) => set({ s }),
  getMovies: async (s) => {
    set({ loadMoviesPage: true });
    let search = s ? s.trim() : "naruto";
    let response = await fetch(`${omdbUrl}&s=${search}`);
    let result = await response.json();
    if (result.Response === "True") {
      set({ movies: result.Search, loadMoviesPage: false });
    } else {
      set({ movies: [], loadMoviesPage: false });
    }
  },
  getMovieByimdbID: async (imdbID) => {
    set({ loadSingleMovie: true });
    let response = await fetch(`${omdbUrl}&i=${imdbID}`);
    let result = await response.json();
    if (result.Response === "True") {
      set({ singleMovie: result, loadSingleMovie: false });
    }
  },
}));
