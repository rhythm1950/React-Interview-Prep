import React from "react";
import "./App.css";
import Header from "./components/Header";
import Categories from "./components/Categories";
import LiveSports from "./components/LiveSports";
import Live from "./components/Live";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header></Header>
      <Categories></Categories>
      <Live></Live>
      <LiveSports></LiveSports>
      <Footer></Footer>
    </>
  );
};

export default App;
