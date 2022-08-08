import React, { useState, useEffect } from "react";
import favicon from "../images/favicon.png";
import { BsArrowRight } from "react-icons/bs";
import Footer from "./Footer";
import toast, { Toaster } from 'react-hot-toast';
import { tokenBalance, custonStakAmount,getOwner,CustomDistribution,NormalDistribution, stakAmount, tokenAdd, defaultAPYs, customAPYs, Stake, unStake,customUnstake,Stakecustom,CustomWhitelisting, Allownce, ApproveStaking, pendingReward, pendingCustomReward, getUserAddress } from "../Web3/SelectWallet";


const notify = (msg) => toast.success(msg)

export default function MetaWeb3({account,user}) {
  const [BalanceOftoken, setBalanceOftoken] = useState(0);
  const [staking, setStaking] = useState(0)
  const [custonStaking, setCustonStaking] = useState(0)
  const [token, setToken] = useState()
  const [defaultapy, setDefault] = useState(0)
  const [amount, setAmount] = useState(0)
  const [isApprove, setIsApprove] = useState(false)
  const [nomalReward, setNormalReward] = useState(0)
  const [customReward, setCustomReward] = useState(0)
  const [csAPY, setCsAPY] = useState(0)
  const [whitelist, setWhiteListing] = useState(false)
  const [owner, setOwner] = useState('')
 

  useEffect(()=>{
    const init = async()=>{
      const balance = await tokenBalance();
      setBalanceOftoken(balance)
      const st = await stakAmount();
      setStaking(st)
      const Cust = await custonStakAmount();
      setCustonStaking(Cust)
      const tk = await tokenAdd()
      setToken(tk)
      const dfapy = await defaultAPYs();
      setDefault(dfapy)
      const allow = await Allownce();
      if(Number(allow)>0){
        setIsApprove(true)
      }
      const reward = await pendingReward();
      setNormalReward(reward)
      const customreward = await pendingCustomReward();
      setCustomReward(customreward)
      const customapy = await customAPYs()
      setCsAPY(customapy)
      const wtl = await CustomWhitelisting()
      setWhiteListing(wtl)
      const own = await getOwner()
      setOwner(own)
      
    }
   
    init();

    setInterval(async()=>{
      const reward = await pendingReward();
      setNormalReward(reward)
      const balance = await tokenBalance();
      setBalanceOftoken(balance)
      const customreward = await pendingCustomReward();
      setCustomReward(customreward)
    },4000)
  },[account, user])

  const init = async () => {
    const balance = await tokenBalance();
    setBalanceOftoken(balance);
    const st = await stakAmount();
    setStaking(st)
    const Cust = await custonStakAmount();
    setCustonStaking(Cust)
  };

  const slice = (address)=>{
    const first = address.slice(0,5)
    const second = address.slice(37, 42)
    return first + "...." + second
  }
  const stakeall = ()=>{
    setAmount(BalanceOftoken)
  }

  const StakeToken = async()=>{
    const allow = await Allownce();
    if(Number(allow) > 0 ){
      const data = await Stake(amount);
      if(data.status){
        notify("Success")
        await init()
      }
    }
    else{
      await ApproveStaking();
      const data = await Stake(amount);
      if(data.status){
        setIsApprove(true)
        notify("Success")
        await init();
      }
    }
  }

  const CustomStakeToken = async()=>{
    if(!whitelist){
      return true
    }
    const allow = await Allownce();
    if(Number(allow) > 0 ){
      const data = await Stakecustom(amount);
      if(data.status){
        notify("Success")
        await init()
      }
    }
    else{
      await ApproveStaking();
      const data = await Stakecustom(amount);
      if(data.status){
        setIsApprove(true)
        notify("Success")
        await init();
      }
    }
  }

  const RemoveStake = async()=>{
    const data = unStake();
    if(data.status){
      notify("Success")
    }
  }

  const CustomRemoveStake = async()=>{
    const data = customUnstake();
    if(data.status){
      notify("Success")
    }
  }

  return (
    <div>
      <div className="container">
      <div className="d-flex" style={{flexWrap:'wrap'}}>
        <div className="card staking-card">
          <div className="card-body">
            <h5 className="card-title text-center fs-4 fw-bolder">
              Normal Staking
            </h5>

            {/* <h5 className="card-title">MetaWeb3 Staking</h5> */}

            <div className="image-area">
              <div>
                <span
                  style={{
                    display: "grid",
                    marginTop: "10px",
                    
                  }}
                >
                  MetaWeb3
                </span>
                <img src={favicon} alt="" className="ia" />
              </div>
              <BsArrowRight
                size={50}
                style={{ marginTop: "20px", fontWeight: "bold" }}
              />
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
              Token Address : {token ? slice(token) : ''}
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  marginTop: "10px",
                  color: "#ad00ff",
                }}
              >
                {}
              </a>
            </p>
            <p className="card-text mt-2">Your Balance: {BalanceOftoken}</p>
            <p className="card-text mt-2">Staked Amount: {staking}</p>
            <hr />
            <div className="content">
              <p>APY </p>
              <p>{(defaultapy/1000*(365)).toFixed(0)}%</p>
            </div>
            <div className="content mt-3">
              <p>Staking Fee</p>
              <p>5%</p>
            </div>
            {/* <div className="content mt-3">
              <p>Withdrawl Lockup</p>
              <p>12 Hour(s)</p>
            </div> */}
            <form className="d-flex mt-3">
              <input
                className="form-control me-2"
                type="number"
                placeholder="Stake Amount"
                aria-label="Number"
                value={amount}
                onChange={(e)=>{setAmount(e.target.value)}}
              />
              <button className="btn max-button" onClick={()=>stakeall()} type="button">
                Max
              </button>
            </form>
            <button className="btn approve-button" onClick={()=>StakeToken()} type="button">
              {isApprove ? "Stake" : "Approve Contract"}
            </button>

            {staking > 0 ? <button className="btn approve-button" onClick={()=>RemoveStake()} type="button">
              {"Unstake"}
            </button>: ''}
            {user == owner ? <button className="btn approve-button" onClick={()=>NormalDistribution()} type="button">
              {"Distribute"}
            </button>: ''}
            <div className="text-center">
              <p>{nomalReward}</p>
            </div>
          </div>
        </div>
         
         
         {/* ..................................Custom Staking................................  */}



        <div className="card staking-card">
          <div className="card-body">
            <h5 className="card-title text-center fs-4 fw-bolder">
             Boosted Staking
            </h5>

            {/* <h5 className="card-title">MetaWeb3 Staking</h5> */}

            <div className="image-area">
              <div>
                <span
                  style={{
                    display: "grid",
                    marginTop: "10px",
                    
                  }}
                >
                  MetaWeb3
                </span>
                <img src={favicon} alt="" className="ia" />
              </div>
              <BsArrowRight
                size={50}
                style={{ marginTop: "20px", fontWeight: "bold" }}
              />
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
              Token Address : {token ? slice(token) : ''}
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  marginTop: "10px",
                  color: "#ad00ff",
                }}
              >
                {}
              </a>
            </p>
            <p className="card-text mt-2">Your Balance: {BalanceOftoken}</p>
            <p className="card-text mt-2">Staked Amount: {custonStaking}</p>
            <hr />
            <div className="content">
              <p>APY </p>
              <p>{(csAPY/1000*(365)).toFixed(0)}%</p>
            </div>
            <div className="content mt-3">
              <p>Staking Fee</p>
              <p>5%</p>
            </div>
            {/* <div className="content mt-3">
              <p>Withdrawl Lockup</p>
              <p>12 Hour(s)</p>
            </div> */}
            <form className="d-flex mt-3">
              <input
                className="form-control me-2"
                type="number"
                placeholder="Stake Amount"
                aria-label="Number"
                value={amount}
                onChange={(e)=>{setAmount(e.target.value)}}
              />
              <button className="btn max-button" onClick={()=>stakeall()} type="button">
                Max
              </button>
            </form>
            <button className="btn approve-button" onClick={()=>CustomStakeToken()} type="button">
              {isApprove ? (whitelist ? "Stake" : 'Not WhiteListed') : "Approve Contract"}
            </button>

            {staking > 0 ? <button className="btn approve-button" onClick={()=>CustomRemoveStake()} type="button">
              {"Unstake"}
            </button>: ''}
            {user == owner ? <button className="btn approve-button" onClick={()=>CustomDistribution()} type="button">
              {"Distribute"}
            </button>: ''}
            <div className="text-center">
              <p>{customReward}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
      <Toaster/>
    </div>
  );
}
