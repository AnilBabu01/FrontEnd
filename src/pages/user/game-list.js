import React from "react";
import Navber from "@/components/User/Navber/index";
import Head from "next/head";
import { gameList } from "@/utils/contants";
import GameCard from "@/components/User/Cards/GameCard";
import { ProtectedPage } from "@/utils/funtions";
import Footer from "@/components/User/Home/Footer/index";
const GameList = () => {
  // ProtectedPage();
  return (
    <>
      <Head>
        <title>Game List | Mighty Jackpot</title>
      </Head>
      <Navber />
      <div className="flex justify-between  flex-col min-h-screen">
        <div className="mt-[20%] md:mt-[6%] ml-[2%] md:ml-[6%] mr-[2%] md:mr-[6%]">
          <div className="block md:flex justify-between items-center">
            {gameList.map((item, index) => {
              return <GameCard game={item} key={index} />;
            })}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default GameList;
