import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Button } from '@material-ui/core';
import * as Yup from 'yup';
import './css/login.css'; // Import the CSS file
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const Login = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <form className="form-container"> {/* Add the class name to the form container */}
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
        </form>
      )}
    </Formik>
  );
};
export default Login;
