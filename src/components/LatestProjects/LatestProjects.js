import "./LatestProjects.css";

function LatestProjects() {
  return (
    <div className="py-5">
      <div className="container">
        <h1 className="main-header">Our Latest Projects</h1>
        <p className="text-center">
          When unknow printer took a gallery of type and scramblted it to makea
          type specimen book
        </p>
        <ul className="d-flex list-unstyled justify-content-center gap-5 pt-3">
          <li
            style={{
              backgroundColor: "#feb000",
              padding: "5px 10px ",
              color: "white",
              borderRadius: "18px",
              cursor: "pointer",
            }}
          >
            Development
          </li>
          <li>Web Design</li>
          <li>Apps Development</li>
          <li>Marketing</li>
        </ul>
        <div className="row pt-3">
          <div className="col-4">
            <div>
              <img
                src={require("../../Assets/portfolio_1-FtcJtm1d.png")}
                alt=""
                className=" img-fluid rounded-top"
              ></img>
            </div>
            <div className=" p-4">
              <h4>Design & Develop</h4>
              <p>Design</p>
            </div>
          </div>
          <div className="col-4 ">
            <div>
              <img
                src={require("../../Assets/portfolio_2-gwTrPNlT.png")}
                alt=""
                className=" img-fluid rounded-top"
              ></img>
            </div>
            <div className=" p-4">
              <h4>Design & Develop</h4>
              <p>Design</p>
            </div>
          </div>
          <div className="col-4">
            <div>
              <img
                src={require("../../Assets/portfolio_3-0z4dwLjf.png")}
                alt=""
                className=" img-fluid rounded-top"
              ></img>
            </div>
            <div className=" p-4">
              <h4>Design & Develop</h4>
              <p>Design</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestProjects;
