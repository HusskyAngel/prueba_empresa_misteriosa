import React, { useState } from "react";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const App = () => {
  const [zoom, setZoom] = useState(15);
  const [latitude, setLatitude] = useState(37.775);
  const [longitude, setLongitude] = useState(-122.418);

  return (
    <div>
      <Map
        mapboxAccessToken="YOUR_MAPBOX_ACCESS_TOKEN"
        style="width: 500px; height: 500px"
        initialViewState={{
          longitude,
          latitude,
          zoom,
        }}
      >
        <Marker
          lon={longitude}
          lat={latitude}
          draggable={true}
          onDrag={(event) => {
            setLongitude(event.lng);
            setLatitude(event.lat);
          }}
        />
      </Map>
    </div>
  );
};

export default App;
