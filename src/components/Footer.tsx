import {
  Box,
  makeStyles,
  List,
  ListItem,
  Typography,
  Button,
  TextField,
  createStyles,
} from "@material-ui/core";
import CopyrightIcon from "@material-ui/icons/Copyright";

const useStyles = makeStyles((theme) =>
  createStyles({
    mainContainer: {
      width: "100%",
      margin: "0 auto",
      backgroundColor: " #004236",
      height: "auto",
    },

    upperContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "space-around",
      [theme.breakpoints.down("md")]: {
        display: "grid",
      },
    },

    heading: {
      textTransform: "uppercase",
      fontWeight: "bold",
      color: "#D6CE4B",
      fontSize: "28px",
      fontFamily: "Druk,sans-serif !important",
      letterSpacing: "3px"
    },

    listItem: {
      color: "#fff",
      fontSize: "18px",
    },

    lowerContainer: {
      width: "100%",
      margin: "0 auto",
      textAlign: "center",
    },

    formContainer: {
      display: "flex",
      justifyContent: "center",
      width: "40%",
      margin: "0 auto",
    },

    inputField: {
      backgroundColor: "#fff",
      width: "70%",

      "& .MuiOutlinedInput-root:hover": {
        border: "none",
      },

      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },

      "& .MuiOutlinedInput-root.Mui-focused": {
        border: "none",
      },
    },

    sendBtn: {
      backgroundColor: "#D6CE4B",
      color: "#004236",
      padding: "0 2rem",
      fontWeight: "bold",
      letterSpacing: "1px",
      fontSize: "17px",
      borderRadius: "0",
      "&:hover": { backgroundColor: "#D6CE4B" },
    },

    copyrightContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    copyrightIcon: {
      color: "#fff",
      marginRight: "5px",
      marginTop: "30px",
    },

    copyrightText: {
      color: "#fff",
      textTransform: "uppercase",
      fontSize: "15px",
      marginTop: "30px",
      // marginBottom: "95px",
    },
    white: {
      color: "white",
      marginBottom: "15px",
    },
    footertext: {
      // textAlign: "center"
    }
  })
);

export default function Footer() {
  const classes = useStyles();

  const usefulInfo = [
    "Help & FAQs",
    "Where Is My Order?",
    "Delivery & Returns",
    "Terms & Conditions",
    "Privacy Notice",
    "Cookies",
    "Sitemap",
  ];

  const waysToShop = [
    "Store Finder",
    "The Body Shop At Home",
    "Our Loyalty Club",
    "Student Discount",
    "Gift Cards",
    "Affilates",
    "Refer a Friend",
  ];

  const aboutUs = [
    "Careers",
    "Modern Slavery Statement",
    "Sustainability Report",
    "Tax Strategy",
    "Media Enquiries",
    "Corporate Governance Statement",
    "Section 172 Statement",
  ];
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.upperContainer}>
        <Box className={classes.footertext}>
          <Typography className={classes.heading}>
            {"Useful Information"}
          </Typography>
          <List>
            {usefulInfo.map((text, index) => (
              <ListItem button key={index} className={classes.listItem}>
                {text}
              </ListItem>
            ))}
          </List>
        </Box>

        <Box className={classes.footertext}>
          <Typography className={classes.heading}>{"Ways to Shop"}</Typography>
          <List>
            {waysToShop.map((text, index) => (
              <ListItem button key={index} className={classes.listItem}>
                {text}
              </ListItem>
            ))}
          </List>
        </Box>

        <Box className={classes.footertext}>
          <Typography className={classes.heading}>{"About us"}</Typography>
          <List>
            {aboutUs.map((text, index) => (
              <ListItem button key={index} className={classes.listItem}>
                {text}
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>

      <Box className={classes.lowerContainer}>
        <Typography className={classes.heading}>
          {"Subscrie to our newsletter"}
        </Typography>
        <Typography className={classes.white}>
          {"Be the first to know about our new arrivals and exclusive offers"}
        </Typography>

        <form className={classes.formContainer}>
          <TextField
            type="email"
            variant="outlined"
            className={classes.inputField}
            placeholder={"Email Address"}
          />
          <Button type="submit" variant="contained" className={classes.sendBtn}>
            {"Send"}
          </Button>
        </form>
      </Box>

      <Box className={classes.copyrightContainer}>
        <CopyrightIcon className={classes.copyrightIcon} />
        <Typography className={classes.copyrightText}>
          {"2021 the body shop international limited"}
        </Typography>
      </Box>
    </Box>
  );
}
