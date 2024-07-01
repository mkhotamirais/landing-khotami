import { Link, Outlet } from "react-router-dom";

export default function Jsonplaceholder2() {
  return (
    <section className="px-2 sm:px-12 md:px-20 lg:px-28">
      <div>Jsonplaceholder</div>
      <div>
        <Link to="jp2-post">jp2 post</Link>
        <Link to="jp2-user">jp2 user</Link>
      </div>
      <main>
        <Outlet />
      </main>
    </section>
  );
}
