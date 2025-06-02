import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";
import UnderConstruction from "../components/UnderConstruction.tsx";

export default function MiscPage() {
  return (
    <>
      <Navbar currentTab="misc" />
      <UnderConstruction />
      <Footer />
    </>
  );
}
