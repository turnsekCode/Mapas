import "../App.css";
import React, { useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import { useLoadScript } from "@react-google-maps/api";

const markers = [
  {
    id: 1,
    name: "Quickgold Quintana",
    position: { lat: 40.4341911, lng: -3.6461429 },
  },
  {
    id: 2,
    name: "Quickgold Albufera",
    position: { lat: 40.3931151, lng: -3.6590415 },
  },
  {
    id: 3,
    name: "Quickgold Delicias",
    position: { lat: 40.4011045, lng: -3.6951906 },
  },
  {
    id: 4,
    name: "Quickgold Usera",
    position: { lat: 40.3962949, lng: -3.712925499999999 },
    zoom: 13,
  },
];

function MapaGoogle() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_KEY_GOOGLEMAP, // Add your API key
  });
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  return isLoaded ? (
    <GoogleMap
      center={{ lat: 40.4365878, lng: -3.6833264 }}
      zoom={11}
      onClick={() => setActiveMarker(null)}
      mapContainerClassName="contenedor_mapa"
    >
      {markers.map(({ id, name, position }) => (
        <>
          <Marker
            ClassName="markers"
            key={id}
            position={position}
            onClick={() => handleActiveMarker(id)}
          >
            {activeMarker === id ? (
              <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                <div>{name}</div>
              </InfoWindow>
            ) : null}
          </Marker>
        </>
      ))}
    </GoogleMap>
  ) : null;
}

export default MapaGoogle;
