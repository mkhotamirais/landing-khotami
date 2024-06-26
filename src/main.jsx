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
import FloatNav from "./pages/Mockup/FloatNav.jsx";
import FloatNav2 from "./pages/Mockup/FloatNav2.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";
import Webdecoded from "./pages/youtube/webdecoded/Webdecoded.jsx";
import Wds1 from "./pages/youtube/web-design-mastery/Wds1.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorBoundary />}>
      <Route index element={<Home />} />
      <Route path="parallax1" element={<Parallax1 />} />
      <Route path="parallax2" element={<Parallax2 />} />
      <Route path="tictactoe" element={<Tictactoe />} />
      <Route path="fliptext" element={<FlipText />} />
      <Route path="floatnav" element={<FloatNav />} />
      <Route path="floatnav2" element={<FloatNav2 />} />
      {/* youtube */}
      <Route path="webdecoded1" element={<Webdecoded />} />
      <Route path="wds1" element={<Wds1 />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
