import Web3 from "web3/dist/web3.min.js"
import WalletConnectProvider from "@walletconnect/web3-provider/dist/umd/index.min.js"
import { token } from "./ABI";

const sAddress = "0xdd6a2d6B0dc69663C98D970859AeA9E6bE2E3A9e"
let  web3 = new Web3(window.ethereum);
var provider = new WalletConnectProvider({
  rpc: {
    56: "https://bsc-dataseed1.ninicoin.io",
    97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    // ...
  },
  bridge: "https://bridge.walletconnect.org",
});

export const WalletConnect = async () => {
    try {
      await provider.disconnect();
      const data = await provider.enable();
      web3 = new Web3(provider);
    } catch (error) {
      console.log(error);
    }
  };

export const MetaMasklogin = async () => {
    // await provider.disconnect();
    const data = await window.ethereum.enable();
    web3 = new Web3(window.ethereum);
    return data[0];
};

export const getUserAddress = async () => {
    try {
      const address = await web3.eth.getAccounts();
      return address[0];
    } catch (error) {
      console.log(error);
    }
};

export const getContract = async (abi) => {
    try {
      const Contract = new web3.eth.Contract(abi,sAddress);
      return Contract;
    } catch (error) {
      console.log(error);
    }
};

export const towie = async (amount) => {
    try {
      const number = await web3.utils.toWei(amount.toString(), "ether");
      return number;
    } catch (error) {
      console.log(error);
    }
  };
  
export const GetChainId = async () => {
    // const web3 = getWeb();
    const id = await web3.eth.getChainId();
    return id;
  };

export const ApproveStaking = async()=>{
  const contract = await getContract(token,"0xC801a04cf093Da9b6670feaCECCAC7235A3Ec8B9")
  const data = await contract.methods.approve(sAddress, 115792089237316195423570985008687907853269984665640564039457584007913129639935n).send({from: await getUserAddress()})
  return data;
}

export const Allownce = async()=>{
  const contract = await getContract(token,"0xC801a04cf093Da9b6670feaCECCAC7235A3Ec8B9");
  const data = await contract.methods.allowance(await getUserAddress(), sAddress).call();
  return data;
}

export const tokenBalance = async() => {
  const contract = await getContract(token,"0xC801a04cf093Da9b6670feaCECCAC7235A3Ec8B9")
  const data = await contract.methods.balanceOf(await getUserAddress()).call();
  console.log("Balance",data);
  return data/10**18;
}
