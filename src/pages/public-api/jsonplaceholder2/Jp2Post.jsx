import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Jp2PostItems from "./Jp2PostItems";
import { Err, Loading } from "../../../components/Components";
import { getPosts } from "../../../redux/features/jpSlice";

const Jp2Post = () => {
  const dispatch = useDispatch();
  const { dataPosts: data, statusPosts: status, errorPosts: error } = useSelector((state) => state.jp);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  let content;
  if (status === "loading") content = <Loading />;
  else if (status === "failed") content = <Err>{error}</Err>;
  else if (status === "succeeded") {
    const renderedData = data && data.map((item) => <Jp2PostItems key={item?.id} item={item} />);
    content = (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 lg:gap-2">{renderedData}</div>
    );
  }

  return (
    <div>
      Post
      {content}
    </div>
  );
};

export default Jp2Post;
