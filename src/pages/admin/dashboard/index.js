import React from "react";
import Sidebar from "@/components/Admin/Sidebar/index";
import Head from "next/head";
import TotalCard from "@/components/Admin/Dashboard/TotalCard";
import {FaUser } from "react-icons/fa";


const Index = () => {
  return (
    <>
      <Head>
        <title>Dashboard | Mighty Jackpot</title>
      </Head>
      <Sidebar>
        <div className="block md:flex justify-between items-center m-0 md:m-3">
          <TotalCard Icon={FaUser} title={"User"} />
          <TotalCard Icon={FaUser} title={"Deposit"} />
          <TotalCard Icon={FaUser} title={"Withdraw"} />
        </div>
      </Sidebar>
    </>
  );
};

export default Index;
