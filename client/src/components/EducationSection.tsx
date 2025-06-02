import { Link } from "react-router";

import LineChart from "./LineChart.tsx";

import { educationData } from "../data/education-data.ts";

import PulseRing from "../ui/PulseRing.tsx";

export default function EducationSection() {
  return (
    <section className="mt-16">
      <h2 className="mb-8 text-2xl text-[#ffffd1]">
        <span className="text-[#ef476f] font-medium">ϟ </span>
        education
      </h2>
      <div className="space-y-10 phone:ml-6 ml-4">
        {educationData.map(
          ({
            school,
            location,
            degree,
            major,
            startDate,
            endDate,
            grade,
            performance,
            limits,
            graphDescription,
          }) => (
            <div key={degree} className="flex justify-between items-center">
              <EducationCard
                school={school}
                location={location}
                degree={degree}
                major={major}
                startDate={startDate}
                endDate={endDate}
                grade={grade}
              />
              <div className="meh:flex hidden shrink-0 flex-col items-center">
                <LineChart data={performance} limits={limits} />
                <span className="text-xs italic text-[#adb5bd]">
                  {graphDescription}
                </span>
              </div>
            </div>
          )
        )}
      </div>
      <div className="mt-6 flex justify-center">
        <div className="flex items-baseline gap-x-4 bg-[#33333377] w-fit ps-2 pe-3 py-1 rounded-full">
          <PulseRing />
          <Link to="/education" className="text-[#adb5bd]">
            learn more -&gt;
          </Link>
        </div>
      </div>
    </section>
  );
}

function EducationCard({
  school,
  location,
  degree,
  major,
  startDate,
  endDate,
  grade,
}: EducationCardProps) {
  return (
    <div className="w-fit space-y-1">
      <h3 className="text-xl">{school}</h3>
      <p className="text-[#adb5bd] text-sm mb-4">{location}</p>
      <div className="border-l-2 border-dashed border-l-[#ffffd188] px-6 py-2 ml-1 space-y-1">
        <p>
          {degree} • {major}
        </p>
        <p className="text-sm text-[#adb5bd]">
          {startDate} - {endDate}
        </p>
        <p className="text-sm text-[#ffffd1] mt-2">{grade}</p>
      </div>
    </div>
  );
}

type EducationCardProps = {
  school: string;
  location: string;
  degree: string;
  major: string;
  startDate: string;
  endDate: string;
  grade: string;
};
