import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Blog() {
  return (
    <div className="py-5">
      <div className="container">
        <h1 className="main-header">Latest Blog</h1>
        <p className="text-center">
          When unknow printer took a gallery of type and scramblted it to make a
          type specimen book
        </p>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="text-center">
              <img
                src={require("../../Assets/blog_05.png")}
                alt=""
                className=" img-fluid"
                style={{ height: "250px" }}
              ></img>
            </div>
            <div className="p-3">
              <h6 style={{ color: "#feb000" }}>July 21, 2020</h6>
              <h3>Beautiful & Special Moment</h3>
              <p>
                Midst first it, you're multiply divided. There don't, second his
                one given the he one third rule fruit, very. Fill. Seed give
                firmament
              </p>
              <div>
                <FontAwesomeIcon
                  style={{ color: "rgb(254, 176, 0)" }}
                  icon={faPlay}
                ></FontAwesomeIcon>
                <a
                  className=" text-decoration-none ms-3 text-black fw-bold"
                  href="/"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="text-center">
              <img
                src={require("../../Assets/blog_06.png")}
                alt=""
                className=" img-fluid"
                style={{ height: "250px" }}
              ></img>
            </div>
            <div className="p-3">
              <h6 style={{ color: "#feb000" }}>July 21, 2020</h6>
              <h3>Beautiful & Special Moment</h3>
              <p>
                Midst first it, you're multiply divided. There don't, second his
                one given the he one third rule fruit, very. Fill. Seed give
                firmament
              </p>
              <div>
                <FontAwesomeIcon
                  style={{ color: "rgb(254, 176, 0)" }}
                  icon={faPlay}
                ></FontAwesomeIcon>
                <a
                  className=" text-decoration-none ms-3 text-black fw-bold"
                  href="/"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="text-center">
              <img
                src={require("../../Assets/blog_09.png")}
                alt=""
                className=" img-fluid"
                style={{ height: "250px" }}
              ></img>
            </div>
            <div className="p-3">
              <h6 style={{ color: "#feb000" }}>July 21, 2020</h6>
              <h3>Beautiful & Special Moment</h3>
              <p>
                Midst first it, you're multiply divided. There don't, second his
                one given the he one third rule fruit, very. Fill. Seed give
                firmament
              </p>
              <div>
                <FontAwesomeIcon
                  style={{ color: "rgb(254, 176, 0)" }}
                  icon={faPlay}
                ></FontAwesomeIcon>
                <a
                  className=" text-decoration-none ms-3 text-black fw-bold"
                  href="/"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
