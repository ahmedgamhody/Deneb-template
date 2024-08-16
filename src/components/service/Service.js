import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./service.css";
function Service() {
  return (
    <div className="py-5">
      <div className="container">
        <h1 className="main-header">Our Service</h1>
        <p className="text-center w-50 m-auto">
          When unknow printer took a gallery of type and scramblted it to makea
          type specimen book
        </p>
        <div className="row pt-4">
          <div className="col-lg-4 col-md-6 col-sm-12 box mb-3 mb-lg-0 d-flex flex-column justify-content-center align-items-center gap-3  p-5">
            <div>
              <img src={require("../../Assets/icon_1-XP1dDkM9.png")} alt="" />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h4>Web Solution</h4>
              <p className="text-center">
                Aliquam sollicitudin consequat commodo. Cras bibendum ipsum eu
                augue egestas laciniaam eu ornare ipsum, quis tristique ligula.
              </p>
            </div>
            <div>
              <FontAwesomeIcon
                style={{ color: "rgb(254, 176, 0)" }}
                icon={faPlay}
              ></FontAwesomeIcon>
              <a className=" text-decoration-none ms-3 text-black" href="/">
                Read More
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 box mb-3 mb-lg-0 d-flex flex-column justify-content-center align-items-center gap-3  p-5">
            <div>
              <img src={require("../../Assets/icon3.png")} alt="" />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h4>Web Development</h4>
              <p className="text-center">
                Aliquam sollicitudin consequat commodo. Cras bibendum ipsum eu
                augue egestas laciniaam eu ornare ipsum, quis tristique ligula.
              </p>
            </div>
            <div>
              <FontAwesomeIcon
                style={{ color: "rgb(254, 176, 0)" }}
                icon={faPlay}
              ></FontAwesomeIcon>
              <a className=" text-decoration-none ms-3 text-black" href="/">
                Read More
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 box mb-3 mb-lg-0 d-flex flex-column justify-content-center align-items-center gap-3  p-5">
            <div>
              <img src={require("../../Assets/icon_1-XP1dDkM9.png")} alt="" />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h4>Strategy & Research</h4>
              <p className="text-center">
                Aliquam sollicitudin consequat commodo. Cras bibendum ipsum eu
                augue egestas laciniaam eu ornare ipsum, quis tristique ligula.
              </p>
            </div>
            <div>
              <FontAwesomeIcon
                style={{ color: "rgb(254, 176, 0)" }}
                icon={faPlay}
              ></FontAwesomeIcon>
              <a className=" text-decoration-none ms-3 text-black" href="/">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
