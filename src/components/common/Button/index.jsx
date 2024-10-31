import React from "react";
import Image from "next/image";
import Loader from "../../../../public/images/loader.gif";
const Index = ({ title, submit, styles, loading }) => {
  return (
    <button
      className={`default-botton ${styles}`}
      onClick={() => submit && submit()}
    >
      {title}
      {loading && <Image src={Loader} width={40} height={40} alt="loader"/>}
    </button>
  );
};

export default Index;
