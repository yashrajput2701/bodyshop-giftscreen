import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Contactpage from "./components/Contactpage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Giftscreen from "./screens/Giftscreen/index";
// import { useSelector } from "react-redux";
// import { ReducerModel } from "./model";
import Corporateform from "./components/Corporateform";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Giftscreen />} />
      <Route path="/Corporateform" element={<Corporateform />} />
    </Routes>
    <Contactpage />
    <Footer />
  </Router>
);
export default App;
