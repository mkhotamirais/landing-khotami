import { FaCartShopping } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";
import { useSisko } from "../../../store/useSisko";

export default function SistemToko() {
  const { cartItems } = useSisko();
  let count = cartItems.reduce((acc, cur) => acc + cur.qty, 0);

  return (
    <section className="font-libreBaskerville min-h-screen bg-gradient-to-b from-green-400 via-green-200 to-green-400">
      <nav className="sticky top-0 flex justify-between h-16 border-b items-center px-3 md:px-12 lg:px-24 bg-green-700 text-white">
        <Link to="">
          <h2 className="font-fjallaOne text-2xl">Sisko</h2>
        </Link>
        <div className="flex gap-5 items-center">
          <Link to="product" className="hover:text-green-200">
            Product List
          </Link>
          <Link to="cart" className="relative text-xl hover:text-green-200">
            <div className="absolute bg-red-500 text-white -top-3 -right-1 text-[0.7rem] leading-none p-[0.2rem] rounded-md">
              {count}
            </div>
            <FaCartShopping />
          </Link>
        </div>
      </nav>
      <div className="px-3 md:px-12 lg:px-24">
        <Outlet />
      </div>
    </section>
  );
}
