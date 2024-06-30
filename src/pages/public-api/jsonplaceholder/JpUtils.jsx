import { FaChevronLeft } from "react-icons/fa6";
import { PiSpinner } from "react-icons/pi";
import { Link } from "react-router-dom";

export function SetView({ view, setView, className }) {
  return (
    <div className={`${className} flex gap-3`}>
      View:
      <button disabled={view === "table"} onClick={() => setView("table")} className={`disabled:opacity-50`}>
        table
      </button>
      <button disabled={view === "card"} onClick={() => setView("card")} className={`disabled:opacity-50`}>
        card
      </button>
    </div>
  );
}
SetView.propTypes;

export function GridCard({ children }) {
  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">{children}</div>;
}
GridCard.propTypes;

export function Prev({ className }) {
  return (
    <Link to={-1} className={`${className} hover:scale-105`}>
      <FaChevronLeft />
    </Link>
  );
}
Prev.propTypes;

export function Loading() {
  return (
    <div className="mt-12 text-3xl flex justify-center">
      <PiSpinner className="animate-spin" />
    </div>
  );
}
