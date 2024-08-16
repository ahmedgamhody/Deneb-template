import { Route, Routes } from "react-router-dom";
import Pricing from "./components/AfforablePricing/Pricing";
import Completed from "./components/Completed/Completed";
import Footer from "./components/Footer/Footer";
import HireUs from "./components/HireUs";
import LandingPage from "./components/LandingPage/LandingPage";
import Blog from "./components/Latest Blog/Blog";
import LatestProjects from "./components/LatestProjects/LatestProjects";
import NavBar from "./components/NavBar/NavBar";
import Service from "./components/service/Service";
import ContactUs from "./components/With Us/ContactUs";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/Services";
import PortfoliosPage from "./Pages/PortfoliosPage";
import BlogPage from "./Pages/BlogPage";
import ContactUsPage from "./Pages/ContactUsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <LandingPage />
              <Service />
              <HireUs showButton={true} />
              <Completed />
              <LatestProjects />
              <Pricing />
              <Blog />
              <ContactUs />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfoliosPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
      </Routes>
    </div>
  );
}

export default App;
