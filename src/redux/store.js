import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice";
import omdbapiReducer from "./features/omdbapiSlice";
import jpReducer from "./features/jpSlice";
import siskoReducer from "./features/siskoSlice";
import newsapiReducer from "./features/newsapiSlice";
import fksapiReducer from "./features/fksapiSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    // public api
    omdbapi: omdbapiReducer,
    jp: jpReducer,
    fksapi: fksapiReducer,
    sisko: siskoReducer,
    newsapi: newsapiReducer,
  },
});
