import { PiSpinner } from "react-icons/pi";

export const Container = ({ children }) => {
  return <section>{children}</section>;
};
Container.propTypes;

export const Loading = ({ className }) => (
  <div className={`${className} flex justify-center mt-8`}>
    <PiSpinner className="animate-spin text-3xl" />
  </div>
);
Loading.propTypes;

export const Err = ({ children = "Err", className }) => (
  <div className={`${className} flex justify-center text-red-500 mt-4 italic`}>{children}</div>
);
Err.propTypes;
