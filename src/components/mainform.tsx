import React, { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const FormPractice = () => {
  
//   const url = "https://jsonplaceholder.typicode.com/posts";
//   async function handleSubmit(values:any) {
//     try {
//       let params = {
//         // method: "POST",
//         // headers: {
//         //   "content-type": "application/json",
//         // },
//         data: values,
//       };
//       const res = await axios.post(url, values);
//       console.log(res);
//     } catch (err) {
//       console.log(err);
//     }
//   }

  const ValidationSchema = Yup.object().shape({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
  });

  const initialValues = { firstName: "", lastName: "", email: "" };

  return (
    <div className="formField">
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          console.log(values);
        //   handleSubmit(values);
        }}
      >
        {({ values, errors, touched, isSubmitting, setFieldTouched }) => (
          <Form>
            <div className="outerDiv">
              <label htmlFor="firstName">First Name</label>
              <Field name="firstName" type="text" />
              <ErrorMessage name="firstName" />
            </div>
            <div className="outerDiv">
              <label htmlFor="lastName">Last Name</label>
              <Field name="lastName" type="text" />
              <ErrorMessage name="lastName" />
            </div>
            <div className="outerDiv">
              <label htmlFor="email">Email Address</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" />
            </div>
            <div className="outerDiv">
              <button type="submit">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormPractice;