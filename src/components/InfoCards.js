import React,{useEffect, useState} from "react";
import { totalStaked, ContractBalance } from "../Web3/SelectWallet";
import MetaWeb3 from "./MetaWeb3";



export default function InfoCards({account, user}) {
  const [total, setTotal] = useState(0);
  const [balance, setBalance] = useState(0)

  useEffect(()=>{
    setInterval(async()=>{
      const ts = await totalStaked()
      setTotal(ts) 
      const bal = await ContractBalance();
      setBalance(bal)
    },4000)
  },[])
  const cardDetails = [
    {
      title: "Total Value Locked",
      value: total,
    },
    // {
    //   title: "Contract Balance",
    //   value: balance,
    // },
    {
      title: "MetaWeb3Pad Price",
      value: "Not Launched Yet!",
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
  return (
    <div className="container">
      <div className="row justify-content-around">{cardDetails.map(renderDetails)}</div>
      <MetaWeb3 account={account} user={user}/>
    </div>
  );
}
