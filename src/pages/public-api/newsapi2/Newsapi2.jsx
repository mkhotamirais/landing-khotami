import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../../redux/features/newsapiSlice";
import { Err, Loading } from "../../../components/Components";
import Newsapi2Items from "./Newsapi2Items";
import { NewsapiQ, NewsapiTop } from "./Newsapi2Query";

const Newsapi2 = () => {
  const { data, status, error, query } = useSelector((state) => state.newsapi);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews(query));
  }, [dispatch, query]);

  let content;
  if (status === "loading") content = <Loading />;
  else if (status === "failed") content = <Err>{error}</Err>;
  else if (status === "succeeded") {
    if (data && data.length > 0) {
      const renderedData = data && data.map((item, i) => <Newsapi2Items key={i} item={item} />);
      content = (
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 lg:gap-2`}>
          {renderedData}
        </div>
      );
    } else content = <div className="text-center italic mt-5">no data</div>;
  }

  return (
    <div>
      <h2>NewsApi</h2>
      <div className="mb-2">
        <NewsapiQ />
      </div>
      <div className="mb-2">
        <NewsapiTop />
      </div>
      {content}
    </div>
  );
};

export default Newsapi2;
