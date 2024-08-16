import Footer from "../components/Footer/Footer";
import HireUs from "../components/HireUs";
import Blog from "../components/Latest Blog/Blog";
import NavBar from "../components/NavBar/NavBar";
import ContactUs from "../components/With Us/ContactUs";

function AboutPage() {
  return (
    <>
      <NavBar />
      <HireUs showButton={false} />
      <Blog />
      <ContactUs />
      <Footer />
    </>
  );
}

export default AboutPage;
