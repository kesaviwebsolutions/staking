import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { getUserAddress, MetaMasklogin, WalletConnect, GetChainId } from "./Web3/SelectWallet";

function App() {
  const [account, setAccount] = useState('')
  const [user, setUser] = useState()

  useEffect(()=>{
    const init = async() =>{
      const id = await GetChainId();
      if(id != 5){
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
  }

  const WalletConnectlogin = async() => {
    await WalletConnect();
    const user = await getUserAddress();
    window.user = user
    setUser(user)
  }



  return (
    <div className="App">
      <Router>
        <Navbar user={user} WalletConnectlogin={WalletConnectlogin} Metamask={Metamask}/>
        <Main account={account} user={user}/>
      </Router>
    </div>
  );
}

export default App;
