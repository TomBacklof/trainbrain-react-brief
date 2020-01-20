//@Flow
import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

function Map() {
  const MAP_TOKEN =
    "pk.eyJ1Ijoiam9ha2ltaGVsbGdyZW4iLCJhIjoiY2s1a3NscDRqMGczdjNscm04OXMwdWlxYyJ9.gFU5MsFPKNlqM96iO0zEfQ";
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <ReactMapGL
      mapboxApiAccessToken={MAP_TOKEN}
      {...viewport}
      onViewportChange={setViewport}
    />
  );
}

export default Map;
