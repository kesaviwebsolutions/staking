import React from "react";
import InfoCards from "./InfoCards";

export default function Main({account ,user}) {
  return (
    <div>
      <section>
        <div className="container">
          <div className="main-area">
            <h1 className="heading">MetaWeb3Pad</h1>
            <span className="text-light">
              Stake MetaWeb3Pad to earn
            </span>
          </div>
        </div>
        <InfoCards account={account} user={user}/>
      </section>
    </div>
  );
}
