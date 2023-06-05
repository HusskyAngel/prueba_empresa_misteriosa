
import React, { useState } from "react";
import { Button, Input, TextField } from "@material-ui/core";
import {  useSelector,useDispatch } from 'react-redux';

export default function AddForm(){
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [imageLink, setImageLink] = useState("");
  const dispatch=useDispatch();
  const marker=useSelector(state=>state.NewMarker)
  const changer=useSelector(state=>state.changer)
  const back=()=>{
    dispatch({type:'ADDING_POINT_FALSE'})
    dispatch({type:'CHANGE_NOTIFICATION_PROPS',NotificationProps:{active: false , severity:"", message:""} })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    // Get the place, description, and image link from the form
    const place = event.target.place.value;
    const description = event.target.description.value;
    const imageLink = event.target.imageLink.value;
    const nmarker={long:marker.longitude, lat:marker.latitude};
    const changer=changer; //true post y false put
    dispatch({type:"CHANGE_NOTIFICATION_PROPS", NotificationProps:{active: true , severity:"info", message:" Marker agregado"} });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Place"
          value={place}
          onChange={(event) => setPlace(event.target.value)}
        />
        <TextField
          label="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <TextField
          label="Image Link"
          value={imageLink}
          onChange={(event) => setImageLink(event.target.value)}
        />
        <Button variant="contained" color="primary" type="submit">Submit</Button>
      </form>
        <Button variant="contained" color="primary" onClick={back}>Back </Button>
    </div>
  );
};

