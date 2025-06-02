import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";
import UnderConstruction from "../components/UnderConstruction.tsx";

export default function BlogPage() {
  return (
    <>
      <Navbar currentTab="blog" />
      <UnderConstruction />
      <Footer />
    </>
  );
}
