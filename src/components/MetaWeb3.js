import React from "react";
import favicon from "../images/favicon.png";

export default function MetaWeb3() {
  return (
    <div className="container">
      <div
        className="card"
        style={{
          width: "25rem",
          display: "block",
          margin: "30px auto 20px",
          padding: "10px 5px",
          backgroundColor: "#19042b",
          border: "1px solid #F18657",
          color: "#fff",
        }}
      >
        <div className="card-body">
          <h5 className="card-title">MetaWeb3 Stacking</h5>
          <div className="image-area">
            <div>
              <span
                style={{
                  display: "grid",
                  marginTop: "10px",
                  marginLeft: "-10px",
                }}
              >
                MetaWeb3
              </span>
              <img src={favicon} alt="" className="ia" />
            </div>
            <div>
              <span
                style={{
                  display: "grid",
                  marginTop: "10px",
                  marginLeft: "-20px",
                }}
              >
                MetaWeb3
              </span>
              <img src={favicon} alt="" className="ia" />
            </div>
          </div>
          <p className="card-text">
            Token Address :{" "}
            <a
              href="/"
              style={{
                textDecoration: "none",
                marginTop: "10px",
                color: "#ad00ff",
              }}
            >
              000..0000
            </a>
          </p>
          <p className="card-text mt-2">Your Balance: NaN</p>
          <p className="card-text mt-2">Staked Amount: NaN</p>
          <hr />
          <div className="content">
            <p>Status</p>
            <p>Collecting</p>
          </div>
          <div className="content">
            <p>Withdrawl Fee</p>
            <p>5%</p>
          </div>
          <div className="content">
            <p>Withdrawl Lockup</p>
            <p>12 Hour(s)</p>
          </div>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="number"
              placeholder="Stake Amount"
              aria-label="Number"
            />
            <button className="btn max-button" type="submit">
              Max
            </button>
          </form>
          <button className="btn approve-button" type="submit">
            Approve Contract
          </button>
          <div className="text-center">
            <p>0.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
