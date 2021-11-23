import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles, createStyles, Button } from "@material-ui/core";
import background from "../Assets/Group2.png";
import { useDispatch } from "react-redux";
import { openFormAction } from "../screens/Giftscreen/actions"
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
      width: "30%"
    },
  })
);
export default function AutoGridNoWrap() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const openForm = ()=> {
    dispatch(openFormAction(true)); 
  }
  return (
    <>
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 1200,
          flexGrow: 1,
          boxShadow: "none",
          display: "flex",
        }}
      >
        <Grid container spacing={2} >
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
                <Button className={classes.ggbtn}  onClick={openForm}>
                  Corporate gifting
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
