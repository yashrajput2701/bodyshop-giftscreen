import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    mainContainer: {
      width: "100%",
      margin: "0 auto",
      backgroundColor: "#044236",
      height: "324px",
      display: "flex",
      justifyContent: "center",
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
    },
    yellowtext: {
      color: "#D6CD56",
      textAlign: "center",
    },
    dummytext: {
      color: "white",
      //   width: "50%",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
    },
  })
);
export default function AutoGridNoWrap() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
      <Paper sx={{ maxWidth: "auto", my: 1, mx: "auto",boxShadow: "none" }}>
        <Grid
          container
          wrap="nowrap"
          spacing={2}
          className={classes.mainContainer}
        >
          <Grid item>
            <Box className={classes.hometext}>
              <Typography className={classes.whitetext}>
                Home / Gift Card
              </Typography>
              <Typography
                className={classes.yellowtext}
                style={{ fontSize: "40px", fontWeight: 700 }}
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
    </Box>
  );
}
