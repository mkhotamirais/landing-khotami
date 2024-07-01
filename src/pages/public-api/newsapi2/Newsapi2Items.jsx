import moment from "moment";

const Newsapi2Items = ({ item }) => {
  return (
    <a
      href={item?.url}
      target="_blank"
      rel="noopener noreferrer"
      className="border rounded p-1 shadow flex flex-col gap-2 overflow-hidden"
    >
      <figure className="h-56">
        <img
          src={item?.urlToImage}
          alt={"newsapi image"}
          className="w-full h-full object-cover hover:scale-95 hover:object-contain transition-all duration-500"
        />
      </figure>
      <figcaption className="text-xs">{item?.description?.substring(0, 75)}..</figcaption>
      <div className="text-sm flex flex-col gap-1">
        <div className="text-lg font-medium">{item?.title?.substring(0, 30)}..</div>
        <div className="italic">
          By {item?.author} | {moment(item?.publishedAt).fromNow()}
        </div>
        <p className="text-sm">{item?.content}</p>
      </div>
    </a>
  );
};
Newsapi2Items.propTypes;

export default Newsapi2Items;
