import React from "react";
import "./App.css";
import Header from "./components/Header";
import Learnings from "./components/Learnings";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import NextBatch from "./components/NextBatch";

const App = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Slider></Slider>
        <NextBatch></NextBatch>
        <Learnings></Learnings>
        <Footer></Footer>
      </main>
    </>
  );
};

export default App;
