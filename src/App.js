import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { getUserAddress, MetaMasklogin, WalletConnect, GetChainId, DissconnectWallet } from "./Web3/SelectWallet";

function App() {
  const [account, setAccount] = useState('')
  const [user, setUser] = useState()

  useEffect(()=>{
    const init = async() =>{
      const wallet = window.localStorage.getItem("wallet");
      if(wallet){
        await Metamask();
      }
      const id = await GetChainId();
      console.log(id)
      if(Number(id) != 56){
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x5' }], // chainId must be in hexadecimal numbers
        });
      }
    }
    init();
  },[])


  try {
    window.ethereum.on('accountsChanged', function (accounts) {
      setAccount(accounts[0])
      setUser(accounts[0])
    })
  } catch (error) {
    
  }

  try {
    window.ethereum.on('chainChanged', function (accounts) {
      window.location.reload();
    })
  } catch (error) {
    
  }

  const Metamask = async() => {
    await MetaMasklogin();
    const user = await getUserAddress();
    window.user = user
    setUser(user)
    window.localStorage.setItem("wallet","metamask");
  }

  const WalletConnectlogin = async() => {
    await WalletConnect();
    const user = await getUserAddress();
    window.user = user
    setUser(user)
  }

  const Dissconnect = async()=>{
    if(!user){
      return true;
    }
    await DissconnectWallet();
    setUser(undefined)
    window.user = undefined
    window.localStorage.removeItem("wallet")
  }



  return (
    <div className="App">
      <Router>
        <Navbar user={user} WalletConnectlogin={WalletConnectlogin} Metamask={Metamask} Dissconnect={Dissconnect}/>
        <Main account={account} user={user}/>
      </Router>
    </div>
  );
}

export default App;
