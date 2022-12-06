import Card from "../../Components/Card";
import Jumbotron from "../../Components/Jumbotron";
import React, {Fragment} from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer"

function App() {
  return (
    <Fragment>
      {/* NAVBAR */}
      <NavBar />
      
    <div className="container mx-auto px-4 mt-36">
      <Card />
      <Card />
      <Card />
      <Card />      
    </div>
    </Fragment>
    
  );
}

export default App;
