import React from "react";
import "./App.css";
import Contactpage from "./components/Contactpage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Giftscreen from "./screens/Giftscreen/index";
import { useSelector } from "react-redux";
import { ReducerModel } from "./model";
import Corporateform from "./components/Corporateform";
function App() {
  const { formOpen } = useSelector(
    (state: ReducerModel) => state.formOpenReducer
  );
  console.log(formOpen);
  return (
    <div>
      <Navbar />
      {formOpen ? <Corporateform /> : <Giftscreen />}
      <Contactpage />
      <Footer />
    </div>
  );
}

export default App;
