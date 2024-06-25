import { Outlet, ScrollRestoration } from "react-router-dom";
import { BtnMenu, BtnMm } from "./components/MainMenu";
import { useMm } from "./store/useMm";
import Clock from "./components/Clock";

export default function App() {
  const { removeOpenMm } = useMm();
  const handleMain = () => {
    removeOpenMm();
  };
  return (
    <main className="min-h-[200vh] flex flex-col overflow-x-hidden" onClick={handleMain}>
      <section className="overflow-x-hidden">
        <Outlet />
      </section>
      <BtnMm />
      <BtnMenu />
      <Clock className={"-z-50 fixed left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 opacity-[0.03]"} />
      <ScrollRestoration />
    </main>
  );
}
