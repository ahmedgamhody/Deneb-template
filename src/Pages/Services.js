import Pricing from "../components/AfforablePricing/Pricing";
import Footer from "../components/Footer/Footer";
import ImageCo from "../components/ImageContainer/ImageCo";
import NavBar from "../components/NavBar/NavBar";
import ContactUs from "../components/With Us/ContactUs";

function ServicesPage() {
  return (
    <>
      <NavBar />
      <ImageCo title={"Our Services"} />
      <Pricing />
      <ContactUs />
      <Footer />
    </>
  );
}

export default ServicesPage;
