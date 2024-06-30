import { useParams } from "react-router-dom";
import { useJp } from "../../../store/useJp";
import { useEffect } from "react";
import { Loading, Prev } from "./JpUtils";

export default function JpPostSingle() {
  const { id } = useParams();
  const { singlePost, getPostById, singleUser, getUserById, loadPostPage, errPostPage } = useJp();

  useEffect(() => {
    if (id) {
      getPostById(id);
    }
  }, [getPostById, id]);

  useEffect(() => {
    if (singlePost?.userId) {
      getUserById(singlePost?.userId);
    }
  }, [getUserById, singlePost]);

  let content;
  if (loadPostPage) content = <Loading />;
  else if (errPostPage) content = <div>error post page</div>;
  else
    content = singlePost && (
      <div className="relative border rounded p-4 md:px-24 mt-3">
        <h2 className="font-cinzel text-2xl mb-4 flex gap-2 items-center">
          <Prev className={"text-lg"} /> Detail <i>{singlePost?.postname}</i>
        </h2>
        <div className="mb-2">
          <div>ID: </div>
          <div className="text-lg">{singlePost?.id}</div>
        </div>
        <div className="mb-2">
          <div>Title: </div>
          <div className="text-lg">{singlePost?.title}</div>
        </div>
        <div className="mb-2">
          <div>User: </div>
          <div className="text-lg">{singleUser?.name}</div>
        </div>
        <div className="mb-2">
          <div>Body: </div>
          <div className="text-lg">{singlePost?.body}</div>
        </div>
      </div>
    );

  return content;
}
