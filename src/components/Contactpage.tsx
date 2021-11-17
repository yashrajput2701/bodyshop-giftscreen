import * as React from 'react';
import {
  Box,
  makeStyles,
  Typography,
  createStyles
} from "@material-ui/core";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const useStyles = makeStyles((theme) =>
    createStyles({
        mainContainer: {
            width: "100%",
            margin: "0 auto",
            backgroundColor: " #F9F6EE",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            [theme.breakpoints.down("sm")]:{
              flexDirection: "column"
            }
          },
          boxdesc: {
            textAlign: "center",
            margin: "20px"
          },
          heading: {
            fontSize: "24px",
            fontWeight: 700,
          },
          text: {
            fontSize: "15px",
            fontWeight: 500,
            width: "310px",
          },
          text2: {
            fontWeight: 600,
            fontSize: "15px",
          },
          logos: {
            display: "flex",
          },
          texts: {
            fontSize: "15px",
            fontWeight: 500,
            width: "340px",
          },
          circle: {
            backgroundColor: "#E7DCC1",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            margin: "10px"
        
          },
          text3: {
            fontWeight: 600,
            fontSize: "15px",
          },
          verticalLine: {
            width: "1px",
            height: "120px",
            backgroundColor: "#E7DCC1",
            marginTop: "25px",
            marginBottom: "25px",
          },
    })
);
export default function Contactpage() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event:any) => {
      setAge(event.target.value);
    };
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.boxdesc}>
        <Typography className={classes.heading}>NEED HELP</Typography>
        <Typography className={classes.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
        <Typography className={classes.text2}>
          Monday to Saturday: 9AM - 9PM
        </Typography>
      </Box>
      <Box component="div" className={classes.verticalLine} />
      <Box className={classes.boxdesc}>
        <Typography className={classes.heading}>FOLLOW US</Typography>
        <Typography className={classes.texts}>
          Be first to know new arrivals & exclusive offers.
        </Typography>
        <Box className={classes.logos}>
          <Box className={classes.circle}>
            <FacebookOutlinedIcon />
          </Box>
          <Box className={classes.circle}>
            <TwitterIcon />
          </Box>
          <Box className={classes.circle}>
          <InstagramIcon />
          </Box>
          <Box className={classes.circle}>
          <PinterestIcon />
          </Box>
          <Box className={classes.circle}>
          <YouTubeIcon />
          </Box>
          <Box className={classes.circle}>
          <YouTubeIcon />
          </Box>
        </Box>
      </Box>
      <Box component="div" className={classes.verticalLine} />
      <Box className={classes.boxdesc}>
        <Typography className={classes.heading}>NEED HELP</Typography>
        <Typography className={classes.text3}>
        Lorem Ipsum is simply dummy text of industry.
        </Typography>
        <Box sx={{ width:"200px",marginLeft: "70px"}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Country"
          onChange={handleChange}
        >
          <MenuItem value={10}>U.S.</MenuItem>
          <MenuItem value={20}>India</MenuItem>
          <MenuItem value={30}>Germany</MenuItem>
        </Select>
      </FormControl>
    </Box>
      </Box>
    </Box>
  );
}
