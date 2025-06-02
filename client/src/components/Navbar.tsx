import { Link } from "react-router";

export default function Navbar({ currentTab }: NavbarProps) {
  return (
    <nav className="flex flex-col items-center gap-y-2 mb-12 mt-4">
      <div className="flex items-center justify-center gap-x-1 bg-[#22222277] py-1 px-1 rounded-md text-sm smol:text-base w-fit">
        <Link
          to="/about"
          className={`${
            currentTab === "about" ? "bg-[#33333366]" : "bg-transparent"
          } py-2 px-4 rounded-md hover:bg-[#33333366]`}
        >
          about
        </Link>
        <Link
          to="/projects"
          className={`${
            currentTab === "projects" ? "bg-[#33333366]" : "bg-transparent"
          } py-2 px-4 rounded-md hover:bg-[#33333366]`}
        >
          projects
        </Link>
        <Link
          to="/education"
          className={`${
            currentTab === "education" ? "bg-[#33333366]" : "bg-transparent"
          } py-2 px-4 rounded-md hover:bg-[#33333366] phone:block hidden`}
        >
          education
        </Link>
        <Link
          to="/misc"
          className={`${
            currentTab === "misc" ? "bg-[#33333366]" : "bg-transparent"
          } py-2 px-4 rounded-md hover:bg-[#33333366] smol:block hidden`}
        >
          misc
        </Link>
        <Link
          to="/blog"
          className={`${
            currentTab === "blog" ? "bg-[#33333366]" : "bg-transparent"
          } py-2 px-4 rounded-md hover:bg-[#33333366] smol:block hidden`}
        >
          blog
        </Link>
      </div>

      <div className="items-center justify-center gap-x-1 bg-[#22222277] py-1 px-1 rounded-md text-sm smol:text-base w-fit smol:hidden flex">
        <Link
          to="/education"
          className={`${
            currentTab === "education" ? "bg-[#33333366]" : "bg-transparent"
          } py-2 px-4 rounded-md hover:bg-[#33333366] phone:hidden block`}
        >
          education
        </Link>
        <Link
          to="/misc"
          className={`${
            currentTab === "misc" ? "bg-[#33333366]" : "bg-transparent"
          } py-2 px-4 rounded-md hover:bg-[#33333366]`}
        >
          misc
        </Link>
        <Link
          to="/blog"
          className={`${
            currentTab === "blog" ? "bg-[#33333366]" : "bg-transparent"
          } py-2 px-4 rounded-md hover:bg-[#33333366]`}
        >
          blog
        </Link>
      </div>
    </nav>
  );
}

type NavbarProps = {
  currentTab: "about" | "projects" | "education" | "misc" | "blog";
};
