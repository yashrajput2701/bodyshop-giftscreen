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
      height: "auto",
    //   display: "flex",
    //   justifyContent: "center",
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
      fontSize: "24px",
      textAlign: "center",
      textTransform: "uppercase",
      padding: "2rem",
    },
  })
);
export default function AutoGrid() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }} className={classes.mainContainer}>
     <Typography className={classes.head} variant= "h4">Have you Seen</Typography>
      <Grid
        container
        spacing={3}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Grid item>
          <Item style={{ background: "transparent",boxShadow: "none" }}>
            <Card sx={{ maxWidth: 220 }} style={{ background: "transparent",boxShadow: "none" }}>
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
          <Item style={{ background: "transparent",boxShadow: "none" }}>
            <Card sx={{ maxWidth: 220 }} style={{ background: "transparent",boxShadow: "none" }}>
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
          <Item style={{ background: "transparent",boxShadow: "none" }}>
            <Card sx={{ maxWidth: 220 }} style={{ background: "transparent",boxShadow: "none" }}>
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
          <Item style={{ background: "transparent",boxShadow: "none" }}>
            <Card sx={{ maxWidth: 220 }} style={{ background: "transparent",boxShadow: "none" }}>
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
          <Item style={{ background: "transparent",boxShadow: "none" }}>
            <Card sx={{ maxWidth: 220 }} style={{ background: "transparent",boxShadow: "none" }}>
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
  );
}
