// import { FaCartPlus, FaCartShopping, FaSearchengin } from "react-icons/fa6";
// import { useDispatch, useSelector } from "react-redux";
// import { setCartItems, setQuery, setSearch, setSort } from "../../../app/client-app/siskoSlice";
// import { useEffect } from "react";
// import { Link } from "react-router-dom";

import { FaMagnifyingGlass } from "react-icons/fa6";
import { useSisko } from "../../../store/useSisko";

export const SiskoSearch = () => {
  const { search, setSearch, setQuery } = useSisko();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(search);
    setQuery({ search_name: search });
  };

  return (
    <form onSubmit={handleSubmit} className="flex border min-w-10 rounded">
      <input
        type="search"
        value={search}
        placeholder="Search here"
        onChange={(e) => setSearch(e.target.value)}
        className="w-full focus:outline-none bg-inherit p-2"
      />
      <button
        type="submit"
        className="w-10 inline-flex border-l items-center justify-center hover:bg-cyan-600 hover:text-white"
      >
        <FaMagnifyingGlass />
      </button>
    </form>
  );
};

export const SiskoSort = () => {
  const { sort, setSort, setQuery } = useSisko();

  const handleChange = (e) => {
    setSort(e.target.value);
    setQuery({ sorting: e.target.value });
  };

  return (
    <Select id="sort" value={sort} onChange={handleChange}>
      <option value="">Sort</option>
      <option value="Lates">Latest</option>
      <option value="cheapest">Cheapest</option>
      <option value="expensive">Expensive</option>
    </Select>
  );
};

// export const SiskoCartLink = () => {
//   const { count } = useSelector((state) => state.sisko);
//   return (
//     <Link to="cart" className="inline-block text-xl relative">
//       <FaCartShopping />
//       <div className="absolute text-xs -top-3 right-0 bg-red-500 text-white flex items-center justify-center p-[0.2rem] leading-none rounded">
//         {count}
//       </div>
//     </Link>
//   );
// };

// export const SiskoCartBtn = ({ item }) => {
//   const dispatch = useDispatch();
//   const handleAddToCart = () => {
//     const { id, name, photo, price, weight } = item;
//     const data = { id, qty: 1, weight, name, photo, price };
//     dispatch(setCartItems(data));
//   };
//   return (
//     <button onClick={handleAddToCart}>
//       <FaCartPlus />
//     </button>
//   );
// };
// SiskoCartBtn.propTypes;

export const Select = ({ id, value, onChange, children }) => {
  return (
    <div>
      <select
        name={id}
        id={id}
        value={value}
        onChange={onChange}
        className={`h-full p-2 text-md border rounded bg-inherit`}
      >
        {children}
      </select>
    </div>
  );
};
Select.propTypes;
