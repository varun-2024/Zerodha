import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { FaUserCircle } from "react-icons/fa";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row mb-5 text-center">
        <img
          src="/media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="mt-5">Invest in Everything</h1>
        <p className="">
          Online Platform to Invest instocks, derivatives, mutual funds and more
        </p>
        <button
          className="p-2 btn btn-primary fs-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
