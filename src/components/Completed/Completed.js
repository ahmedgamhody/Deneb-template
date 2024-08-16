import "./Completed.css";
function Completed() {
  return (
    <div className="container py-5 ">
      <div className="row" style={{ zIndex: "20" }}>
        <div className="col-lg-6 ">
          <h1 className="main-header text-lg-start">
            Over 500+ Completed <br /> work & Still Counting
          </h1>
          <p>
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Phasellus at orci non risus luctus commodo.
            Ut nibh tellus, faucibus nec gravida.
          </p>
          <p>
            Duis quis ipsum leo. Praesent vitae tellus ac ante porta mattis vel
            non ex. Quisque a finibus justo.
          </p>
        </div>
        <div className="col-lg-6">
          <div className="row gap-3">
            <div className="col-12 d-flex justify-content-around">
              <div className="card-cr">
                <img src={require("../../Assets/wdwrdew.png")} alt="" />
                <h3 style={{ color: "#feb000" }}>300+</h3>
                <p>Projects Done</p>
              </div>
              <div className="card-cr">
                <img src={require("../../Assets/efef.png")} alt="" />
                <h3 style={{ color: "#feb000" }}>250+</h3>
                <p>Projects Done</p>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-around">
              <div className="card-cr">
                <img src={require("../../Assets/ferwef.png")} alt="" />
                <h3 style={{ color: "#feb000" }}>8+</h3>
                <p>Projects Done</p>
              </div>
              <div className="card-cr">
                <img src={require("../../Assets/fedfe.png")} alt="" />
                <h3 style={{ color: "#feb000" }}>200+</h3>
                <p>Projects Done</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Completed;
