import React,{useState, useEffect} from "react";
import favicon from "../images/favicon.png";
import { BsArrowRight } from "react-icons/bs";
import Footer from "./Footer";
import { tokenBalance } from "../Web3/SelectWallet";

export default function MetaWeb3() {

  const [BalanceOftoken, setBalanceOftoken] = useState(0)

  // useEffect(()=>{
  //   const init = async()=>{
  //     const balance = await tokenBalance();
  //     setBalanceOftoken(balance)
  //     console.log(balance)
  //   }

  //   // setInterval(async()=>{
  //      await init();
  //   //   console.log(window.user)
  //   // },5000);
    
  // },[])

  const init = async()=>{
    const balance = await tokenBalance();
    setBalanceOftoken(balance)
  }

  return (
    <div>
      <div className="container">
        <div className="card staking-card">
          <div className="card-body">
<<<<<<< Updated upstream
            <h5 className="card-title text-center fs-4 fw-bolder">MetaWeb3 Stacking</h5>
=======
            <h5 className="card-title">MetaWeb3 Staking</h5>
>>>>>>> Stashed changes
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
            <p className="card-text mt-2">Your Balance: {BalanceOftoken}</p>
            <p className="card-text mt-2">Staked Amount: NaN</p>
            <hr />
            <div className="content">
              <p>Status</p>
              <p>Collecting</p>
            </div>
            <div className="content mt-3">
              <p>Withdrawl Fee</p>
              <p>5%</p>
            </div>
            <div className="content mt-3">
              <p>Withdrawl Lockup</p>
              <p>12 Hour(s)</p>
            </div>
            <form className="d-flex mt-3">
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
