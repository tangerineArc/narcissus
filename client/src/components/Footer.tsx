import resume from "../assets/swagatam_resume.pdf";

export default function Footer() {
  return (
    <footer className="mt-16 border-t-1 border-dashed border-t-[#444] text-center px-4 py-16">
      <p>
        handcrafted with <span className="text-[#ef476f] animate-pulse">❤</span>{" "}
        by{" "}
        <a
          href="https://github.com/tangerineArc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-[#adb5bd]">@</span>
          <span className="text-[#ffffd1]">tangerineArc</span>
        </a>
      </p>
      <div className="mt-16 space-y-1">
        <p>
          contact me at{" "}
          <a
            href="mailto:swagatam_2301ai28@iitp.ac.in"
            className="text-[#adb5bd] underline"
          >
            swagatam_2301ai28@iitp.ac.in
          </a>
        </p>
        <p>
          or take a look at my{" "}
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#adb5bd] underline"
          >
            résumé
          </a>
        </p>
      </div>
    </footer>
  );
}
