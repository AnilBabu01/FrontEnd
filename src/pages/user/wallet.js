import React from "react";
import Navber from "@/components/User/Navber/index";
import Tab from "@/components/common/Tab";
import Button from "@/components/common/Button/index";
import { walletTabs } from "@/utils/contants";
import Head from "next/head";
import { ProtectedPage } from "@/utils/funtions";
const Wallet = () => {
  ProtectedPage();
  return (
    <>
      <Head>
        <title>Wallet | Mighty Jackpot</title>
      </Head>
      <Navber />
      <div className="mt-[20%] md:mt-[6%] ml-[2%] md:ml-[6%] mr-[2%] md:mr-[6%]">
        <Tab tabs={walletTabs} defalutRoute="wallet" />
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="p-4 text-center apply-dark border border-gray-500">
            <h2 className="hd-Wallet-Text">Your Current Balance is</h2>
            <p className="p-Wallet-Text mb-3 mt-2">0 USD</p>
            <div className="flex justify-center items-center">
              <div className="mr-4">
                <Button title="Deposit" styles="auth-btn" />
              </div>
              <div>
                <Button title="Withdraw" styles="auth-btn" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallet;
