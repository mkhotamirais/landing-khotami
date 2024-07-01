import { useSelector } from "react-redux";
import { Err, Loading } from "../../../components/Components";
import Fksapi2Items from "./Fksapi2Items";

const Fakestoreapi2 = () => {
  const { data, status, error } = useSelector((state) => state.fksapi);

  let content;
  if (status === "loading") content = <Loading />;
  else if (status === "failed") content = <Err>{error}</Err>;
  else if (status === "succeeded") {
    const renderedData = data && data.map((item) => <Fksapi2Items key={item?.id} item={item} />);
    content = (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 lg:gap-2">{renderedData}</div>
    );
  }

  return (
    <div>
      <h2>FakestoreApi</h2>
      {content}
    </div>
  );
};

export default Fakestoreapi2;
