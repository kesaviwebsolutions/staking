import React from "react";
import favicon from "../images/favicon.png";
import { BsArrowRight } from "react-icons/bs";
import Footer from "./Footer";

export default function MetaWeb3() {
  return (
    <div>
      <div className="container">
        <div className="card staking-card">
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
              <BsArrowRight size={50} style={{marginTop:"20px", fontWeight:"bold"}}/>
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
      <Footer />
    </div>
  );
}
