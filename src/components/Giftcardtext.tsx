import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles, createStyles } from "@material-ui/core";
import groupd from "../Assets/Group d.png";
import groupc from "../Assets/Group c.png";
import groupa from "../Assets/Group a.png";
import groupb from "../Assets/Group b.png";
// import drukebold from "../fonts/Druk/Druk-Bold.otf";
const useStyles = makeStyles((theme) =>
  createStyles({
    mainContainer: {
      width: "100%",
      margin: "0 auto",
      backgroundColor: "#044236",
      height: "auto",
      display: "flex",
      justifyContent: "center",
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },
    hometext: {
      padding: "20px",
      textAlign: "left",
    },
    whitetext: {
      color: "white",
      fontSize: "17px",
      // padding: "2rem",
    },
    yellowtext: {
      color: "#D6CD56",
      textAlign: "center",
      fontFamily: "Druk,sans-serif !important",
    },
    dummytext: {
      color: "white",
      //   width: "50%",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      padding: "5rem",
    },
    backgroundimg: {
      position: "absolute",
      left: "0",
    },
    backgroundimg2: {
      position: "absolute",
      right: "0",
    },
    backgroundimg3: {
      position: "absolute",
      right: "0",
      bottom: "0",
    },
    backgroundimg4: {
      position: "absolute",
      left: "0",
      bottom: "0",
    },
  })
);
export default function AutoGridNoWrap() {
  const classes = useStyles();
  return (
    <>
      {/* <Box sx={{ flexGrow: 1, overflow: "hidden" }}> */}
      <Paper sx={{ maxWidth: "auto", my: 1, mx: "auto", boxShadow: "none" }}>
        <Grid
          container
          wrap="nowrap"
          spacing={2}
          className={classes.mainContainer}
        >
          <Box className={classes.backgroundimg}>
            <img src={groupd} alt="" />
          </Box>
          <Box className={classes.backgroundimg2}>
            <img src={groupc} alt="" />
          </Box>
          <Box className={classes.backgroundimg3}>
            <img src={groupa} alt="" />
          </Box>
          <Box className={classes.backgroundimg4}>
            <img src={groupb} alt="" />
          </Box>
          <Grid item>
            <Box className={classes.hometext}>
              <Typography className={classes.whitetext}>
                Home / Gift Card
              </Typography>
              <Typography
                className={classes.yellowtext}
                style={{ fontSize: "48px", fontWeight: 700 }}
              >
                Lorem ipsum dolor
              </Typography>
              <Typography className={classes.dummytext}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod temporut labore et magna aliquaad, quis nostrud
                exercitation ullamco laboris Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod temporut labore et
                magna aliquaad, quis nostrud exercitation ullamco laboris Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod temporut labore et magna aliquaad, quis nostrud
                exercitation ullamco laboris Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod temporut labore et
                magna aliquaad, quis nostrud exercitation ullamco laboris
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      {/* </Box> */}
    </>
  );
}
