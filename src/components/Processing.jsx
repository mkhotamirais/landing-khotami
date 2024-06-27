import { BackHome, Prev } from "./Buttons";

export default function Processing() {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="border-2 shadow-inner rounded-xl p-4 flex flex-col gap-3 mx-3 bg-gray-50 bg-opacity-50">
        <div className="text text-center">
          <span className="text-xl">Page ini belum tersedia</span>
          <br /> <i>Masih dalam proses pencarian ide dan referensi!</i>
        </div>
        <div className="flex gap-1 justify-center">
          <Prev />
          <BackHome />
        </div>
      </div>
    </section>
  );
}
