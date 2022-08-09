import React,{useState, useEffect} from "react";
import Navlogo from "../images/logo (1).png";
import meta from "../images/meta.png";
import connect from "../images/connect.svg";
import { FaAddressCard, FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { WalletConnect, MetaMasklogin, getUserAddress, claimToken} from './../Web3/SelectWallet'

export default function Navbar({user,WalletConnectlogin,Metamask,Dissconnect}) {

  const slice = (address)=>{
    const first = address.slice(0,5)
    const second = address.slice(37, 42)
    return first + "...." + second
  }

  return (
    <div>
      <section>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent pt-3">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                <img src={Navlogo} alt="" className="nav-logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{
                  background:
                    "linear-gradient(89.69deg, #ffa133 0.27%, #ad00ff 98.91%)",
                }}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav nav-social-list ms-auto">
                  <li className="nav-item">
                    <a
                      className="nav-link active text-light"
                      aria-current="page"
                      href="https://metaweb3pad.io/index.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Back to main website
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active text-light mx-2"
                      aria-current="page"
                      href="https://t.me/MetaWeb3Pad"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaDiscord size={25} />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active text-light mx-2"
                      aria-current="page"
                      href="https://t.me/MetaWeb3Pad"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaTelegramPlane size={25} />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active text-light mx-2"
                      aria-current="page"
                      href="https://twitter.com/MetaWeb3Pad"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaTwitter size={25} />
                    </a>
                  </li>
                 {!user ? <button
                    type="button"
                    className="btn button fw-bold"
                    data-bs-toggle={"modal"}
                    data-bs-target="#staticBackdrop"
                    
                  >
                    {"Connect Wallet"}
                  </button>
                  :
                  <div className="dropdown">
                    <button
                      className="btn button fw-bold dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {slice(user)}
                    </button>
                    <ul className="dropdown-menu" onClick={()=>Dissconnect()}>
                      <li>Disconnect</li>
                    </ul>
                  </div>}

                  <button
                    type="button"
                    className="btn button fw-bold"
                    
                    data-bs-target="#staticBackdrop"
                    onClick={()=>claimToken()}
                  >
                   Claim Test Token
                  </button>
                </ul>

                <div
                  className="modal fade"
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div
                      className="modal-content"
                      style={{
                        background:
                          "linear-gradient(89.69deg, #ffa133 0.27%, #ad00ff 98.91%)",
                      }}
                    >
                      <div className="modal-header">
                        <h5
                          className="modal-title ms-auto text-light fs-3 fw-bold"
                          id="staticBackdropLabel"
                        >
                          Please connect your wallet
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="metaimg d-flex mt-3 mb-3">
                          <img
                            src={meta}
                            alt=""
                            onClick={()=>Metamask()}
                            className="w-25 d-block m-auto"
                            style={{ cursor: "pointer" }}
                          />
                          <img
                            src={connect}
                            alt=""
                            onClick={()=>WalletConnectlogin()}
                            className="w-25 d-block m-auto"
                            style={{ cursor: "pointer" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}
