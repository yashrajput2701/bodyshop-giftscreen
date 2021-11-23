import React from "react";
// import ReactDOM from "react-dom";
import { Formik, Form, Field } from "formik";
import {
  makeStyles,
  createStyles,
  Button,
  Typography,
} from "@material-ui/core";
const required = "This field is required";
const maxLength = "Your input exceed maximum length";

// Error Component
const errorMessage = (error: any) => {
  return <div className="invalid-feedback">{error}</div>;
};

const validateName = (value: any) => {
  let error;
  if (!value) {
    error = required;
  } else if (value.length > 12) {
    error = maxLength;
  }
  return error;
};

const validateEmail = (value: any) => {
  let error;
  if (!value) {
    error = required;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
};

const validateMobileNumber = (value: any) => {
  let error;
  if (value.length > 12) {
    error = maxLength;
  }
  return error;
};
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
    toggle:{
      fontSize: "16px"
    },
    togglebtn: {
      width: "25px",
      height:"30px"
    },
    togglesize: {
      fontSize: "16px",
    }
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
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ errors, touched, isValidating }) => (
        <div className={classes.formcontainer}>
          <Typography className={classes.corp}>Corporate Form</Typography>
          <div className="col-sm-12">
            <Form>
              <div className={classes.firstcontainer}>
                <div>
                  <Typography>Name</Typography>
                  <Field
                    className={classes.nameinput}
                    type="text"
                    placeholder="Name"
                    name="name"
                    validate={validateName}
                  />
                  {errors.name && touched.name && errorMessage(errors.name)}
                </div>

                <div className="form-group">
                <Typography>Mobile</Typography>
                  <Field
                    className={classes.nameinput}
                    type="tel"
                    placeholder="Mobile number"
                    name="mobilenumber"
                    validate={validateMobileNumber}
                  />
                  {errors.mobilenumber &&
                    touched.mobilenumber &&
                    errorMessage(errors.mobilenumber)}
                </div>
              </div>
              <div className={classes.secondcontainer}>
                <div className="form-group">
                <Typography>Email</Typography>
                  <Field
                    type="email"
                    name="email"
                    className={classes.nameinput}
                    placeholder="Email"
                    validate={validateEmail}
                  />
                  {errors.email && touched.email && errorMessage(errors.email)}
                </div>
                <div className={classes.nameinput}>
                  <label className={classes.toggle}>Preferred mode of contact</label>
                  <br />
                  <div className="form-check form-check-inline">
                    <Field
                      className={classes.togglebtn}
                      type="radio"
                      name="genderOptions"
                      value="Call"
                      id="inlineRadio1"
                    />
                    <label className={classes.togglesize} htmlFor="inlineRadio1">
                      Call
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <Field
                      className={classes.togglebtn}
                      type="radio"
                      name="genderOptions"
                      value="Email"
                      id="inlineRadio2"
                    />
                    <label className={classes.togglesize} htmlFor="inlineRadio2">
                      Email
                    </label>
                  </div>
                </div>
              </div>

              <div>
              <Typography>Comments</Typography>
                <Field
                  component="textarea"
                  className={classes.biginput}
                  name="About"
                />
              </div>
              {/* <div className="form-group">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div> */}
              <div className={classes.groupbutton}>
                <Button className={classes.cancelbtn}>Cancel</Button>
                <Button className={classes.greenbtn} type="submit">Submit</Button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
}
