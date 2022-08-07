import React from "react";
import footerLogo from "../images/logo (1).png";
import { FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row mt-5 py-3">
            <div className="col-lg-7">
              <div className="footer mt-5 mb-3">
                <img src={footerLogo} alt="" className="footerimg" />
              </div>
              {/* <span className="text-light fw-light">Thanks for your time!</span> */}
              <div className="footer-link">
                <ul className="footer-nav-items">
                  <li className="nav-item">
                    <a
                      href="https://metaweb3pad.io/index.html#about-us"
                      target="_blank"
                      rel="noreferrer"
                      className="text-light fw-light mx-2 navLink"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://metaweb3pad.io/index.html#nft"
                      target="_blank"
                      rel="noreferrer"
                      className="text-light fw-light mx-2 navLink"
                    >
                      NFT Collection
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://metaweb3pad.io/index.html#key-points"
                      target="_blank"
                      rel="noreferrer"
                      className="text-light fw-light mx-2 navLink"
                    >
                      Key Points
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://metaweb3pad.io/index.html#roadmap"
                      target="_blank"
                      rel="noreferrer"
                      className="text-light fw-light mx-2 navLink"
                    >
                      Roadmap
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://metaweb3pad.io/index.html#faq"
                      target="_blank"
                      rel="noreferrer"
                      className="text-light fw-light mx-2 navLink"
                    >
                      FAQ
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://github.com/cyberscope-io/audits/blob/main/metaweb3pad/audit.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="text-light fw-light mx-2 navLink"
                    >
                      Audit
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://github.com/cyberscope-io/kyc/blob/main/metaweb3pad/kyc.png"
                      target="_blank"
                      rel="noreferrer"
                      className="text-light fw-light mx-2 navLink"
                    >
                      KYC
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://github.com/kesaviwebsolutions/Safu-report/blob/main/MetaWeb3Pad%20SAFU%20REPORT.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="text-light fw-light mx-2 navLink"
                    >
                      SAFU
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="footer-social-links">
                <ul className="footer-social-items">
                  <li className="footer-social-item">
                    <a
                      className="social-link active text-light mx-4"
                      aria-current="page"
                      href="https://t.me/MetaWeb3Pad"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaDiscord size={40} />
                    </a>
                  </li>
                  <li className="footer-social-item">
                    <a
                      className="social-link active text-light mx-4"
                      aria-current="page"
                      href="https://t.me/MetaWeb3Pad"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaTelegramPlane size={40} />
                    </a>
                  </li>
                  <li className="footer-social-item">
                    <a
                      className="social-link active text-light mx-4"
                      aria-current="page"
                      href="https://twitter.com/MetaWeb3Pad"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaTwitter size={40} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copy-right">
            <p className="text-light pt-5 pb-3 text-center">
              2022 © metaweb3pad. All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
