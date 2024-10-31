import React from "react";
import Navber from "@/components/User/Navber/index";
import Tab from "@/components/common/Tab";
import { walletTabs ,historyHead,historyRowData} from "@/utils/contants";
import Head from "next/head";
import TableHead from "@/components/common/Table/TableHead";
import { ProtectedPage } from "@/utils/funtions";
const History = () => {
  ProtectedPage();
  return (
    <>
      <Head>
        <title>History | Mighty Jackpot</title>
      </Head>
      <Navber />
      <div className="mt-[20%] md:mt-[6%] ml-[2%] md:ml-[6%] mr-[2%] md:mr-[6%]">
        <Tab tabs={walletTabs} defalutRoute="history" />
        <div className="flex justify-center items-center mt-3">
          <TableHead  historyHead={historyHead} historyRowData={historyRowData}/>
        </div>
      </div>
    </>
  );
};

export default History;
