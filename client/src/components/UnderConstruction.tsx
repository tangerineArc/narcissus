import { Construction } from "lucide-react";

export default function UnderConstruction() {
  return (
    <section className="flex justify-center items-center gap-x-4 my-8">
      <Construction size={56} stroke="#ffffd1" strokeWidth={1} className="animate-pulse" />
      <p className="text-2xl text-[#adb5bd]">under construction</p>
    </section>
  );
}
