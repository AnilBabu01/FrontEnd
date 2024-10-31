import React, { useContext } from "react";
import styles from "./HomeBanner.module.css";
import Button from "@/components/common/Button/index";
import { useRouter } from "next/router";
import { UserContext } from "@/context/authContext";
const Index = () => {
  const router = useRouter();
  const { user, getUser } = useContext(UserContext);

  const handleNavigate = (link) => {
    router.push(link);
  };
  return (
    <div className="mainContainer">
      <div className="flex items-center flex-col h-60 space-y-4 pt-14">
        <h2 className="hdText">Micropayment Wallet & Earnings Platform</h2>
        <p className="pText text-center">
          Receive instant cryptocurrency payments from thousands of websites and
          withdraw <br /> to your personal wallet for a very low fee.
        </p>
        {!user && (
          <div className="flex space-x-4 pt-5 w-[80%] md:w-[25%]">
            <Button
              title="Sign Up"
              submit={() => handleNavigate("/user/account/signup")}
              styles={styles.Active}
            />
            <Button
              title="Login"
              submit={() => handleNavigate("/user/account/signin")}
              styles={styles.Deactive}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
