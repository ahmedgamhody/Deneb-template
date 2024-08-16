import { Button } from "react-bootstrap";

function LandingPage() {
  return (
    <div className="pt-5 position-relative">
      <div style={{ position: "absolute", zIndex: "-1", top: "80px" }}>
        <img
          src={require("../../Assets/shape_1-T77jJ2C4.png")}
          alt=""
          className=" img-fluid"
        ></img>
      </div>
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-12 col-lg-6 ">
            <h1
              className=" text-center text-lg-start"
              style={{ fontWeight: "500", fontSize: "50px" }}
            >
              We Are Creative <br />{" "}
              <span style={{ fontWeight: "bold", color: "#feb000" }}>
                Deneb Agency
              </span>
            </h1>
            <h5
              style={{ fontSize: "20px", margin: "15px 0" }}
              className=" text-center text-lg-start"
            >
              We Are Professional Freelance Web Designer
            </h5>
            <p
              style={{ color: "#7a808d", fontSize: "15px" }}
              className=" text-center text-lg-start"
            >
              Nulla id euismod massa. Donec accumsan semper lacus, vestibulum
              gravida ante sed eu lacus et diam lacinia.
            </p>
            <div className="mt-2 text-center text-lg-start">
              <Button
                variant="primary"
                className="rounded-pill"
                style={{
                  padding: "10px 30px",
                  backgroundColor: "#feb000",
                  border: "none",
                }}
              >
                HIRE US
              </Button>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <img
              src={require("../../Assets/banner_1-CZKWZCWg.png")}
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
