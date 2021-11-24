import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles, createStyles } from "@material-ui/core";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import groupd from "../Assets/background.png";
const useStyles = makeStyles((theme) =>
  createStyles({
    mainContainer: {
      width: "100%",
      margin: "0 auto",
      display: "flex",
      justifyContent: "center",
    },
    greenbox: {
      background: "#044236",
      width: "auto",
      borderRadius: "10px",
      backgroundImage: `url(${groupd})`,
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
      fontSize: "30px",
      color: "yellow",
      textTransform: "uppercase",
      paddingTop: "1rem",
      fontFamily: "Druk,sans-serif !important",
    },
    giftimg: {
      padding: "2rem",
      paddingTop: "4rem",
    },
    greytext: {
      color: "white",
      fontSize: "16px",
      paddingTop: "1rem",
      paddingBottom: "2rem"
    }
  })
);
export default function AutoGridNoWrap() {
  const classes = useStyles();
  return (
    <>
    <Paper sx={{ p: 2, margin: "auto", maxWidth: 1200, flexGrow: 1, boxShadow: "none" }} className={classes.mainContainer}>
        <Grid container spacing={2} className={classes.greenbox}>
          {/* <Grid item xs={12} sm container> */}
            {/* <Grid item xs container direction="column" spacing={2}> */}
              <Grid item xs={12} md={6}>
              <Box className={classes.left}>
                  <Typography variant="h4" className={classes.heading}>
                    Buy a Gift Card in Store
                  </Typography>
                  <Typography className={classes.greytext}
                  >
                    Visit us in store for a free consultation lorem ipsum dolor
                    sit ametabore et magna aliqua quis nostrud exercitation,
                    Visit us in store for a free consultation lorem ipsum dolor
                    sit ametabore et magna aliqua quis.
                  </Typography>
                </Box>
              </Grid>
              
            {/* </Grid> */}
            <Grid item xs={12} md={6}>
            <Box className={classes.giftimg}>
                  <Paper
                    component="form"
                    sx={{
                      p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                      width: "80%",
                    }}
                  >
                    <IconButton
                      type="submit"
                      sx={{ p: "10px" }}
                      aria-label="search"
                    >
                      <SearchIcon />
                    </IconButton>
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Search town or Postcodes"
                      inputProps={{ "aria-label": "search google maps" }}
                    />
                  </Paper>
                </Box>
            </Grid>
          {/* </Grid> */}
        </Grid>
      </Paper>
    </>
  );
}
