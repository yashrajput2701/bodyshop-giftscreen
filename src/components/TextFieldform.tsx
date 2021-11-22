import React from 'react';
import { ErrorMessage, useField } from 'formik';
// import { makeStyles, createStyles} from "@material-ui/core";
import 'bootstrap/dist/css/bootstrap.min.css';
// const useStyles = makeStyles((theme) =>
//   createStyles({
   
//   })
// );
export const TextFieldform = ({ label, ...props }:any) => {
  const [field, meta] = useField(props);
//   const classes = useStyles();
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}