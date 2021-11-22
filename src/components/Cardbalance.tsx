import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles, createStyles, Button } from "@material-ui/core";
import background from "../Assets/Group3.png";
import Modal from "@mui/material/Modal";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
const style = {
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
    flexx: {
      display: "flex",
      marginTop: "5em",
      justifyContent: "space-between",
    },
    inputfield: {
      outline: "none",
      width: "350px"
    }
  })
);

export default function Cardbalance() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isShow,setShow] = React.useState(false);
  const [enable,setEnable] = React.useState(true);
  const validate = Yup.object({
    Giftcardnumber: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    // lastName: Yup.string()
    //   .max(20, "Must be 20 characters or less")
    //   .required("Required"),
  });
  return (
    <>
    <Paper sx={{ p: 2, margin: "auto", maxWidth: 1200, flexGrow: 1, boxShadow: "none" }}>
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
                    Gift Card Balance Checker
                  </Typography>
                  <Typography
                    style={{
                      width: "600px",
                      color: "#666666",
                      fontSize: "16px",
                      marginTop: "2rem",
                    }}
                  >
                    Dreaming of a summer escape? Slip into the shower for a
                    taste of the tropics with this fruity fresh shower gel. It’s
                    enriched with mango extract from soft and squidgy mangoes
                    and cleanses your skin with its silky sudsy layers.
                  </Typography>
                  <Button className={classes.ggbtn} onClick={handleOpen}>
                    Check Balance
                  </Button>
                  <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                  >
                    <Box sx={style} style={{ position: "absolute" }}>
                      <Typography
                        style={{ fontWeight: 700, fontSize: "24px" }}
                        id="keep-mounted-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Check Balance
                      </Typography>
                      <Typography
                        id="keep-mounted-modal-description"
                        sx={{ mt: 2 }}
                      >
                        Gift Card Number
                      </Typography>

                      <Formik
                        initialValues={{
                          Giftcardnumber: "",
                          // lastName: "",
                        }}
                        validationSchema={validate}
                        onSubmit={(values) => {
                          console.log(values);
                        }}
                      >
                        {(formik) => (
                          <div>
                            <Form>
                              <TextField
                                // label="Giftcardnumber"
                                name="Giftcardnumber"
                                type="text"
                                placeholder="Gift card number here"
                                style={{
                                  fontSize: "14px",
                                  border: "none",
                                }}
                                className={classes.inputfield}
                                setShow = {setShow}
                                isShow = {isShow}
                                setEnable = {setEnable}
                              />
                              {console.log(isShow)}
                              
                              {isShow? <input />: ""}
                              <Box className={classes.flexx}>
                                <Button className={classes.cancelbtn}>
                                  Cancel
                                </Button>
                                <Button
                                  className={classes.greenbtn}
                                  type="submit"
                                  disabled={enable}
                                >
                                  Check Balance
                                </Button>
                              </Box>
                            </Form>
                          </div>
                        )}
                      </Formik>
                    </Box>
                  </Modal>
                </Box>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
