import React, { useState } from "react";
import Navber from "@/components/User/Navber/index";
import Tab from "@/components/common/Tab";
import Button from "@/components/common/Button/index";
import InputBox from "@/components/common/InputBox/index";
import Dropdown from "@/components/common/DrowDown";
import {
  walletTabs,
  addressHead,
  addressRowData,
  coinsList,
} from "@/utils/contants";
import Head from "next/head";
import TableHead from "@/components/common/Table/TableHead";
import { ProtectedPage } from "@/utils/funtions";
const LinkedAddress = () => {
  ProtectedPage();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <>
      <Head>
        <title>Linked Address | Mighty Jackpot</title>
      </Head>
      <Navber />
      <div className="mt-[20%] md:mt-[6%] ml-[2%] md:ml-[6%] mr-[2%] md:mr-[6%]">
        <Tab tabs={walletTabs} defalutRoute="linked-addresses" />
        <div className="block md:flex items-center justify-between mt-2">
          <div>
            <InputBox
              placeholder="Name (label)"
              title="Name (label)"
              name="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <InputBox
              placeholder="address"
              title="address"
              name="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <Dropdown
              title="address"
              items={coinsList}
              labelKey="name"
              valueKey="id"
              onSelect={(item) => setSelectedOption(item)}
            />
          </div>
          <div className="mt-3 md:mt-0">
            <p>&nbsp;</p>
            <Button title="Link" styles="auth-btn" />
          </div>
        </div>
        <div className="flex justify-center items-center mt-3">
          <TableHead
            historyHead={addressHead}
            historyRowData={addressRowData}
          />
        </div>
      </div>
    </>
  );
};

export default LinkedAddress;
