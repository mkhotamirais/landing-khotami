import { useEffect, useState } from "react";
import { useJp } from "../../../store/usePublicapi";
import { JpPostCardItems } from "./JpPostItems";
import { GridCard, Loading } from "./JpUtils";

export default function JpPost() {
  const { posts, getPosts, loadPostPage, errPostPage } = useJp();
  const { totalPage, pageData, pageKini, setPageKini, nextPage, prevPage } = useJpPostPaginasi(posts);
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  let content;
  if (loadPostPage) content = <Loading />;
  else if (errPostPage) content = <div>error post page</div>;
  else {
    const renderCard = posts && pageData?.map((item) => <JpPostCardItems key={item?.id} item={item} />);
    if (posts?.length > 0) {
      content = (
        <>
          <div>Total result: {posts?.length} data</div>
          <JpPostPaginasi props={{ totalPage, pageData, pageKini, setPageKini, nextPage, prevPage }} />
          <GridCard>{renderCard}</GridCard>;
        </>
      );
    } else content = <div>no data</div>;
  }

  return <div className="mt-6">{content}</div>;
}

function useJpPostPaginasi(posts) {
  const totalData = posts?.length;
  const limit = 10;
  const totalPage = Math.ceil(totalData / limit);

  const [pageKini, setPageKini] = useState(2);

  const indexAkhir = pageKini * limit;
  const indexAwal = indexAkhir - limit;

  const pageData = posts?.slice(indexAwal, indexAkhir);

  const nextPage = () => (pageKini !== totalPage ? setPageKini(pageKini + 1) : null);
  const prevPage = () => (pageKini !== 1 ? setPageKini(pageKini - 1) : null);

  return { totalPage, pageData, pageKini, setPageKini, nextPage, prevPage };
}

function JpPostPaginasi({ props }) {
  const { totalPage, pageKini, setPageKini, nextPage, prevPage } = props;
  return (
    <div className="flex flex-wrap gap-1 my-2 justify-center">
      <button disabled={pageKini === 1} onClick={prevPage} className="disabled:opacity-50 border px-2">
        prev
      </button>
      {Array(totalPage)
        .fill(totalPage)
        .map((item, i) => (
          <button
            onClick={() => setPageKini(i + 1)}
            key={i}
            className={`${pageKini == i + 1 ? "bg-gray-100" : "bg-white"} border aspect-square w-7`}
          >
            {i + 1}
          </button>
        ))}
      <button disabled={pageKini === totalPage} onClick={nextPage} className="disabled:opacity-50 border px-2">
        next
      </button>
    </div>
  );
}
JpPostPaginasi.propTypes;
