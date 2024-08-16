import { Button } from "react-bootstrap";
import "./ContactUs.css";
function ContactUs() {
  return (
    <div className="py-5">
      <div className="container py-5 position-relative">
        <div
          style={{
            position: "absolute",
            zIndex: "-1",
            top: "-50px",
            left: "0",
          }}
        >
          <img
            src={require("../../Assets/shape_15-f6ySoQHL.png")}
            alt=""
            className=" img-fluid"
          ></img>
        </div>
        <div className="row">
          <div className=" col-lg-6 text-center mb-3">
            <img
              src={require("../../Assets/contact-hiQDr1Sx.png")}
              className=" img-fluid"
              alt=""
            ></img>
          </div>
          <div className=" col-lg-6">
            <h1 className="text-lg-start main-header">Get In Touch With Us</h1>
            <p>
              When unknow printer took a gallery of type and scramblted it to
              make a type specimen book
            </p>
            <div>
              <div className="row ">
                <div className="col-12 col-lg-6 col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </div>
                <div className="col-12 col-lg-6 col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-6 col-md-6 mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    aria-label="email"
                  />
                </div>
                <div className="col-12 col-lg-6 col-md-6 mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    aria-label="password"
                  />
                </div>
              </div>
              <div className="mt-2 text-center text-start">
                <Button
                  variant="primary"
                  className="rounded-pill fw-bold"
                  style={{
                    padding: "10px 30px",
                    backgroundColor: "#feb000",
                    border: "none",
                  }}
                >
                  Submit Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
