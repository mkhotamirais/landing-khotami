import { Link } from "react-router-dom";

export function JpPostCardItems({ item }) {
  return (
    <Link to={`${item?.id}`} className="border p-2 rounded-lg hover:scale-105 transition-all duration-150">
      <div>
        {item?.id} - {item?.title}
      </div>
    </Link>
  );
}
JpPostCardItems.propTypes;
