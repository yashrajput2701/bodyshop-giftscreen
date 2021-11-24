import React from "react";
// import ReactDOM from "react-dom";
import { Formik, Form, Field, useField } from "formik";
import {
  makeStyles,
  createStyles,
  Button,
  Typography,
} from "@material-ui/core";
import * as Yup from "yup";
const MyTextInput = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
const MyInput = ({ label, ...props}:any) => {
  const [field, meta] = useField(props);
  return (
    <>
    <label htmlFor={props.id || props.name}>{label}</label>
    <input className="text-input" {...field} {...props} />
    {meta.touched && meta.error ? (
      <div className="error">{meta.error}</div>
    ) : null}
  </>
  )
}
// const MyCheckbox = ({ children, ...props }: any) => {
//   const [field, meta] = useField({ ...props, type: "checkbox" });
//   return (
//     <div>
//       <label className="checkbox-input">
//         <input type="checkbox" {...field} {...props} />
//         {children}
//       </label>
//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//     </div>
//   );
// };

// const MySelect = ({ label, ...props }: any) => {
//   const [field, meta] = useField(props);
//   return (
//     <div>
//       <label htmlFor={props.id || props.name}>{label}</label>
//       <select {...field} {...props} />
//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//     </div>
//   );
// };
const useStyles = makeStyles((theme) =>
  createStyles({
    formcontainer: {
      width: "50%",
      height: "auto",
      margin: "5rem",
    },
    firstcontainer: {
      display: "flex",
      justifyContent: "space-between",
    },
    secondcontainer: {
      display: "flex",
      justifyContent: "space-between",
    },
    nameinput: {
      width: "376px",
      height: "54px",
      border: "1px gray solid",
      borderRadius: "5px",
    },
    corp: {
      fontSize: "25px",
      fontWeight: 700,
      fontFamily: "remote-alt",
      margin: "1rem",
    },
    biginput: {
      width: "956px",
      height: "160px",
    },
    groupbutton: {
      display: "flex",
    },
    greenbtn: {
      backgroundColor: "#044236",
      width: "195px",
      padding: "2em",
      height: "40px",
      textTransform: "inherit",
      color: "white",
      position: "relative",
      "&:hover": { backgroundColor: "#044236" },
      margin: "0.5rem",
    },
    cancelbtn: {
      backgroundColor: "transparent",
      width: "195px",
      padding: "2em",
      height: "40px",
      textTransform: "inherit",
      color: "#044236",
      position: "relative",
      "&:hover": { backgroundColor: "transparent" },
      margin: "0.5rem",
      border: "1px #044236 solid",
    },
    toggle: {
      fontSize: "16px",
      marginBottom: "1rem",
      marginTop: "1rem",
    },
    togglebtn: {
      width: "25px",
      height: "30px",
    },
    togglesize: {
      fontSize: "16px",
      marginBottom: "1rem",
      marginTop: "1rem",
      marginLeft: "10px",
    },
    label: {
      marginBottom: "1rem",
      marginTop: "1rem",
    },
    aligntoggle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    tglalign: {
      display: "flex",
    },
    togglebuttons: {
      width: "376px",
    },
  })
);

export default function Corporateform() {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{
        name: "",
        mobilenumber: "",
        email: "",
        genderOptions: "",
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        mobilenumber: Yup.string()
          .max(10, "Must be 10 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        genderOptions: Yup.boolean()
          .required("Required")
          .oneOf([true], "You must accept the terms and conditions."),
      })}
      // onSubmit={(values, { setSubmitting }) => {
      //   // console.log(JSON.stringify(values, null, 2));
      //   setTimeout(() => {
      //     alert(JSON.stringify(values, null, 2));
      //     // console.log(JSON.stringify(values, null, 2));
      //     setSubmitting(false);
      //   }, 400);
      // }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        console.log(values);
      //   handleSubmit(values);
      }}
    >
      {/* {({ errors, touched, isValidating }) => ( */}
        {({ values, errors, touched, isSubmitting, setFieldTouched }) => (
      <div className={classes.formcontainer}>
        <Typography className={classes.corp}>Corporate Form</Typography>
        <div className="col-sm-12">
          <Form>
            <div className={classes.firstcontainer}>
              <div>
                <Typography className={classes.label}>Name</Typography>
                <MyTextInput
                  className={classes.nameinput}
                  type="text"
                  placeholder="Name"
                  name="name"
                  // validate={validateName}
                />
                {/* {errors.name && touched.name && errorMessage(errors.name)} */}
              </div>

              <div className="form-group">
                <Typography className={classes.label}>Mobile</Typography>
                <MyInput
                  className={classes.nameinput}
                  type="tel"
                  placeholder="Mobile number"
                  name="mobilenumber"
                  // validate={validateMobileNumber}
                />
                {/* {errors.mobilenumber &&
                    touched.mobilenumber &&
                    errorMessage(errors.mobilenumber)} */}
              </div>
            </div>
            <div className={classes.secondcontainer}>
              <div className="form-group">
                <Typography className={classes.label}>Email</Typography>
                <MyTextInput
                  type="email"
                  name="email"
                  className={classes.nameinput}
                  placeholder="Email"
                  // validate={validateEmail}
                />
                {/* {errors.email && touched.email && errorMessage(errors.email)} */}
              </div>
              <div className={classes.togglebuttons}>
                <label className={classes.toggle}>
                  Preferred mode of contact
                </label>
                <br />
                <div className={classes.tglalign}>
                  <div
                    className={`form-check form-check-inline ${classes.aligntoggle}`}
                  >
                    <Field
                      className={classes.togglebtn}
                      type="radio"
                      name="genderOptions"
                      value="Call"
                      id="inlineRadio1"
                    />
                    <label
                      className={classes.togglesize}
                      htmlFor="inlineRadio1"
                    >
                      Call
                    </label>
                  </div>
                  <div
                    className={`form-check form-check-inline ${classes.aligntoggle}`}
                  >
                    <Field
                      className={classes.togglebtn}
                      type="radio"
                      name="genderOptions"
                      value="Email"
                      id="inlineRadio2"
                    />
                    <label
                      className={classes.togglesize}
                      htmlFor="inlineRadio2"
                    >
                      Email
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Typography className={classes.label}>Comments</Typography>
              <Field
                component="textarea"
                className={classes.biginput}
                name="About"
              />
            </div>
            <div className={classes.groupbutton}>
              <Button className={classes.cancelbtn}>Cancel</Button>
              <Button className={classes.greenbtn} type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
      /* )} */
        )}
    </Formik>
  );
}
