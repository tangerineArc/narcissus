import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";

export default function PdfPage() {
  return (
    <>
      <Navbar currentTab="pdf" />
      <a href="/nlp.pdf" download>NLP Presentation</a>
      <Footer />
    </>
  );
}
