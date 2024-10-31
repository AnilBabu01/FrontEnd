import React from "react";
import Image from "next/image";
const GameCard = ({ data }) => {
  return (
    <div className="flex justify-center items-center flex-col w-full md:w-[30%] h-56 p-8">
      <Image src={data?.icon} height={80} width={80} />
      <h3 className="game-name ">{data.name}</h3>
      <p className="game-desc text-center">{data.desc}</p>
    </div>
  );
};

export default GameCard;
