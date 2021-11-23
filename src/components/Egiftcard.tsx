import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles, createStyles, Button } from "@material-ui/core";
import background from "../Assets/gift.png";
// import { Signup } from "./Formik";
// import {useNavigate} from "react-router-dom";
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
  // const [isShow, setisshow] = React.useState(false);
  // const handleClick = () => {
  //   setisshow(true);
  // };
  return (
    <>
      <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
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
                  <Box className={classes.left}>
                    <Typography variant="h4" className={classes.heading}>
                      Send an e-gift card online
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
                      taste of the tropics with this fruity fresh shower gel.
                      It’s enriched with mango extract from soft and squidgy
                      mangoes and cleanses your skin with its silky sudsy
                      layers.
                    </Typography>
                    <Button className={classes.ggbtn}>
                      Send an E-Gift card
                    </Button>
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
      </Box>
    </>
  );
}
