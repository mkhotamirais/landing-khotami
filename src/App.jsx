import { Outlet, ScrollRestoration } from "react-router-dom";
import { BtnMenu, BtnMm } from "./pages/MainMenu";
import Clock from "./pages/library/Clock";
import { useMm } from "./store/useMm";

export default function App() {
  const { removeOpenMm } = useMm();
  const handleMain = () => {
    removeOpenMm();
  };
  return (
    <main className="min-h-[150vh] flex flex-col" onClick={handleMain}>
      <Outlet />
      <BtnMm />
      <BtnMenu />
      <Clock className={"-z-50 fixed left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 opacity-[0.03]"} />
      <ScrollRestoration />
    </main>
  );
}
