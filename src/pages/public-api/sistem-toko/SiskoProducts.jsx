import { useEffect } from "react";
import { useSisko } from "../../../store/useSisko";
import { Loading } from "./SiskoUtils";
import SiskoItems from "./SiskoItems";
import { SiskoSearch, SiskoSort } from "./SiskoQuery";

export default function SiskoProducts() {
  const { query, products, getProducts, loadPage, errPage } = useSisko();
  useEffect(() => {
    getProducts(query);
  }, [getProducts, query]);

  let content;
  if (loadPage) content = <Loading />;
  else if (errPage) content = <div>Error page</div>;
  else {
    if (products?.length > 0) {
      const renderProduct = products && products.map((item) => <SiskoItems key={item?.id} item={item} />);
      content = (
        <>
          <div className="my-2 flex gap-4 justify-end">
            <SiskoSort />
            <SiskoSearch />
          </div>
          <div className="grid py-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-1">
            {renderProduct}
          </div>
        </>
      );
    } else content = <div>no result</div>;
  }

  return <div>{content}</div>;
}
