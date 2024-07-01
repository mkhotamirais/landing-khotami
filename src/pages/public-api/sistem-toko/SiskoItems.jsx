import { FaCartPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSisko } from "../../../store/useSisko";

export default function SiskoItems({ item }) {
  const { setCartItems } = useSisko();

  return (
    <div className="rounded-md overflow-hidden bg-white">
      <Link to={`${item?.id}`}>
        <img src={item?.photo} alt="" />
      </Link>
      <div className="p-1 px-2">
        <h3 className="font-fjallaOne capitalize">{item?.name}</h3>
        <h4 className="text-lg">Rp{item.price}</h4>
        <button
          onClick={() => {
            const { id, name, photo, price, weight } = item;
            setCartItems({ id, name, photo, price, weight, qty: 1 });
          }}
          className="text-green-600 text-2xl my-2 block w-fit hover:text-green-800"
        >
          <FaCartPlus />
        </button>
      </div>
    </div>
  );
}
SiskoItems.propTypes;
