import React from "react";
import "./App.css";
import Donation from "./components/Donation";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Plans from "./components/Plans";
import Statistics from "./components/Statistics";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Donation></Donation>
      <Plans></Plans>
      <Statistics></Statistics>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  );
};

export default App;
