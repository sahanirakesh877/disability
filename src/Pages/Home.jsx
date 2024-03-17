import React from "react";
import Services from "./Services";
import About from "./About";
import Case from "../Components/Case";
import Team from "../Components/Team";
import Caraosel from "./../Components/Caraosel";
import Training from "./Training";

const Home = () => {
  return (
    <>
      <Caraosel />
      <Services />
      <About />
      <Training />
      <Case />
      <Team />
    </>
  );
};

export default Home;
