import React from "react";

function Awards() {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-6 p-5">
            <img src="/media/images/largestBroker.svg" />
          </div>
          <div className="col-6 p-5 mt-5">
            <h1 className="">Largest stock broker in India</h1>
            <p className="mb-5">
              2+ million Zerodha clients contribute to over 15% of all retail
              order volumes in India daily by trading and investing in:
            </p>
            <div className="row">
              <div className="col-6">
                <ul className="">
                  <li className="">Futures and Options</li>
                  <li className="">Comodity derivatives</li>
                  <li className="">Currency derivatives</li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="">
                  <li className="">Stocks & IPOs</li>
                  <li className="">Direct mutual funds</li>
                  <li className="">Bonds and Govt. Securities</li>
                </ul>
              </div>
            </div>
            <img src="/media/images/pressLogos.png" style={{ width: "90%" }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Awards;
