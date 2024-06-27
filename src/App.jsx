import { Outlet, ScrollRestoration } from "react-router-dom";
import { BtnMenu, BtnMm } from "./pages/MainMenu";
import { useMm } from "./store/useMm";
import Clock from "./pages/tools/Clock";

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
      <Clock className={"-z-50 opacity-[0.03]"} />
      <ScrollRestoration />
    </main>
  );
}
