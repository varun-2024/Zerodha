import React from "react";
import DataSaverOnIcon from "@mui/icons-material/DataSaverOn";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          To create a ticket, select a relevant topic
        </h1>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
            <DataSaverOnIcon /> Zerodha Account Opening
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Online Account Opening
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Offline Account Opening
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Company, Partnership and HUF Account
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Opening
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            NRI Account Opening
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Charges at Zerodha
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Zerodha IDFC FIRST Bank 3-in-1 Account
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Getting Started
          </a>
          <br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
            <ManageAccountsIcon /> Your Zerodha Account
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Login Credentials
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Account Modification
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            DP ID and Bank Details
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Your profile
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Transfer and conversion of Shares
          </a>
          <br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
            <QueryStatsIcon /> Your Zerodha Account
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Margin/Leverage
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Kite Web and Mobile
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Trading FAQ's
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Corporate Actions
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Sentinal
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Kite API
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            PI and other Platforms
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Stock Reports
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            GTT
          </a>
          <br />
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
