import React from "react";
import Navlogo from "../images/logo (1).png";
import meta from "../images/meta.png";
import { FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa";

export default function Navbar() {
  return (
    <div>
      <section>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent pt-3">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                <img src={Navlogo} alt="" className="w-25" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
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
                      href="/"
                    >
                      <FaDiscord size={25} />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active text-light mx-2"
                      aria-current="page"
                      href="/"
                    >
                      <FaTelegramPlane size={25} />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active text-light mx-2"
                      aria-current="page"
                      href="/"
                    >
                      <FaTwitter size={25} />
                    </a>
                  </li>
                </ul>

                <button
                  type="button"
                  className="btn button"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Connect Wallet
                </button>

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
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5
                          className="modal-title ms-auto"
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
                        <div className="metaimg">
                          <img
                            src={meta}
                            alt=""
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
