import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { makeStyles, createStyles } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, Typography } from "@mui/material";
import background from "../Assets/image 36.png";
import background2 from "../Assets/image 37.png";
import groupd from "../Assets/Group d.png";
import groupc from "../Assets/Group c.png";
import groupa from "../Assets/Group a.png";
import groupb from "../Assets/Group b.png";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const useStyles = makeStyles((theme) =>
  createStyles({
    mainContainer: {
      width: "100%",
      //   margin: "0 auto",
      backgroundColor: "#044236",
      position: "relative",
      height: "auto",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },
    boldwhite: {
      color: "white",
      fontWeight: 700,
      fontSize: "16px",
      textAlign: "left",
    },
    thinwhite: {
      color: "white",
      fontSize: "14px",
      textAlign: "left",
    },
    head: {
      color: "#D6CD56",
      fontWeight: 700,
      fontSize: "28px",
      textAlign: "center",
      textTransform: "uppercase",
      padding: "3rem",
      fontFamily: "Druk,sans-serif !important",
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
export default function AutoGrid() {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
    <Box sx={{ flexGrow: 1 }} >
      
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
        <Typography className={classes.head} variant="h3">
        Have you Seen
      </Typography>
      <Grid
        container
        spacing={3}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Grid item>
          <Item style={{ background: "transparent", boxShadow: "none" }}>
            <Card
              sx={{ maxWidth: 220 }}
              style={{ background: "transparent", boxShadow: "none" }}
            >
              <CardActionArea>
                <CardContent>
                  <img src={background2} alt="" />
                  <Typography className={classes.boldwhite}>
                    Oily Skin
                  </Typography>
                  <Typography className={classes.thinwhite}>
                    Lorem ipsum dolor sitfghh amet, consectetur asdddd
                    adipiscing elit.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Item>
        </Grid>
        <Grid item>
          <Item style={{ background: "transparent", boxShadow: "none" }}>
            <Card
              sx={{ maxWidth: 220 }}
              style={{ background: "transparent", boxShadow: "none" }}
            >
              <CardActionArea>
                <CardContent>
                  <img src={background} alt="" />
                  <Typography className={classes.boldwhite}>
                    Dry Skin
                  </Typography>
                  <Typography className={classes.thinwhite}>
                    Lorem ipsum dolor sitfghh amet, consectetur asdddd
                    adipiscing elit.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Item>
        </Grid>
        <Grid item>
          <Item style={{ background: "transparent", boxShadow: "none" }}>
            <Card
              sx={{ maxWidth: 220 }}
              style={{ background: "transparent", boxShadow: "none" }}
            >
              <CardActionArea>
                <CardContent>
                  <img src={background2} alt="" />
                  <Typography className={classes.boldwhite}>
                    Oily Skin
                  </Typography>
                  <Typography className={classes.thinwhite}>
                    Lorem ipsum dolor sitfghh amet, consectetur asdddd
                    adipiscing elit.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Item>
        </Grid>
        <Grid item>
          <Item style={{ background: "transparent", boxShadow: "none" }}>
            <Card
              sx={{ maxWidth: 220 }}
              style={{ background: "transparent", boxShadow: "none" }}
            >
              <CardActionArea>
                <CardContent>
                  <img src={background} alt="" />
                  <Typography className={classes.boldwhite}>
                    Dry Skin
                  </Typography>
                  <Typography className={classes.thinwhite}>
                    Lorem ipsum dolor sitfghh amet, consectetur asdddd
                    adipiscing elit.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Item>
        </Grid>
        <Grid item>
          <Item style={{ background: "transparent", boxShadow: "none" }}>
            <Card
              sx={{ maxWidth: 220 }}
              style={{ background: "transparent", boxShadow: "none" }}
            >
              <CardActionArea>
                <CardContent>
                  <img src={background2} alt="" />
                  <Typography className={classes.boldwhite}>
                    Oily Skin
                  </Typography>
                  <Typography className={classes.thinwhite}>
                    Lorem ipsum dolor sitfghh amet, consectetur asdddd
                    adipiscing elit.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}
