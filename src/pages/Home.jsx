import { Button } from "../components/Buttons";
import { useMm } from "../store/useMm";
import { Link } from "react-router-dom";

export default function Home() {
  const { toggleOpenMm } = useMm();

  const handleClick = (e) => {
    e.stopPropagation();
    toggleOpenMm();
  };
  return (
    <section className="font-raleway text-xl w-full h-screen text-center flex flex-col gap-6 items-center justify-center">
      <h1 className="uppercase text-4xl font-oswald">selamat datang</h1>
      <p>Terima kasih atas kunjugannya</p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link to="portofolio-saya">
          <Button className={"border w-48 border-cyan-500 text-lg rounded-full capitalize"}>mari berkenalan</Button>
        </Link>
        <Button onClick={handleClick} className={"w-48 border border-gray-500 text-lg rounded-full capitalize"}>
          eksplore
        </Button>
      </div>
    </section>
  );
}
