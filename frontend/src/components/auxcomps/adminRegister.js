import React, { useState } from 'react';
import { TextField, Stack, Button } from '@mui/material';
import Alert from '@mui/material/Alert';

export default function AdminRegister(){
    const [alertIn,setAlertIn]=useState(false);
    const [values, setValues] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        cc: '',
        imageLink: '',
      });
    
      const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value,
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        //onSubmit(values);
      };
    
      return (
        <div style={{width: '50%' ,margin: '0 auto'}}> 
        { alertIn ? <Alert severity="info">Usuario agregado!</Alert> : <></>}
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
          <TextField
            label="Name"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          <TextField
            label="Surname"
            name="surname"
            value={values.surname}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            name="password"
            value={values.password}
            onChange={handleChange}
            type="password"
          />
          <TextField
            label="cedula"
            name="cc"
            value={values.cc}
            onChange={handleChange}
            type="number"
          />
          <TextField
            label="Image Link"
            name="imageLink"
            value={values.imageLink}
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" type="submit">
            Registrar
          </Button>
          </Stack>
        </form>
        </div>
      );
};
