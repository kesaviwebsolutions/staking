import Web3 from "web3/dist/web3.min.js"
import WalletConnectProvider from "@walletconnect/web3-provider/dist/umd/index.min.js"
import { token, ABI } from "./ABI";

const sAddress = "0x84C2fDd62c4413D2c3B4ad2A07F998bE87f1125d"
const tokenAddress = "0xC801a04cf093Da9b6670feaCECCAC7235A3Ec8B9"

let  web3;
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
  const contract = new web3.eth.Contract(token,tokenAddress);
  const data = await contract.methods.approve(sAddress, 115792089237316195423570985008687907853269984665640564039457584007913129639935n).send({from: await getUserAddress()})
  return data;
}

export const Allownce = async()=>{
  const contract = new web3.eth.Contract(token,tokenAddress);
  const data = await contract.methods.allowance(await getUserAddress(), sAddress).call();
  return data;
}

export const tokenBalance = async() => {
  const contract = new web3.eth.Contract(token,tokenAddress);
  const data = await contract.methods.balanceOf(await getUserAddress()).call();
  return data/10**18;
}

export const stakAmount = async() => {
  const contract = new web3.eth.Contract(ABI,sAddress);
  const data = await contract.methods.stakingBalance(await getUserAddress()).call();
  return data/10**18;
}

export const custonStakAmount = async() => {
  const contract = new web3.eth.Contract(ABI,sAddress);
  const data = await contract.methods.customStakingBalance(await getUserAddress()).call();
  return data/10**18;
}

export const tokenAdd = async() => {
  const contract = new web3.eth.Contract(ABI,sAddress);
  const data = await contract.methods.token().call();
  return data;
}

export const defaultAPYs = async() => {
  const contract = new web3.eth.Contract(ABI,sAddress);
  const data = await contract.methods.defaultAPY().call();
  return data;
}

export const customAPYs = async() => {
  const contract = new web3.eth.Contract(ABI,sAddress);
  const data = await contract.methods.customAPY().call();
  return data;
}

export const Stake = async(amount) => {
  const a = await towie(amount)
  const contract = new web3.eth.Contract(ABI,sAddress);
  const data = await contract.methods.stakeTokens(a).send({from: await getUserAddress()})
  return data;
}

export const unStake = async() => {
  const contract = new web3.eth.Contract(ABI,sAddress);
  const data = await contract.methods.unstakeTokens().send({from: await getUserAddress()})
  return data;
}

export const Stakecustom = async(amount) => {
  const a = await towie(amount)
  const contract = new web3.eth.Contract(ABI,sAddress);
  const data = await contract.methods.customStaking(a).send({from: await getUserAddress()})
  return data;
}

export const customUnstake = async() => {
  const contract = new web3.eth.Contract(ABI,sAddress);
  const data = await contract.methods.unstakeTokens().send({from: await getUserAddress()})
  return data;
}

export const pendingReward = async() => {
  const contract = new web3.eth.Contract(ABI,sAddress);
  const data = await contract.methods.pendingNormalRewards(await getUserAddress()).call();
  return data/10**18;
}

export const pendingCustomReward = async() => {
  const contract = new web3.eth.Contract(ABI,sAddress);
  const data = await contract.methods.pendingCustomRewards(await getUserAddress()).call();
  return data/10**18;
}

export const totalStaked = async() => {
  const contract = new web3.eth.Contract(ABI,sAddress);
  const data = await contract.methods.totalStaked().call();
  return data/10**18;
}

export const claimToken = async()=> {
  const contract = new web3.eth.Contract(ABI, sAddress);
  const data = await contract.methods.claimTokenForTest().send({from:await getUserAddress()});
  return data;
}

export const ContractBalance = async() => {
  const contract = new web3.eth.Contract(token,tokenAddress);
  const data = await contract.methods.balanceOf(sAddress).call();
  return data/10**18;
}

export const CustomWhitelisting = async() => {
  const contract = new web3.eth.Contract(ABI, sAddress);
  const data = await contract.methods.whitelistedForCustomAPY(await getUserAddress()).call();
  return data;
}

export const getOwner = async() => {
  const contract = new web3.eth.Contract(ABI, sAddress);
  const data = await contract.methods.owner().call();
  return data;
}

export const CustomDistribution = async() => {
  const contract = new web3.eth.Contract(ABI, sAddress);
  const data = await contract.methods._distributeCustomRewards().send({from:await getUserAddress()});
  return data;
}

export const NormalDistribution = async() => {
  const contract = new web3.eth.Contract(ABI, sAddress);
  const data = await contract.methods._distributeNormalRewards().send({from:await getUserAddress()});
  return data;
}