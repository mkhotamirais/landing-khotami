import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../redux/features/jpSlice";
import Jp2UserItem from "./Jp2UserItem";
import { Err, Loading } from "../../../components/Components";

const Jp2User = () => {
  const dispatch = useDispatch();
  const { dataUsers: data, statusUsers: status, errorUsers: error } = useSelector((state) => state.jp);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  let content;
  if (status === "loading") content = <Loading />;
  else if (status === "failed") content = <Err>{error}</Err>;
  else if (status === "succeeded") {
    const renderedData = data && data.map((item) => <Jp2UserItem key={item?.id} item={item} />);
    content = (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 lg:gap-2">{renderedData}</div>
    );
  }
  return (
    <div>
      <div>User</div>
      {content}
    </div>
  );
};

export default Jp2User;
