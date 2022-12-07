import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(6)
    .max(50)
    .required(),
  email: Yup.string().email().required(),
});

const FormComponent = () => {

  const [mensaje, setMensaje] = useState("");

  return(
    <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        name: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, e) => {
        setMensaje(`Gracias ${values.name}, te contactaremos cuanto antes vía mail`);
        e.resetForm();
      }}
    >
      <Form>
        <Field name="name" placeholder="Nombre completo"/>
        <Field name="email" placeholder="Email"/>
        <button type="submit" onClick={() => setMensaje("Por favor verifique su información nuevamente")}>Submit</button>
      </Form>  
    </Formik>
    <p>{mensaje}</p>
  </div>
  )
};

export default FormComponent;