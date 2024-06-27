import { Link } from "react-router-dom";
import { mainMenus } from "../../lib/data";

export default function Summary() {
  return (
    <section id="summary" className="font-raleway px-4 sm:px-12 md:px-20 lg:px-56 scroll-mt-16">
      <h2 className="font-oswald text-3xl md:text-4xl mb-8 mt-6 font-medium">Summary</h2>
      {mainMenus.map((item, i) => (
        <article key={i}>
          <h3 className="font-oswald text-xl mt-4">{item.label}</h3>
          <p className="leading-relaxed py-2">{item?.description}</p>
          <ol className="list-inside list-decimal leading-relaxed">
            {item.subMenus.map((itm, i) => (
              <li key={i}>
                <Link to={itm.href} className="underline">
                  {itm.label}
                </Link>
              </li>
            ))}
          </ol>
        </article>
      ))}
    </section>
  );
}
