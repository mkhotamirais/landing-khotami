import { Link } from "react-router-dom";

export default function SiskoHome() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center gap-6">
      <h1 className="font-fjallaOne text-3xl">Public Api SistemToko</h1>
      <Link to="product" className="text-sm p-3 px-5 hover:opacity-70 rounded-full bg-green-500 text-white">
        Explore Products
      </Link>
    </div>
  );
}
