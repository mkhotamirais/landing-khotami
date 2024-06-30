import { Link } from "react-router-dom";

export default function JpHome() {
  return (
    <section className="h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl lg:text-5xl">Public Api Jsonplaceholder</h1>
        <div className="flex gap-3 text-xl">
          <Link
            to="jp-user"
            className="hover:text-cyan-500 border rounded-full p-3 w-20 flex items-center justify-center"
          >
            user
          </Link>
          <Link
            to="jp-post"
            className="hover:text-cyan-500 border rounded-full p-3 w-20 flex items-center justify-center"
          >
            post
          </Link>
        </div>
      </div>
    </section>
  );
}
