import { create } from "zustand";

const omdbUrl = `https://www.omdbapi.com/?apikey=99773434`;

export const useOmdb = create((set) => ({
  movies: null,
  singleMovie: null,
  loadMoviesPage: false,
  loadSingleMovie: false,
  errMoviesPage: false,
  s: "",
  type: "",
  y: "",
  plot: "",
  setS: (s) => set({ s }),
  setType: (type) => set({ type }),
  setY: (y) => set({ y }),
  setPlot: (plot) => set({ plot }),
  params: { s: "spongebob" },
  setParams: (data) => set((state) => ({ params: { ...state.params, ...data } })),
  getMovies: async (paramObj) => {
    set({ loadMoviesPage: true });
    let param;
    param = { s: "spongebob", ...paramObj };
    if (param.s === null || param.s === "") param.s = "spongebob";
    const paramString = Object.entries(param)
      .map((item) => item.join("="))
      .join("&");

    let response = await fetch(`${omdbUrl}&${paramString}`);
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
