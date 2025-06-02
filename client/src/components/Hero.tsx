import graphic from "../assets/graphic-1.svg";

export default function Hero() {
  return (
    <section className="my-8 flex items-center large:gap-x-16 gap-x-12">
      <div>
        <p className="text-[#adb5bd]">Hi, my name is</p>
        <h1 className="medium:text-6xl text-4xl text-[#ffffd1] font-medium my-4">
          Swagatam Pati.
        </h1>
        <p className="text-xl">I build web and CLI stuff that don't suck.</p>
        <p className="my-4 max-w-[50ch] leading-7 text-[#adb5bd]">
          I'm a second-year B.Tech student at IIT Patna, studying AI and Data
          Science — and building cool stuff along the way.
        </p>
      </div>
      <img
        src={graphic}
        alt="stack of tiles"
        className="meh:block hidden large:w-[180px] w-[140px] animate-pulse shrink-0"
      />
    </section>
  );
}
