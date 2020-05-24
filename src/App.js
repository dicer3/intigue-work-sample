import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import Achivements from "./components/Achivements";
import Benefits from "./components/Benefits";
import Features from "./components/Features";
import Performance from "./components/Performance";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import "./App.scss";

const App = () => (
  <Fragment>
    <div className='App'>
      <div className='container'>
        <Navbar />
        <Heading />
        <Achivements />
        <Benefits />
        <Features />
        <Performance />
        <Cards />
      </div>
      <Footer />
    </div>
  </Fragment>
);

export default App;
