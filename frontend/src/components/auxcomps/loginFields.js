import React from 'react';
import { Formik, Field } from 'formik';
import { TextField, Button,  Select } from '@material-ui/core';
import * as Yup from 'yup';
import Stack from '@mui/material/Stack';
import '../css/login.css'; // Import the CSS file

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
  type: Yup.string().required('Required')
});

const LoginFields = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '', type:'Operario'}}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >

      {({ errors, touched }) => (
        <form className="form-container"> {/* Add the class name to the form container */}
        <Stack direction="column" spacing={2}>
        <Field 
          name="type" 
          label="Tipo" 
          variant="outlined"
          className="form-field" 
          fullWidth
          as={Select}
          error={touched.type && Boolean(errors.type)}
          helperText={touched.type && errors.type}>
            <option value="Operario">Operario</option>
            <option value="Administrador">Administrador</option>
          </Field>

          <Field
            as={TextField}
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            className="form-field" 
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
          <Field
            as={TextField}
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            className="form-field" 
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
          />
          <Button type="submit" variant="contained" color="primary" className="submit-button">
            Login
          </Button>
        </Stack>
        </form>
      )}
  </Formik>
  );
};
export default LoginFields;
