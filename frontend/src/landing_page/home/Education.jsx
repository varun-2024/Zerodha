import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
function Education() {
  return (
    <div className="container varsity">
      <div className="row">
        <div className="col-6">
          <img src="media/images/education.svg" style={{ width: "70%" }} />
        </div>
        <div className="col-6">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Varsity <ArrowRightAltIcon />
          </a>
          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            TradingQ&A <ArrowRightAltIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
