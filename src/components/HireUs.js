import { Button } from "react-bootstrap";

function HireUs({ showButton }) {
  return (
    <div className="container py-5 position-relative">
      <div style={{ position: "absolute", zIndex: "-1", top: "100px" }}>
        <img
          src={require("../Assets/shape_8-iEjpduc3.png")}
          alt=""
          className=" img-fluid"
        ></img>
      </div>
      <div className="row d-flex  align-items-center justify-content-center">
        <div className="col-lg-5 mb-5 mb-lg-0">
          <div className=" text-center">
            <img
              src={require("../Assets/about-tdHAvNOC.png")}
              alt=""
              className=" img-fluid"
            ></img>
          </div>
        </div>
        <div className="col-lg-7 d-flex flex-column gap-2 al">
          <h1 className="main-header text-lg-start">Why You Hire Us?</h1>
          <p>
            Proin ipsum arcu, lobortis id ullamcorper nec, vehicula eget magna.
            Sed ut malesuada magna, eget lacinia sapien. Nam molestie non ex sit
            amet ornare. Nunc in pellentesque ipsum, vel vulputate sapien.
          </p>
          <p>
            Suspendisse potenti. Aliquam elementum felis purus, quis vulputate
            libero semper nec. Morbi tincidunt maximus nisl vel placerat.
            Curabitur at ligula ac diam elementum hendrerit. Suspendisse nec
            metus eu est laoreet hendrerit vitae non ipsum. Nam faucibus
            elementum arcu, eget eleifend tortor.
          </p>
          {showButton && (
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
          )}
        </div>
      </div>
    </div>
  );
}

export default HireUs;
