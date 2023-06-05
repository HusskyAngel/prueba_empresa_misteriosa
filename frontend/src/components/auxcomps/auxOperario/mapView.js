import "mapbox-gl/dist/mapbox-gl.css";
import {useRef, useCallback, useEffect} from 'react';
import Map, {
  Marker,
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

const mapKey = process.env.REACT_APP_MAP_KEY+process.env.REACT_APP_MAP_KEYT;

function MapView() {
  const dispatch=useDispatch();
  const mapRef=useRef(null);
  const markers=useSelector(state=>state.Points)
  const desplaceLong=useSelector(state=> state.CurrentMarker.long)
  const desplaceLat=useSelector(state=> state.CurrentMarker.lat)
  const addingPoint=useSelector(state=>state.AddingPoint)


  const onSelectMarker= useCallback(({ longitude, latitude }) => {
    if (mapRef.current) {
      mapRef.current.flyTo({
        zoom:90,
        center: [longitude, latitude],
        duration: 2000,
      });
    }
  }, []);

  useEffect(() => {
    onSelectMarker({longitude: desplaceLong,latitude: desplaceLat})
  }, [desplaceLong,desplaceLat]);

  const [lng, setLng] = useState(54.37585762735543);
  const [lat, setLat] = useState(24.45677614934833);
  const [marker, setMarker] = useState({
    latitude: 40,
    longitude: -100
  });
  useEffect(()=>{
    dispatch({type:'CHANGE_NEW_MARKER'},{NewMarker:marker})
  },[marker])
  const [events, logEvents] = useState({});
  
  const onMarkerDragStart = useCallback((event) => {
    logEvents(_events => ({..._events, onDragStart: event.lngLat}));
  }, []);

  const onMarkerDrag = useCallback((event) => {
    logEvents(_events => ({..._events, onDrag: event.lngLat}));

    setMarker({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat
    });
  }, []);

  const onMarkerDragEnd = useCallback((event) => {
    logEvents(_events => ({..._events, onDragEnd: event.lngLat}));
  }, []);

  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh'  }}>
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
        ref={mapRef}
      >
        {addingPoint ? 
        <Marker 
        color="red"
        longitude={marker.longitude}
        latitude={marker.latitude}
        anchor="bottom"
        draggable
        onDragStart={onMarkerDragStart}
        onDrag={onMarkerDrag}
        onDragEnd={onMarkerDragEnd}
        /> : <></>}
        {markers.map((m)=>(
            <Marker longitude={m.long} latitude={m.lat} />
        ))}

        <NavigationControl position="bottom-right" />
        <FullscreenControl />
        <GeolocateControl />
      </Map>
    </div>
  );
}

export default MapView;
