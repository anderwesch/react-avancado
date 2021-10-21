import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(15, "Too Long!")
    .required("Required")
});

function SignupForm() {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        genero: '',
        description: 'teste'
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        alert("Dados enviados!");
        console.log(values);
      }}
    >
      {({ values, errors, touched }) => (
        <div>
          <Form>
            <label>Nome:</label>
            <Field type="text" name="firstName" />
            { touched.firstName && errors.firstName ? <div>{ errors.firstName }</div> : null }
            <br />
            <label>Sobrenome:</label>
            <Field type="text" name="lastName" />
            { touched.lastName && errors.lastName ? <div>{ errors.lastName }</div> : null }
            <br />
            <label>Genero:</label>
            <Field as="select" name="genero">
              <option value="0">Selecione</option>
              <option value="1">Masculino</option>
              <option value="2">Feminino</option>
            </Field>
            <br />
            <label>Descrição:</label>
            <Field as="textarea" name="description" />
            <br /><br />
            <input type="submit" value="Enviar" />
          </Form>
        </div>
        
      )}
    </Formik>    
  );
}

export default SignupForm;