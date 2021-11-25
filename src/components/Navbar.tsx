import React from "react";

import {
  AppBar,
  makeStyles,
  Toolbar,
  Box,
  Typography,
  Link,
  List,
  ListItem,
} from "@material-ui/core";
import icon from "../Assets/Vector.png";
import vector from "../Assets/Vector2.png";
// import vector1 from "../Assets/Vector (1).png";
import vector2 from "../Assets/Vector (21).png";
import vector3 from "../Assets/Vector (3).png";
import vector4 from "../Assets/Vector (4).png";
const useStyles = makeStyles({
  container: {
    boxSizing: "border-box",
    position: "sticky",
    color: "white",
    padding: "0",
    top: "0",
    width: "100%",
  },

  navbarContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    height: "78px",
    background: "#004236",
    boxSizing: "border-box",
  },

  store: {
    color: "white",
    paddingLeft: "10px",
    fontWeight: 500,
  },

  logo1: { 
    display: "flex",
  },

  img1: {
    margin: "25px",
  },
  navbarContainer2: {
    width: "100%",
    // height: "60px",
    background: "#FFFFFF",
    boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.06)",
    // display: "flex",

    // justifyContent: "center",
    // boxSizing: "border-box",
  },

  listContainer: {
    width: "100%",
    // overflowX: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  listItem: {
    margin: "4px",
    fontSize: "15px",
  },

  link: {
    color: "#333333",
    fontSize: "15px",
    fontWeight: 500,
  },

  link2: {
    color: "#333333",
    fontSize: "15px",
    fontWeight: 500,
    width: "90px",
  },
  link3: {
    color: "#333333",
    fontSize: "15px",
    fontWeight: 500,
    width: "130px",
  },
  navbarContainer3: {
    height: "auto",
    width: "100%",
    background: "#D6CE4B",
    boxSizing: "border-box",
  },

  dotted: {
    width: "100%",
    height: "auto",
    background: "#D6CE4B",
    border: "1px dashed #000000",
    boxSizing: "border-box",
    borderRadius: "2px",
  },

  text: {
    fontWeight: 500,
    fontSize: "15px",
    color: "#004240",
    display: "flex",
    justifyContent: "center",
  },
});

export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.container}>
      <Toolbar className={classes.navbarContainer}>
        <Box className={classes.logo1}>
          <img src={icon} alt="img" />

          <Typography className={classes.store}>STORES</Typography>
        </Box>

        <Box className={classes.logo1}>
          <img src={vector} alt="img" />
        </Box>
        <Box className={classes.logo1}>
          {/* <img className={classes.img1} src={vector1} alt="img" /> */}
          <img className={classes.img1} src={vector2} alt="img" />
          <img className={classes.img1} src={vector3} alt="img" />
          <img className={classes.img1} src={vector4} alt="img" />
        </Box>
      </Toolbar>
      <Toolbar className={classes.navbarContainer2}>
        <List className={classes.listContainer} disablePadding>
          <ListItem className={classes.listItem}>
            <Link href="#" className={classes.link} underline="none">
              {"TRENDING"}
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link href="#" className={classes.link} underline="none">
              {"FACE"}
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link href="#" className={classes.link} underline="none">
              {"BODY"}
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link href="#" className={classes.link} underline="none">
              {"MAKEUP"}
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link href="#" className={classes.link} underline="none">
              {"HAIR"}
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link href="#" className={classes.link} underline="none">
              {"FRAGRANCE"}
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link href="#" className={classes.link} underline="none">
              {"GIFTS"}
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link href="#" className={classes.link} underline="none">
              {"RANGE"}
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link href="#" className={classes.link} underline="none">
              {"OFFERS"}
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link href="#" className={classes.link2} underline="none">
              {"BODY CLUB"}
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link href="#" className={classes.link3} underline="none">
              {"TIPS AND ADVICE"}
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link href="#" className={classes.link2} underline="none">
              {"ABOUT US"}
            </Link>
          </ListItem>
        </List>
      </Toolbar>
      <Toolbar className={classes.navbarContainer3}>
        <Box className={classes.dotted}>
          <Typography className={classes.text}>
            Free shower gel when you spend Rs.1000* code: 21082 | Free delivery
            over Rs. 2000* | Join our club to receive exclusive rewards
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
