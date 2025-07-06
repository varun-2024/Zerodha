import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
function Pricing() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-3 fs-2">Unbetable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" className="" style={{ textDecoration: "none" }}>
            See pricing <ArrowRightAltIcon />
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row text-center">
            <div className="col p-3 border">
              <h1 className="mb-3">£0</h1>
              <p>
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>
            <div className="col p-3 border">
              <h1 className="mb-3">£20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
