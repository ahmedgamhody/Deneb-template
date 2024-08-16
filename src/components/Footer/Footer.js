import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="pt-5 footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="mb-4">
              <img src={require("../../Assets/logo.png")} alt=""></img>
            </div>
            <p>
              Quisque orci nisl, viverra et sem ac, tincidunt egestas massa.
              Morbi est arcu, hendrerit ac vehicula condimentum, euismod nec
              tortor praesent consequat urna.
            </p>
            <div className="icons d-flex gap-3">
              <Link to="https://web.facebook.com/Gamhody159" target="_blank">
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
              <Link to="https://x.com/ahmedgamhody9" target="_blank">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link
                to="https://www.instagram.com/ahmed_s_gamhody/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link to="https://github.com/ahmedgamhody" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
              <Link
                to="https://www.linkedin.com/in/ahmedgamhody/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />{" "}
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 text-center">
            <h4 className=" fw-bold mb-3">Links</h4>
            <ul
              className=" list-unstyled gap-2 d-flex flex-column"
              color="#7a808d"
            >
              <li>About Us</li>
              <li>Services</li>
              <li>Portfolios</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 text-center">
            <h4 className=" fw-bold mb-3">Contact Us</h4>
            <ul className=" list-unstyled gap-2 d-flex flex-column">
              <li>1800-121-3637 +91 924-614-7999</li>
              <li>info@deneb.com services@deneb.com</li>
              <li>125, Park street aven, Brocklyn, Newyork.</li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#edecf0" }} className="mt-3">
        <p className="m-0 text-center py-2 text-black fw-bold">
          Copyright © 2020{" "}
          <span className=" fw-bold " style={{ color: "#feb000" }}>
            Deneb
          </span>
          . All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
