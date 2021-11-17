import React from "react";
import "./App.css";
import Contactpage from "./components/Contactpage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Giftscreen from "./screens/Giftscreen";

function App() {
  return (
    <div>
      <Navbar />
      <Giftscreen />
      <Contactpage />
      <Footer />
    </div>
  );
}

export default App;
