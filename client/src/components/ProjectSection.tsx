import type { ReactNode } from "react";

import { Link } from "react-router";

import { projects } from "../data/projects-data.tsx";

import PulseRing from "../ui/PulseRing.tsx";

export default function ProjectSection() {
  return (
    <section className="mt-16">
      <h2 className="mb-8 text-2xl text-[#ffffd1]">
        <span className="text-[#ef476f] font-medium">ϟ </span>projects
      </h2>
      <div className="grid meh:grid-cols-2 grid-cols-1 gap-4">
        {projects.map(({ title, url, description, icon }) => (
          <ProjectCard
            key={title}
            title={title}
            url={url}
            description={description}
            icon={icon}
          />
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <div className="flex items-baseline gap-x-4 bg-[#33333377] w-fit ps-2 pe-3 py-1 rounded-full">
          <PulseRing />
          <Link to="/projects" className="text-[#adb5bd]">
            explore more -&gt;
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, url, description, icon }: ProjectCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="max-w-[450px] flex gap-x-4 bg-[#22222277] p-4 rounded-md hover:bg-[#222222aa]"
    >
      <span className="text-[#ffffd1] bg-[#33333388] w-[50px] h-[50px] flex justify-center items-center shrink-0 rounded-md">
        {icon}
      </span>
      <div className="space-y-1">
        <h3 className="text-lg">{title}</h3>
        <p className="text-sm leading-[1.6] text-[#adb5bd]">{description}</p>
      </div>
    </a>
  );
}

type ProjectCardProps = {
  title: string;
  url: string;
  description: string;
  icon: ReactNode;
};
