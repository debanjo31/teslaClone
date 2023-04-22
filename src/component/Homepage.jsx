import React from "react";
import ModelX from "./ModelX";
import ModelY from "./ModelY";
import ModelS from "./ModelS";
import Model3 from "./Model3";
import SolarPanel from "./SolarPanel";
import SolarRoof from "./SolarRoof";
import Accesories from "./Accesories";

const Homepage = () => {
  return (
    <div className="">
      <div className="snap-y snap-mandatory h-screen w-full overflow-scroll ">
        <ModelY />
        <Model3 />
        <ModelS />
        <ModelX />
        <SolarPanel />
        <SolarRoof />
        <Accesories />
      </div>
    </div>
  );
};

export default Homepage;
