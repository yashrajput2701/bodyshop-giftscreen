// import React from 'react';
// import { ErrorMessage, useField } from 'formik';
// import { makeStyles, createStyles} from "@material-ui/core";
// const useStyles = makeStyles((theme) =>
//   createStyles({
//     inputfield: {
//       display: "flex",
//       border: "1px #E2E2E2 solid",
//       height: "54px",
//       width: "445px",
//       marginTop: "1rem",
//       borderRadius: "5px", 
//     },
//     vbtn: {
//       border: "none",
//       background: "transparent",
//       color: "#044236",
//       fontSize: "14px",
//       fontWeight: 600,
//       cursor: "pointer",
//       letterSpacing: "1px"
//     }
   
//   })
// );
// export const TextField = ({ label, ...props }:any) => {
//   const [field, meta] = useField(props);
//   const classes = useStyles();
//   const [value,setValue] = React.useState("");
//   return (
//     <div className="mb-2">
//       <div className={classes.inputfield}>
//       <label htmlFor={field.name}>{label}</label>
//       <input
//         className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
//         {...field} {...props}
//         autoComplete="off"
//         value={value}
//         onChange={(e)=> {props.setEnable(false)
//         setValue(e.target.value)}}
//       />
//       <button className={classes.vbtn} onClick={()=>{props.setShow(true)
//       // console.log(props.isShow);
//       }}>VALIDATE</button>
//       </div>
//       <ErrorMessage component="div" name={field.name} className="error" />
//     </div>
//   )
// }

import React from 'react';
import { ErrorMessage, useField } from 'formik';
import { makeStyles, createStyles} from "@material-ui/core";
const useStyles = makeStyles((theme) =>
  createStyles({
    inputfield: {
      display: "flex",
      border: "1px #E2E2E2 solid",
      height: "54px",
      width: "445px",
      marginTop: "1rem",
      borderRadius: "5px", 
    },
    vbtn: {
      border: "none",
      background: "transparent",
      color: "#044236",
      fontSize: "14px",
      fontWeight: 600,
      cursor: "pointer",
      letterSpacing: "1px"
    }
   
  })
);
export const TextField = ({ label, ...props }:any) => {
  const [field, meta] = useField(props);
  const classes = useStyles();
  // const [value,setValue] = React.useState("");
  return (
    <div className="mb-2">
      <div className={classes.inputfield}>
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off"
        // value={value}
        onChange={()=> {props.setEnable(false)
        }}
      />
      <button className={classes.vbtn} onClick={()=>{props.setShow(true)
      // console.log(props.isShow);
      }}>VALIDATE</button>
      </div>
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}