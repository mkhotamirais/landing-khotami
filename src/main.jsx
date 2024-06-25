import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Parallax1 from "./pages/Mockup/Parallax1.jsx";
import Tictactoe from "./pages/Mockup/Tictactoe.jsx";
import FlipText from "./pages/Mockup/FlipText.jsx";
import Parallax2 from "./pages/Mockup/Parallax2.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="parallax1" element={<Parallax1 />} />
      <Route path="parallax2" element={<Parallax2 />} />
      <Route path="tictactoe" element={<Tictactoe />} />
      <Route path="fliptext" element={<FlipText />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
