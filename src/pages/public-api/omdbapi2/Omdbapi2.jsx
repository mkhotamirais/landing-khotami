import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OmdbPlot, OmdbReset, OmdbSearch, OmdbType, OmdbY } from "./Omdb2Param";
import { Err, Loading } from "../../../components/Components";
import { getMovies } from "../../../redux/features/omdbapiSlice";
import Omdb2Items from "./Omdb2Items";

const Omdbapi2 = () => {
  const { data, status, error, params } = useSelector((state) => state.omdbapi);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies(params));
  }, [dispatch, params]);

  let content;
  if (status === "loading") content = <Loading />;
  else if (status === "failed") content = <Err>{error}</Err>;
  else if (status === "succeeded") {
    if (data?.length > 0) {
      const renderedData = data && data.map((item) => <Omdb2Items key={item?.imdbID} item={item} />);
      content = (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 lg:gap-2">
          {renderedData}
        </div>
      );
    } else content = <div className="italic text-center">no content</div>;
  }
  return (
    <div>
      <h2>OmdbApi</h2>
      <div className="flex justify-between items-center mb-2">
        <OmdbSearch />
        <OmdbReset />
      </div>
      <div className="flex gap-1">
        <OmdbType />
        <OmdbY />
        <OmdbPlot />
      </div>
      {content}
    </div>
  );
};

export default Omdbapi2;
