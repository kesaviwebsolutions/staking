import React from "react";
import MetaWeb3 from "./MetaWeb3";

const cardDetails = [
  {
    title: "Total Value Locked",
    value: "0000",
  },
  {
    title: "Total Rewards",
    value: "0000",
  },
  {
    title: "MetaWeb3Pad Price",
    value: "0000",
  },
];

const renderDetails = (cardDetails, index) => {
  return (
    <div className="col-lg-4" key={index}>
      <div
        className="card"
        style={{
          width: "18rem",
          margin: "30px auto",
          backgroundColor: "#19042b",
          display: "block",
          color: "#fff",
          border: "1px solid #F18657",
        }}
      >
        <div className="card-body">
          <h5 className="card-title"> {cardDetails.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{cardDetails.value}</h6>
        </div>
      </div>
    </div>
  );
};

export default function InfoCards() {
  return (
    <div className="container">
      <div className="row">{cardDetails.map(renderDetails)}</div>
      <MetaWeb3 />
    </div>
  );
}
