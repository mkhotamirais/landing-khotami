import { useParams } from "react-router-dom";
import { useSisko } from "../../../store/useSisko";
import { useEffect } from "react";
import { Loading } from "./SiskoUtils";
import moment from "moment";

export default function SiskoDetail() {
  const { id } = useParams();
  const { singleProduct: data, getProductById, loadPage, errPage } = useSisko();
  useEffect(() => {
    if (id) {
      getProductById(id);
    }
  }, [getProductById, id]);

  let content;
  if (loadPage) content = <Loading />;
  else if (errPage) content = <div>error page</div>;
  else {
    if (data?.product_id) {
      content = (
        <div className="bg-green-500 p-3 rounded-lg my-2">
          <h2 className="capitalize font-fjallaOne text-white text-2xl my-3">Detail {data?.product_name}</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <figure className="flex-1">
              <img
                src={`https://sistemtoko.com/img/user/demo/product/${data?.product_img}`}
                alt={data?.product_img || "no image"}
                className="scale-95"
              />
            </figure>
            <div className="flex-1 border rounded p-3 shadow bg-gray-50 flex flex-col gap-3">
              <div>
                <div>Id:</div>
                <div className="text-lg">{data?.product_id}</div>
              </div>
              <div>
                <div>Name:</div>
                <div className="text-lg">{data?.product_name}</div>
              </div>
              <div>
                <div>Price:</div>
                <div className="text-lg">{data?.product_price}</div>
              </div>
              <div>
                <div>Qty:</div>
                <div className="text-lg">{data?.product_qty_stock}</div>
              </div>
              <div>
                <div>Status:</div>
                <div className="text-lg">{data?.product_status}</div>
              </div>
              <div>
                <div>Wight:</div>
                <div className="text-lg">{data?.product_weight}</div>
              </div>
              <div>
                <div>Created:</div>
                <div className="text-lg">{moment(data?.createdAt).fromNow()}</div>
              </div>
            </div>
          </div>
        </div>
      );
    } else content = <div className="text-center mt-3 italic">no data</div>;
  }

  return content;
}
