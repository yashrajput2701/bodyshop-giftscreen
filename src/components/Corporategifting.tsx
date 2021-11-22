import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles, createStyles, Button } from "@material-ui/core";
import background from "../Assets/Group2.png";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import { Formik, Form } from "formik";
import { TextFieldform } from "./TextFieldform";
import * as Yup from "yup";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
const style = {
  // position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  height: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const useStyles = makeStyles((theme) =>
  createStyles({
    mainContainer: {
      width: "100%",
      margin: "0 auto",
      display: "flex",
      justifyContent: "center",
    },
    hometext: {
      display: "flex",
      justifyContent: "center",
      padding: "3rem",
    },
    left: {
      boxSizing: "border-box",
    },
    heading: {
      fontWeight: 700,
      fontSize: "24px",
    },
    ggbtn: {
      backgroundColor: "#044236",
      // width: "auto",
      padding: "2em",
      height: "40px",
      textTransform: "inherit",
      color: "white",
      position: "relative",
      "&:hover": { backgroundColor: "#044236" },
      marginTop: "3rem",
    },
    giftimg: {
      padding: "2rem",
    },
  })
);
export default function AutoGridNoWrap() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue: any) => {
    setValue(newValue);
  };
  return (
    <>
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 1200,
          flexGrow: 1,
          boxShadow: "none",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Box className={classes.giftimg}>
                  <img src={background} alt="" />
                </Box>
              </Grid>
            </Grid>
            <Grid item>
              <Box className={classes.left}>
                <Typography variant="h4" className={classes.heading}>
                  Corporate Gifting
                </Typography>
                <Typography
                  style={{
                    width: "600px",
                    color: "#666666",
                    fontSize: "16px",
                    marginTop: "2rem",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod temporut labore et magna aliquaad, quis nostrud
                  exercitation ullamco laboris Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod temporut labore et
                  magna aliquaad, quis
                </Typography>
                <Button className={classes.ggbtn} onClick={handleOpen}>
                  Corporate gifting
                </Button>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={open}>
                    <Box sx={style} style={{ position: "absolute" }}>
                      <Formik
                        initialValues={{
                          firstName: "",
                          lastName: "",
                          email: "",
                          password: "",
                          confirmPassword: "",
                        }}
                        validationSchema={validate}
                        onSubmit={(values, { setSubmitting }) => {
                          setSubmitting(true);
                          console.log(values);
                          
                        }}
                      >
                         {({ values, errors, touched, isSubmitting, setFieldTouched }) => (
                          <div>
                            {/* {console.log(isSubmitting)} */}
                            <Form>
                              <TextFieldform
                                label="First Name"
                                name="firstName"
                                type="text"
                              />
                              <TextFieldform
                                label="Last Name"
                                name="lastName"
                                type="text"
                              />
                              <TextFieldform
                                label="Email id"
                                name="email id"
                                type="email id"
                              />
                              <TextFieldform
                                label="Password"
                                name="password"
                                type="password"
                              />
                              <TextFieldform
                                label="Confirm Password"
                                name="confirmPassword"
                                type="password"
                              />
                              <LocalizationProvider
                                dateAdapter={AdapterDateFns}
                              >
                                <Stack spacing={3}
                                style={{ paddingTop: "1rem" }}>
                                  <DateTimePicker
                                    label="Date&Time picker"
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => (
                                      <TextField {...params} />
                                    )}
                                  />
                                </Stack>
                              </LocalizationProvider>
                              <button
                                className="btn btn-dark mt-3"
                                type="submit"
                              >
                                Register
                              </button>
                              <button
                                className="btn btn-danger mt-3 ml-3"
                                type="reset"
                              >
                                Reset
                              </button>
                            </Form>
                          </div>
                        )}
                      </Formik>
                    </Box>
                  </Fade>
                </Modal>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
