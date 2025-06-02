import type { ReactNode } from "react";

import {
  AlignRight,
  Asterisk,
  Atom,
  Box,
  Braces,
  CodeXml,
  Cpu,
  Database,
  DatabaseZap,
  Eclipse,
  FileText,
  Fingerprint,
  FlaskConical,
  GitFork,
  Hash,
  Hexagon,
  Leaf,
  Pyramid,
  Server,
  Squirrel,
  Terminal,
  Type,
  Waypoints,
  Wind,
  Zap,
} from "lucide-react";

export default function SkillsSection() {
  return (
    <section className="mt-16">
      <h2 className="mb-8 text-2xl text-[#ffffd1]">
        <span className="text-[#ef476f] font-medium">ϟ </span>
        tech skills
      </h2>
      <div className="space-y-4 phone:pl-6 pl-4">
        <p>programming languages</p>
        <div className="flex flex-wrap gap-2">
          <SkillItem>
            <Terminal size={18} stroke="#ffffd1" /> Bash
          </SkillItem>
          <SkillItem>
            <Asterisk size={18} stroke="#ffffd1" /> C
          </SkillItem>
          <SkillItem>
            <Braces size={18} stroke="#ffffd1" /> JavaScript
          </SkillItem>
          <SkillItem>
            <AlignRight size={18} stroke="#ffffd1" /> Python
          </SkillItem>
        </div>
        <p className="mt-6 text-sm">markup languages</p>
        <div className="flex flex-wrap gap-2">
          <SkillItem>
            <CodeXml size={18} stroke="#ffffd1" /> HTML
          </SkillItem>
          <SkillItem>
            <Eclipse size={18} stroke="#ffffd1" /> CSS
          </SkillItem>
          <SkillItem>
            <Hash size={18} stroke="#ffffd1" /> Markdown
          </SkillItem>
        </div>
        <p className="mt-6 text-sm">frontend tools & frameworks</p>
        <div className="flex flex-wrap gap-2">
          <SkillItem>
            <Type size={18} stroke="#ffffd1" /> TypeScript
          </SkillItem>
          <SkillItem>
            <Atom size={18} stroke="#ffffd1" /> React
          </SkillItem>
          <SkillItem>
            <Waypoints size={18} stroke="#ffffd1" /> React Router
          </SkillItem>
          <SkillItem>
            <Wind size={18} stroke="#ffffd1" /> Tailwind
          </SkillItem>
        </div>
        <p className="mt-6 text-sm">backend tools & frameworks</p>
        <div className="flex flex-wrap gap-2">
          <SkillItem>
            <Hexagon size={18} stroke="#ffffd1" /> Node
          </SkillItem>
          <SkillItem>
            <Server size={18} stroke="#ffffd1" /> Express
          </SkillItem>
          <SkillItem>
            <Fingerprint size={18} stroke="#ffffd1" /> Passport
          </SkillItem>
          <SkillItem>
            <FlaskConical size={18} stroke="#ffffd1" /> Flask
          </SkillItem>
        </div>
        <p className="mt-6 text-sm">databases & mappers</p>
        <div className="flex flex-wrap gap-2">
          <SkillItem>
            <FileText size={18} stroke="#ffffd1" /> SQLite
          </SkillItem>
          <SkillItem>
            <Database size={18} stroke="#ffffd1" /> MySQL
          </SkillItem>
          <SkillItem>
            <DatabaseZap size={18} stroke="#ffffd1" /> PostgreSQL
          </SkillItem>
          <SkillItem>
            <Leaf size={18} stroke="#ffffd1" /> MongoDB
          </SkillItem>
          <SkillItem>
            <Pyramid size={18} stroke="#ffffd1" /> Prisma
          </SkillItem>
          <SkillItem>
            <Squirrel size={18} stroke="#ffffd1" /> Mongoose
          </SkillItem>
        </div>
        <p className="mt-6 text-sm">other tools</p>
        <div className="flex flex-wrap gap-2">
          <SkillItem>
            <Cpu size={18} stroke="#ffffd1" /> Linux
          </SkillItem>
          <SkillItem>
            <GitFork size={18} stroke="#ffffd1" /> Git
          </SkillItem>
          <SkillItem>
            <Zap size={18} stroke="#ffffd1" /> Vite
          </SkillItem>
          <SkillItem>
            <Box size={18} stroke="#ffffd1" /> Webpack
          </SkillItem>
        </div>
      </div>
    </section>
  );
}

function SkillItem({ children }: SkillItemProps) {
  return (
    <span className="flex items-center gap-2 bg-[#22222266] w-fit border-1 border-[#333] rounded-sm py-2 px-4 text-sm">
      {children}
    </span>
  );
}

type SkillItemProps = {
  children: ReactNode;
};
