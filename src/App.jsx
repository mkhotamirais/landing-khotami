import { Outlet, ScrollRestoration } from "react-router-dom";
import Clock from "./pages/apps/Clock";
import { BtnMm } from "./pages/home/MainMenu";
import { useMm } from "./store/useMm";

export default function App() {
  const { removeOpenMm } = useMm();
  const handleMain = () => {
    removeOpenMm();
  };
  return (
    <main className="flex flex-col min-h-screen" onClick={handleMain}>
      <Outlet />
      <BtnMm />
      <Clock className={"-z-50 opacity-[0.03]"} />
      <ScrollRestoration />
    </main>
  );
}
