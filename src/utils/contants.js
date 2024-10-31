import mines from "../../public/images/Mines.svg";
import Roulette from "../../public/images/roule.svg";
import Crash from "../../public/images/Crash.svg";
import Dice from "../../public/images/Dice.svg";
import Plinko from "../../public/images/Plinko.svg";

export const gameList = [
  {
    icon: Roulette,
    name: "Roulette",
    desc: "Donec nec enim porttitor metus tempus egestas. Donec porta, nisi eu hendrerit vehicula, elit sem faucibus quam. ",
  },
  {
    icon: mines,
    name: "Mines",
    desc: "Donec nec enim porttitor metus tempus egestas. Donec porta, nisi eu hendrerit vehicula, elit sem faucibus quam. ",
  },
  {
    icon: Plinko,
    name: "Plinko",
    desc: "Donec nec enim porttitor metus tempus egestas. Donec porta, nisi eu hendrerit vehicula, elit sem faucibus quam. ",
  },
  {
    icon: Dice,
    name: "Dice",
    desc: "Donec nec enim porttitor metus tempus egestas. Donec porta, nisi eu hendrerit vehicula, elit sem faucibus quam. ",
  },
  {
    icon: Crash,
    name: "Crash",
    desc: "Donec nec enim porttitor metus tempus egestas. Donec porta, nisi eu hendrerit vehicula, elit sem faucibus quam. ",
  },
];

export const walletTabs = [
  { url: "wallet", label: "WALLET" },
  { url: "history", label: "HISTORY" },
  { url: "linked-addresses", label: "LINKED ADDRESS" },
];

export const historyHead = [
  { id: 2, label: "Type" },
  { id: 3, label: "Amount" },
  { id: 4, label: "Balance" },
  { id: 5, label: "Status" },
];

export const historyRowData = [
  {
    id: 1,
    Date: "21-09-2024",
    Type: "Won",
    Amount: ".05",
    Balance: "55",
    Status: "Success",
  },
  {
    id: 2,
    Date: "28-09-2024",
    Type: "Withdraw",
    Amount: "05",
    Balance: "55",
    Status: "Pending",
  },
  {
    id: 3,
    Date: "23-09-2024",
    Type: "Wtihdraw",
    Amount: ".05",
    Balance: "55",
    Status: "Pending",
  },
  {
    id: 4,
    Date: "21-09-2024",
    Type: "WithDraw",
    Amount: ".05",
    Balance: "55",
    Status: "Failed",
  },
  {
    id: 5,
    Date: "21-09-2024",
    Type: "Deposit",
    Amount: ".05",
    Balance: "55",
    Status: "Pending",
  },
  {
    id: 6,
    Date: "21-09-2024",
    Type: "Deposit",
    Amount: ".05",
    Balance: "55",
    Status: "Success",
  },
  {
    id: 7,
    Date: "21-09-2024",
    Type: "Deposit",
    Amount: ".05",
    Balance: "55",
    Status: "Failed",
  },
];

export const addressHead = [
  { id: 2, label: "name" },
  { id: 3, label: "address" },
  { id: 4, label: "coin" },
  { id: 5, label: "Manage" },
];

export const addressRowData = [
  {
    id: 1,
    Date: "21-09-2024",
    Type: "Won",
    Amount: ".05",
    Balance: "55",
    Status: "Success",
  },
];

import ada from "../../public/bitcoinsIcons/ada.png";
import bch from "../../public/bitcoinsIcons/bch.png";
import bnb from "../../public/bitcoinsIcons/bnb.png";
import btc from "../../public/bitcoinsIcons/btc.png";
import dash from "../../public/bitcoinsIcons/dash.png";
import dgb from "../../public/bitcoinsIcons/dgb.png";
import doge from "../../public/bitcoinsIcons/doge.png";
import eth from "../../public/bitcoinsIcons/eth.png";
import ltc from "../../public/bitcoinsIcons/ltc.png";
import matic from "../../public/bitcoinsIcons/matic.png";
import sol from "../../public/bitcoinsIcons/sol.png";
import tara from "../../public/bitcoinsIcons/tara.png";
import ton from "../../public/bitcoinsIcons/ton.png";
import trx from "../../public/bitcoinsIcons/trx.png";
import usdc from "../../public/bitcoinsIcons/usdc.png";
import usdt from "../../public/bitcoinsIcons/usdt.png";
import xlm from "../../public/bitcoinsIcons/xlm.png";
import xmr from "../../public/bitcoinsIcons/xmr.png";

export const coinsList = [
  {
    id: 1,
    name: "BitCoin",
    icon: ada,
    manageBy: "unknow",
  },
  {
    id: 2,
    name: "BitCoin",
    icon: bch,
    manageBy: "unknow",
  },
  {
    id: 3,
    name: "BitCoin",
    icon: bnb,
    manageBy: "unknow",
  },
  {
    id: 4,
    name: "BitCoin",
    icon: ada,
    manageBy: "unknow",
  },
  {
    id: 5,
    name: "BitCoin",
    icon: btc,
    manageBy: "unknow",
  },
  {
    id: 6,
    name: "BitCoin",
    icon: dash,
    manageBy: "unknow",
  },
  {
    id: 7,
    name: "BitCoin",
    icon: dgb,
    manageBy: "unknow",
  },
  {
    id: 8,
    name: "BitCoin",
    icon: doge,
    manageBy: "unknow",
  },
  {
    id: 9,
    name: "BitCoin",
    icon: eth,
    manageBy: "unknow",
  },
  {
    id: 10,
    name: "BitCoin",
    icon: ltc,
    manageBy: "unknow",
  },
  {
    id: 11,
    name: "BitCoin",
    icon: matic,
    manageBy: "unknow",
  },
  {
    id: 12,
    name: "BitCoin",
    icon: sol,
    manageBy: "unknow",
  },
  {
    id: 13,
    name: "BitCoin",
    icon: tara,
    manageBy: "unknow",
  },
  {
    id: 14,
    name: "BitCoin",
    icon: ton,
    manageBy: "unknow",
  },
  {
    id: 15,
    name: "BitCoin",
    icon: trx,
    manageBy: "unknow",
  },
  {
    id: 16,
    name: "BitCoin",
    icon: usdc,
    manageBy: "unknow",
  },
  {
    id: 17,
    name: "BitCoin",
    icon: usdt,
    manageBy: "unknow",
  },
  {
    id: 18,
    name: "BitCoin",
    icon: xlm,
    manageBy: "unknow",
  },
  {
    id: 19,
    name: "BitCoin",
    icon: xmr,
    manageBy: "unknow",
  },
];
