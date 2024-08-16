import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  const mapStyles = {
    height: "500px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 23.733,
    lng: 90.393,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBSallzje-ZSrT740bsUw5BPhV4AluiGAA">
      <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
