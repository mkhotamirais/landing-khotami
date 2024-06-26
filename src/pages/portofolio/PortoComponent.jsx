import { GithubIcons8, LinkedinIcons8 } from "./IconsSvg";

export const MyFoto = ({ className }) => {
  return (
    <figure className={`${className}`}>
      <img
        // src="https://github.com/mkhotamirais/mkhotamirais.github.io/blob/main/images/me2-removebg.png?raw=true"
        src="/images/me.png"
        alt="me"
        className="border-t-4 shadow-lg h-48 md:h-64 rounded-full bg-gradient-to-tr from-red-200 via-green-200 to-blue-200"
      />
    </figure>
  );
};
MyFoto.propTypes;

export const ContactLink = ({ className, href, icon, text }) => {
  return (
    <a
      href={href}
      className={`${className} flex flex-col items-center gap-2`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      {/* <FaWhatsappSquare className="text-[#1b8755] text-4xl inline-block" /> */}
      <span>{text}</span>
    </a>
  );
};
ContactLink.propTypes;

export const Socials = ({ className }) => {
  const socialsList = [
    { title: "github", icon: <GithubIcons8 size="28" />, href: "https://github.com/mkhotamirais" },
    { title: "linkedin", icon: <LinkedinIcons8 size="28" />, href: "https://www.linkedin.com/in/mkhotami-rais/" },
  ];

  return (
    <div className={`${className} flex gap-2`}>
      {socialsList.map((sl, i) => (
        <a
          key={i}
          href={sl.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-7 h-7 hover:scale-110 transition-all duration-200"
        >
          {sl.icon}
        </a>
      ))}
    </div>
  );
};
Socials.propTypes;

export const SkillLink = ({ item }) => {
  return (
    <a
      href={item.url}
      target="blank"
      rel="noopener"
      key={item.text}
      className="bg-[rgba(0,0,0,.5)] rounded-lg p-3 flex flex-col gap-2 items-center hover:scale-110 transition-all duration-100"
    >
      <div className="text-3xl">{item.icon}</div>
      <h3 className="text-white">{item.text}</h3>
    </a>
  );
};
SkillLink.propTypes;

export const Section = ({ className, id, children }) => {
  return (
    <section id={id} className={`${className} py-8 px-3 lg:px-16 min-h-[50vh] scroll-mt-16 sm:scroll-mt-16`}>
      {children}
    </section>
  );
};
Section.propTypes;

export const H1 = ({ children, className }) => (
  <h1 className={`${className} capitalize font-semibold text-2xl lg:text-3xl lg:py-3 leading-loose text-center mb-4`}>
    {children}
  </h1>
);
H1.propTypes;

export const Button = ({ children = "button", type = "button", disabled, onClick, className }) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={`${className} bg-blue-500 text-white leading-none p-2 rounded hover:opacity-70 disabled:opacity-70`}
  >
    {children}
  </button>
);
Button.propTypes;
