import React from "react";
import GameCard from "./GameCard";
import { gameList } from "@/utils/contants";
const Index = () => {
  return (
    <div className="mt-[25%] md:mt-[4%]">
      <div className="flex flex-col sm:flex-row justify-center items-center flex-wrap">
        {gameList?.map((item, index) => {
          return <GameCard key={index} data={item} />;
        })}
      </div>
    </div>
  );
};

export default Index;
