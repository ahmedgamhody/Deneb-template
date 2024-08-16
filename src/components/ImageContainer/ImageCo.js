import "./ImageCo.css";
function ImageCo({ title }) {
  return (
    <div className="img-con ">
      <div className="container d-flex flex-column justify-content-center h-100">
        <h1 className=" fw-bold" style={{ fontSize: "45px" }}>
          {title}
        </h1>
        <p style={{ color: "#feb000", padding: "0 0 0 10px" }}>
          Home / {title}
        </p>
      </div>
    </div>
  );
}

export default ImageCo;
