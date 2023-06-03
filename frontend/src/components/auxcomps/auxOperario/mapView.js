import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Marker,
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";
import { useState } from "react";

const mapKey = process.env.REACT_APP_MAP_KEY+process.env.REACT_APP_MAP_KEYT;

function MapView() {
  const [lng, setLng] = useState(54.37585762735543);
  const [lat, setLat] = useState(24.45677614934833);
  const [zoom,setZoom]=useState(50)

  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh'  }}>
    <h1> Inventario</h1>
    {console.log(mapKey)}
      <Map
        mapboxAccessToken={mapKey}
        style={{
          width: "95%",
          height: "90%",
        }}
        initialViewState={{
          longitude: lng,
          latitude: lat,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={lng} latitude={lat} />
        <NavigationControl position="bottom-right" />
        <FullscreenControl />
        <GeolocateControl />
      </Map>
    </div>
  );
}

export default MapView;
