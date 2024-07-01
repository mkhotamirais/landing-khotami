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
import ProgressBar1 from "./pages/library/ProgressBar1.jsx";
import ElementScroll1 from "./pages/library/ElementScroll1.jsx";
import ElementScroll2 from "./pages/library/ElementScroll2.jsx";
import FloatNav3 from "./pages/library/FloatNav3.jsx";
import SourceImage from "./pages/theory/SourceImage.jsx";
import CssBackground from "./pages/html/CssBackground.jsx";
import WebTypes from "./pages/theory/WebTypes.jsx";
import Lp3 from "./pages/landing-page/Lp3.jsx";
import Jsonplaceholder from "./pages/public-api/jsonplaceholder/Jsonplaceholder.jsx";
import Omdbapi from "./pages/public-api/omdbapi/Omdbapi.jsx";
import SistemToko from "./pages/public-api/sistem-toko/SistemToko.jsx";
import Newsapi from "./pages/public-api/newsapi/Newsapi.jsx";
import Fakestoreapi from "./pages/public-api/fakestroreapi/Fakestoreapi.jsx";
import JpUser from "./pages/public-api/jsonplaceholder/JpUser.jsx";
import JpPost from "./pages/public-api/jsonplaceholder/JpPost.jsx";
import JpUserSingle from "./pages/public-api/jsonplaceholder/JpUserSingle.jsx";
import JpPostSingle from "./pages/public-api/jsonplaceholder/JpPostSingle.jsx";
import Paginasi from "./pages/library/Paginasi.jsx";
import JpHome from "./pages/public-api/jsonplaceholder/JpHome.jsx";
import Carousel1 from "./pages/library/Carousel1.jsx";
import Accordion1 from "./pages/library/Accordion1.jsx";
import Accordion2 from "./pages/library/Accordion2.jsx";
import Svg1 from "./pages/html/Svg1.jsx";
import Canvas1 from "./pages/html/Canvas1.jsx";
import Sticky from "./pages/library/Sticky.jsx";
import Html from "./pages/html/Html.jsx";
import Carousel2 from "./pages/library/Carousel2.jsx";
import SiskoDetail from "./pages/public-api/sistem-toko/SiskoDetail.jsx";
import SiskoHome from "./pages/public-api/sistem-toko/SiskoHome.jsx";
import SiskoProducts from "./pages/public-api/sistem-toko/SiskoProducts.jsx";
import SiskoCart from "./pages/public-api/sistem-toko/SiskoCart.jsx";
import Todo from "./pages/apps/todo/Todo.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorBoundary />}>
      <Route index element={<Home />} />
      <Route path="portofolio-saya" element={<Portfolio />} />

      {/* html */}
      <Route path="html" element={<Html />} />
      <Route path="svg-1" element={<Svg1 />} />
      <Route path="canvas-1" element={<Canvas1 />} />
      <Route path="css-background" element={<CssBackground />} />

      {/* apps */}
      <Route path="clock" element={<Clock />} />
      <Route path="stopwatch" element={<Stopwatch />} />
      <Route path="symbol-color" element={<SymbolColor />} />
      <Route path="todo" element={<Todo />} />

      {/* youtube tutorial */}
      <Route path="webdecoded-1" element={<Webdecoded1 />} />
      <Route path="web-design-mastery-1" element={<Wdm1 />} />

      {/* game */}
      <Route path="snack" element={<Snack />} />
      <Route path="tictactoe" element={<Tictactoe />} />

      {/* library */}
      <Route path="sticky-1" element={<Sticky />} />
      <Route path="bulb-1" element={<Bulb1 />} />
      <Route path="bulb-2" element={<Bulb2 />} />
      <Route path="parallax-1" element={<Parallax1 />} />
      <Route path="parallax-2" element={<Parallax2 />} />
      <Route path="fliptext" element={<FlipText />} />
      <Route path="float-nav-1" element={<FloatNav1 />} />
      <Route path="float-nav-2" element={<FloatNav2 />} />
      <Route path="float-nav-3" element={<FloatNav3 />} />
      <Route path="progress-bar-1" element={<ProgressBar1 />} />
      <Route path="element-scroll-1" element={<ElementScroll1 />} />
      <Route path="element-scroll-2" element={<ElementScroll2 />} />
      <Route path="paginasi" element={<Paginasi />} />
      <Route path="carousel-1" element={<Carousel1 />} />
      <Route path="carousel-2" element={<Carousel2 />} />
      <Route path="accordion-1" element={<Accordion1 />} />
      <Route path="accordion-2" element={<Accordion2 />} />

      {/* landing page */}
      <Route path="lp-1" element={<Lp1 />} />
      <Route path="lp-2" element={<Lp2 />} />
      <Route path="lp-3" element={<Lp3 />} />

      {/* theroy */}
      <Route path="color" element={<ColorTheory />} />
      <Route path="source-image" element={<SourceImage />} />
      <Route path="google-font-pairing" element={<GoogleFontPairingTheory />} />
      <Route path="web-types" element={<WebTypes />} />
      {/* public api */}
      <Route path="jsonplaceholder" element={<Jsonplaceholder />}>
        <Route index element={<JpHome />} />
        <Route path="jp-user">
          <Route index element={<JpUser />} />
          <Route path=":id" element={<JpUserSingle />} />
        </Route>
        <Route path="jp-post">
          <Route index element={<JpPost />} />
          <Route path=":id" element={<JpPostSingle />} />
        </Route>
      </Route>
      <Route path="omdbapi" element={<Omdbapi />} />
      <Route path="sistem-toko" element={<SistemToko />}>
        <Route index element={<SiskoHome />} />
        <Route path="product">
          <Route index element={<SiskoProducts />} />
          <Route path=":id" element={<SiskoDetail />} />
        </Route>
        <Route path="cart" element={<SiskoCart />} />
      </Route>
      <Route path="fakestoreapi" element={<Fakestoreapi />} />
      <Route path="newsapi" element={<Newsapi />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
