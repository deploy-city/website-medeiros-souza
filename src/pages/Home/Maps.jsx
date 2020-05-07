import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const Maps = (props) => {
  const style = {
    width: 650,
    height: 550,
  };

  const { lat, lon, place } = props;

  return (
    <Map
      google={props.google}
      zoom={17}
      initialCenter={{
        lat,
        lng: lon,
      }}
      style={style}
      disableDefaultUI
    >
      <Marker onClick={props.onMarkerClick} name={place} />

      <InfoWindow onClose={props.onInfoWindowClose} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyB--mNPe0vvVocVj5siEwClfgocXxFgBe4",
})(Maps);
