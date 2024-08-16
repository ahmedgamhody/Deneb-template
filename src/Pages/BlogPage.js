import Footer from "../components/Footer/Footer";
import ImageCo from "../components/ImageContainer/ImageCo";
import Blog from "../components/Latest Blog/Blog";
import NavBar from "../components/NavBar/NavBar";

function BlogPage() {
  return (
    <>
      <NavBar />
      <ImageCo title={"Blog"} />
      <Blog />
      <Footer />
    </>
  );
}

export default BlogPage;
