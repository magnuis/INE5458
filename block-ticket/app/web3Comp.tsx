"use client";

import { useEffect } from "react";
import web3 from "./utils/web3";

const Web3Comp = () => {
  useEffect(() => {
    const fetchData = async () => {
      const accounts = await web3.eth.getAccounts();
      // const accounts = await window.ethereum.request({
      //   method: "eth_accounts",
      // });
      console.log("Connected accounts: ", accounts);
    };
    fetchData();
    // transferEth(
    //   "0x3a1B6bE5480c573aF64a103Bc96af9e0343b94Ba",
    //   "0xf9b527aD959953B4f0aCecBf4D533B6ceFBe198F",
    //   5
    // );
  }, []);
  return <div></div>;
};

export default Web3Comp;
