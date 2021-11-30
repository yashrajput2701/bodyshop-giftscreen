// import React from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Button,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText
// } from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";
// import vector1 from "../Assets/Vector (1).png";
// import vector2 from "../Assets/Vector (21).png";
// import vector3 from "../Assets/Vector (3).png";
// import vector4 from "../Assets/Vector (4).png";
// import { Link } from "react-router-dom";
// class NavBarmob extends React.Component {
//   constructor(props:any) {
//     super(props);

//     this.state = {
//       drawer: false
//     };
//   }
//   toggleDrawer = () => {
//     this.setState({
//       drawer: !this.state.drawer
//     });
//   };
//   render() {
//     return (
//       <div>
//         <AppBar position="static">
//           <Toolbar>
//             <IconButton color="inherit" onClick={this.toggleDrawer}>
//               <MenuIcon />
//             </IconButton>
//             <Typography style={{ marginLeft: "auto" }}>
//             <img  src={vector1} alt="img" />
//           <img  src={vector2} alt="img" />
//           <img  src={vector3} alt="img" />
//           <img  src={vector4} alt="img" />
//             </Typography>
//           </Toolbar>
//         </AppBar>
//         <Drawer
//           open={this.state.drawer}
//           onClose={this.toggleDrawer}
//           style={{ width: 300 }}
//         >
//           <Typography align="center">
//             <List>
//               <ListItem>
//                 <Link to="/">
//                 <ListItemText>
//                     <Button color="secondary" onClick={this.toggleDrawer}>
//                        TRENDING
//                     </Button>
//                   </ListItemText>
//                 <ListItemText>
//                     <Button color="secondary" onClick={this.toggleDrawer}>
//                        FACE
//                     </Button>
//                   </ListItemText>
//                   <ListItemText>
//                     <Button color="secondary" onClick={this.toggleDrawer}>
//                        BODY
//                     </Button>
//                   </ListItemText>
//                   <ListItemText>
//                     <Button color="secondary" onClick={this.toggleDrawer}>
//                        MAKEUP
//                     </Button>
//                   </ListItemText>
//                   <ListItemText>
//                     <Button color="secondary" onClick={this.toggleDrawer}>
//                        HAIR
//                     </Button>
//                   </ListItemText>
//                   <ListItemText>
//                     <Button color="secondary" onClick={this.toggleDrawer}>
//                        FRAGRANCE
//                     </Button>
//                   </ListItemText>
//                   <ListItemText>
//                     <Button color="secondary" onClick={this.toggleDrawer}>
//                        GIFTS
//                     </Button>
//                   </ListItemText>
//                   <ListItemText>
//                     <Button color="secondary" onClick={this.toggleDrawer}>
//                        RANGE
//                     </Button>
//                   </ListItemText>
//                   <ListItemText>
//                     <Button color="secondary" onClick={this.toggleDrawer}>
//                        OFFERS
//                     </Button>
//                   </ListItemText>
//                   <ListItemText>
//                     <Button color="secondary" onClick={this.toggleDrawer}>
//                        BODY CLUB
//                     </Button>
//                   </ListItemText>
//                   <ListItemText>
//                     <Button color="secondary" onClick={this.toggleDrawer}>
//                        TIPS AND ADVICE
//                     </Button>
//                   </ListItemText>
//                   <ListItemText>
//                     <Button color="secondary" onClick={this.toggleDrawer}>
//                        ABOUT US
//                     </Button>
//                   </ListItemText>
//                 </Link>
//               </ListItem>
//             </List>
//           </Typography>
//         </Drawer>
//       </div>
//     );
//   }
// }
// export default NavBarmob;
import React from "react";
const Sidebar = () => {};
export default Sidebar;