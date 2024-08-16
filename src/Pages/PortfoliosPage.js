import Footer from "../components/Footer/Footer";
import ImageCo from "../components/ImageContainer/ImageCo";
import LatestProjects from "../components/LatestProjects/LatestProjects";
import NavBar from "../components/NavBar/NavBar";
import ContactUs from "../components/With Us/ContactUs";

function PortfoliosPage() {
  return (
    <>
      <NavBar />
      <ImageCo title={"Portfolios"} />
      <LatestProjects />
      <ContactUs />
      <Footer />
    </>
  );
}

export default PortfoliosPage;
