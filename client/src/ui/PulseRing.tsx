export default function PulseRing() {
  return (
    <span className="relative flex size-3">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ffffd1] opacity-75"></span>
      <span className="relative inline-flex size-3 rounded-full bg-[#ffffd188]"></span>
    </span>
  );
}
