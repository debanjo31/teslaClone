import React from "react";
import model from "../assets/SolarRoofMobile.webp";

const SolarRoof = () => {
  const styles = {
    backgroundImage: `url(${model})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "50% 40%",
  };
  return (
    <div
      className="solarRoof snap-start  w-screen h-screen flex justify-around flex-col items-center text-center gap-8 lg:gap-36"
      style={styles}
    >
      <div className="flex flex-col w-5/6 mx-auto">
        <h2 className="text-4xl font-san">Solar Roof</h2>
        <p className="text-ss -mt-1">Produce Clean Energy From your Roof</p>
      </div>
      <div className="flex flex-col ss:flex-row justify-center gap-4  w-5/6 mx-auto modelButton">
        <button
          className="text-white p-2 rounded-md ss:w-3/6"
          style={{ backgroundColor: "rgba(23, 26, 32, 0.8" }}
        >
          Order Now
        </button>
        <button
          className=" text-black p-2 rounded-md ss:w-3/6"
          style={{ backgroundColor: "rgba(244, 244, 244, 0.65" }}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default SolarRoof;
