import Footer from "../components/Footer/Footer";
import ImageCo from "../components/ImageContainer/ImageCo";
import Map from "../components/Map/Map";
import NavBar from "../components/NavBar/NavBar";
import ContactUs from "../components/With Us/ContactUs";

function ContactUsPage() {
  return (
    <>
      <NavBar />
      <ImageCo title={"Contact Us"} />

      <ContactUs />
      <Map />
      <Footer />
    </>
  );
}

export default ContactUsPage;
