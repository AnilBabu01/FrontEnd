import React, { useContext } from "react";
import Image from "next/image";
import Button from "@/components/common/Button/index";
import { UserContext } from "@/context/authContext";

const GameCard = ({ game }) => {
  const { user} = useContext(UserContext);
  const play = () => {
    if (user) {

    } else {
    }
  };
  return (
    <div
      style={{ height: "29rem" }}
      className="max-w-lg p-1 pt-3 apply-dark rounded overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105 m-2 flex items-center flex-col justify-between"
    >
      <div className="flex justify-center items-center">
        <Image width={150} height={150} src={game.icon} alt={game.name} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{game.name}</div>
        <p className="text-gray-700 text-base text-center pText">{game.desc}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Button onClick={() => play()} title="Play Game" styles="auth-btn" />
      </div>
    </div>
  );
};

export default GameCard;
