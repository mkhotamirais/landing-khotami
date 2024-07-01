import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SiskoCartLink, SiskoSearch, SiskoSort } from "./Sisko2Query";
import { Err, Loading } from "../../../components/Components";
import Sisko2Items from "./Sisko2Items";
import { getSiskoProducts } from "../../../redux/features/siskoSlice";

const SistemToko2 = () => {
  const { data, status, error, query } = useSelector((state) => state.sisko);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSiskoProducts(query));
  }, [query, dispatch]);
  let content;
  if (status === "loading") content = <Loading />;
  else if (status === "error") content = <Err>{error}</Err>;
  else if (status === "succeeded") {
    const renderedData = data && data.map((item) => <Sisko2Items key={item?.id} item={item} />);
    content = (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 lg:gap-2">{renderedData}</div>
    );
  }

  return (
    <div>
      <h2>Sistem toko</h2>
      <div className={`z-30 flex justify-between items-center gap-2 mb-2 sticky top-16 py-1`}>
        <div className="flex items-center gap-2">
          <SiskoSearch />
          <SiskoSort />
        </div>
        <SiskoCartLink />
      </div>
      {content}
    </div>
  );
};

export default SistemToko2;
