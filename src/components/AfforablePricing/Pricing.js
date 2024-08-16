import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Pricing.css";
import { Button } from "react-bootstrap";
function Pricing() {
  const sliderShow = Array.from({ length: 10 }).map((_, key) => {
    return (
      <SwiperSlide key={key} className="slider-con">
        <div className="d-flex flex-column justify-content-center align-items-center gap-2">
          <div className="text-center">
            <img src={require("../../Assets/nuibhil;ub.png")} alt=""></img>
          </div>
          <h2>Basic</h2>
          <ul className=" list-unstyled text-center ">
            <li>Graphic Design</li>
            <li>Web Design</li>
            <li>UI/UX</li>
            <li>HTML/CSS</li>
            <li>SEO Marketing</li>
            <li>Business Analysis</li>
          </ul>
          <div className="d-flex align-items-center">
            <h1 className=" fw-bold">$75</h1>
            <span
              style={{
                color: "#feb000",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              / month
            </span>
          </div>
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
      </SwiperSlide>
    );
  });
  return (
    <div className="py-5">
      <div className="container">
        <h1 className="main-header">Affordable Pricing</h1>
        <p className="text-center">
          When an unknown printer took a gallery of type and scrambled it to
          make a type specimen book.
        </p>
        <div className="pt-5">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {sliderShow}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
