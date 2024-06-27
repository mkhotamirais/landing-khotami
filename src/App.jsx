import { Outlet, ScrollRestoration } from "react-router-dom";
import { BtnMm } from "./pages/MainMenu";
import { useMm } from "./store/useMm";
import Clock from "./pages/apps/Clock";

export default function App() {
  const { removeOpenMm } = useMm();
  const handleMain = () => {
    removeOpenMm();
  };
  return (
    <main className="flex flex-col" onClick={handleMain}>
      <Outlet />
      <BtnMm />
      <Clock className={"-z-50 opacity-[0.03]"} />
      <ScrollRestoration />
    </main>
  );
}
