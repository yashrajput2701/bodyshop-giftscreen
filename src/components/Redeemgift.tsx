import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles, createStyles, Button } from "@material-ui/core";
import background from "../Assets/Group.png";
import Modal from "@mui/material/Modal";
import InputBase from "@mui/material/InputBase";
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
  })
);
export default function AutoGridNoWrap() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
    <Paper sx={{ p: 2, margin: "auto", maxWidth: 1200, flexGrow: 1, boxShadow: "none" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
              <Box className={classes.left}>
                <Typography variant="h4" className={classes.heading}>
                  Want to Redeem Gift Card ?
                </Typography>
                <Typography
                  style={{
                    width: "600px",
                    color: "#666666",
                    fontSize: "16px",
                    marginTop: "2rem",
                  }}
                >
                  Dreaming of a summer escape? Slip into the shower for a taste
                  of the tropics with this fruity fresh shower gel. It’s
                  enriched with mango extract from soft and squidgy mangoes and
                  cleanses your skin with its silky sudsy layers.
                </Typography>
                <Button className={classes.ggbtn} onClick={handleOpen}>
                  Redeem Gift card
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
                      Redeem Balance
                    </Typography>
                    <Typography
                      id="keep-mounted-modal-description"
                      sx={{ mt: 2 }}
                    >
                      Gift Card Number
                    </Typography>
                    <Paper
                      component="form"
                      sx={{
                        p: "2px 4px",
                        display: "flex",
                        alignItems: "center",
                        // width: 400,
                      }}
                      style={{
                        border: "1px #E2E2E2 solid",
                        height: "54px",
                        width: "auto",
                        marginTop: "1rem",
                      }}
                    >
                      <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Gift card number here"
                        inputProps={{ "aria-label": "Gift card number here" }}
                      />
                      <Typography
                        style={{
                          color: "#044236",
                          fontSize: "14px",
                          fontWeight: 600,
                          cursor: "pointer",
                        }}
                      >
                        VALIDATE
                      </Typography>
                    </Paper>
                    <Box className={classes.flexx}>
                      <Button className={classes.cancelbtn}>
                        Cancel
                      </Button>
                      <Button className={classes.greenbtn}>
                        Check Balance
                      </Button>
                    </Box>
                  </Box>
                </Modal>
              </Box>
              </Grid>
              
            </Grid>
            <Grid item>
            <Box className={classes.giftimg}>
                  <img src={background} alt="" />
                </Box>
           
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
