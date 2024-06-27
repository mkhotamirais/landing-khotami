import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ColorTheory from "./pages/theory/ColorTheory.jsx";
import GoogleFontPairingTheory from "./pages/theory/GoogleFontPairingTheory.jsx";
import Webdecoded1 from "./pages/youtube/webdecoded/Webdecoded1.jsx";
import Wdm1 from "./pages/youtube/web-design-mastery/Wdm1.jsx";
import Snack from "./pages/games/Snack.jsx";
import Tictactoe from "./pages/games/Tictactoe.jsx";
import Parallax1 from "./pages/library/Parallax1.jsx";
import Parallax2 from "./pages/library/Parallax2.jsx";
import FloatNav1 from "./pages/library/FloatNav1.jsx";
import FloatNav2 from "./pages/library/FloatNav2.jsx";
import FlipText from "./pages/library/FlipText.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";
import Lp1 from "./pages/landing-page/Lp1.jsx";
import Lp2 from "./pages/landing-page/Lp2.jsx";
import Bulb1 from "./pages/library/Bulb1.jsx";
import Bulb2 from "./pages/library/Bulb2.jsx";
import Portfolio from "./pages/portfolio/Portfolio.jsx";
import Stopwatch from "./pages/apps/Stopwatch.jsx";
import Clock from "./pages/apps/Clock.jsx";
import SymbolColor from "./pages/apps/SymbolColor.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorBoundary />}>
      <Route index element={<Home />} />
      <Route path="portofolio-saya" element={<Portfolio />} />
      {/* apps */}
      <Route path="clock" element={<Clock />} />
      <Route path="stopwatch" element={<Stopwatch />} />
      <Route path="symbol-color" element={<SymbolColor />} />

      {/* theroy */}
      <Route path="color" element={<ColorTheory />} />
      <Route path="google-font-pairing" element={<GoogleFontPairingTheory />} />
      {/* youtube tutorial */}
      <Route path="webdecoded-1" element={<Webdecoded1 />} />
      <Route path="web-design-mastery-1" element={<Wdm1 />} />
      {/* game */}
      <Route path="snack" element={<Snack />} />
      <Route path="tictactoe" element={<Tictactoe />} />
      {/* library */}
      <Route path="bulb-1" element={<Bulb1 />} />
      <Route path="bulb-2" element={<Bulb2 />} />
      <Route path="parallax-1" element={<Parallax1 />} />
      <Route path="parallax-2" element={<Parallax2 />} />
      <Route path="fliptext" element={<FlipText />} />
      <Route path="float-nav-1" element={<FloatNav1 />} />
      <Route path="float-nav-2" element={<FloatNav2 />} />
      {/* landing page */}
      <Route path="lp-1" element={<Lp1 />} />
      <Route path="lp-2" element={<Lp2 />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
