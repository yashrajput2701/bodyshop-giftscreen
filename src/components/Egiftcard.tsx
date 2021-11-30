import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles, createStyles, Button } from "@material-ui/core";
import background from "../Assets/gift.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SENDGIFTCARDDATA } from "../Actions";
import { ReducersModel } from "../model";
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
      fontFamily: "Druk,sans-serif !important",
      letterSpacing: "3px !important",
      marginBottom: "1rem",
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
      padding: "1rem",
    },
    greytext: {
      color: "#666666",
      fontSize: "16px",
      marginTop: "2rem",
    },
  })
);
export default function AutoGridNoWrap() {
  const classes = useStyles();
  // const [isShow, setisshow] = React.useState(false);
  // const handleClick = () => {
  //   setisshow(true);
  // };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SENDGIFTCARDDATA());
  }, []);
  const apidata = useSelector((state: ReducersModel) => state.sendgiftReducer);
  console.log("apidata", apidata);
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
            paddingTop: "2rem",
          }}
        >
          {apidata.data.map((product: any, index: any) => {
            return (
              <Grid container spacing={2}>
                <Grid item xs={12} md={7}>
                  <Box className={classes.left}>
                    <Typography variant="h4" className={classes.heading}>
                      Send an e-gift card online
                    </Typography>
                    <Typography className={classes.greytext}>
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

                <Grid item xs={12} md={5}>
                  <Box className={classes.giftimg}>
                    <img
                      src={background}
                      alt=""
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Box>
                </Grid>
              </Grid>
            );
          })}
        </Paper>
      </Box>
    </>
  );
}
