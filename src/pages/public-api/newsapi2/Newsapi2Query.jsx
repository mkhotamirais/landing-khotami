import { FaSearchengin } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { setQuery, setQ, setTop } from "../../../redux/features/newsapiSlice";

export const NewsapiQ = () => {
  const { q, query } = useSelector((state) => state.newsapi);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    let myQ;
    if (!q || q === null || q === "") {
      myQ = "jokowi";
    }
    dispatch(setQuery({ ...query, queryObj: { myQ } }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-1">
      <input
        type="search"
        value={q}
        onChange={(e) => dispatch(setQ(e.target.value))}
        placeholder="Search here"
        className="border rounded p-1 focus:outline-none bg-inherit"
      />
      <button
        type="submit"
        className="w-8 flex items-center justify-center bg-cyan-500 text-white hover:opacity-70 rounded"
      >
        <FaSearchengin />
      </button>
    </form>
  );
};

export const NewsapiTop = () => {
  const { top, query } = useSelector((state) => state.newsapi);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setTop(e.target.value));
    dispatch(setQuery({ ...query, top: e.target.value }));
  };

  return (
    <Pilih id="top" value={top} onChange={handleChange}>
      <option value="">top category</option>
      <option value="top-headlines">Top Headlines</option>
      <option value="everything">Everything</option>
    </Pilih>
  );
};

const Pilih = ({ id, value, onChange, children }) => {
  return (
    <div>
      <select name={id} id={id} value={value} onChange={onChange} className={`p-1 border rounded mb-2`}>
        {children}
      </select>
    </div>
  );
};
Pilih.propTypes;
