import { Link } from "react-router-dom";
import { FaArrowUpLong, FaGithub } from "react-icons/fa6";
import { Button } from "../../components/Buttons";

export function BackToTopBtn() {
  return (
    <div className="mx-auto w-fit my-8">
      <Link to="/" className="flex flex-col items-center gap-2 hover:text-cyan-500">
        <FaArrowUpLong />
        <span>Back to top</span>
      </Link>
    </div>
  );
}

export function GithubBtn() {
  return (
    <a href="https://github.com/mkhotamirais/landing-khotami" className="fixed top-4 right-4 z-10 text-xl">
      <Button>
        <FaGithub />
      </Button>
    </a>
  );
}
