import React from "react";
import styles from "./TotalCard.module.css";
const TotalCard = ({ Icon, title }) => {
  return (
    <div className={`${styles.container} bg-white border rounded-lg shadow-lg z-20`}>
      <Icon color="black"/>
      <p>
       {title}
      </p>
    </div>
  );
};

export default TotalCard;
