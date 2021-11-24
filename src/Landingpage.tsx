import React from "react";
import "./App.css";
import Contactpage from "./components/Contactpage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Giftscreen from "./screens/Giftscreen/index";
import { useSelector } from "react-redux";
import { ReducerModel } from "./model";
// import Corporateform from "./components/Corporateform";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function Landingpage() {
  const { formOpen } = useSelector(
    (state: ReducerModel) => state.formOpenReducer
  );
  console.log(formOpen);
  return (
    <div>
      {/* <Navbar /> */}
      <Giftscreen />
      {/* <Contactpage />
      <Footer /> */}
    </div>
  );
}

export default Landingpage;
