import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";
import UnderConstruction from "../components/UnderConstruction.tsx";

export default function PdfPage() {
  return (
    <>
      <Navbar currentTab="pdf" />
      <a href="/nlp.pdf" download>NLP Presentation</a>
      <Footer />
    </>
  );
}
