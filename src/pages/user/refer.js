import React, { useContext, useState } from "react";
import Button from "@/components/common/Button/index";
import Head from "next/head";
import { UserContext } from "@/context/authContext";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaCopy,
} from "react-icons/fa";

const Refer = () => {
  const { user } = useContext(UserContext);
  const [copied, setCopied] = useState(false);

  const referralLink =
    "http://localhost:3000/user/account/signup?code=" + user?.referCode;
  const shareMessage = `Check out this awesome platform and get $10! Use my referral code: ${user?.referCode}. Join here: ${referralLink}`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Refer a Friend!",
          text: shareMessage,
          url: referralLink, 
        });
        console.log("Share successful");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Share API is not supported in your browser.");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shareMessage || "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };

  const shareOnWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(shareMessage)}`,
      "_blank"
    );
  };

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        referralLink
      )}`,
      "_blank"
    );
  };

  const shareOnInstagram = () => {
    alert(
      "Instagram does not support direct web-based sharing. Please copy the link and share manually."
    );
  };

  const shareOnTelegram = () => {
    window.open(
      `https://t.me/share/url?url=${encodeURIComponent(
        referralLink
      )}&text=${encodeURIComponent(shareMessage)}`,
      "_blank"
    );
  };

  return (
    <>
      <Head>
        <title>Refer | Mighty Jackpot</title>
      </Head>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex justify-center items-center">
          <div>
            <div className="form-container">
              <div className="mb-4 flex justify-center items-center flex-col">
                <h1 className="titileHd mb-4 mt-1 flex items-center">
                  Refer Code {user?.referCode}
                  <FaCopy
                    className="ml-2 cursor-pointer text-gray-500"
                    onClick={handleCopy}
                    title="Copy Code"
                  />
                </h1>
                {copied && <p className="text-green-500 mt-1">Copied!</p>}
                <p className="Sign-p mt-2 mb-2">
                  Refer a friend and give $10, get $10.
                </p>
                <p className="Sign-p mt-2 mb-2">
                  Spread the Summersalt love! You'll get $10 for each friend who
                  orders. Only new customers are valid for the referral.
                </p>
              </div>
              <div className="flex justify-center space-x-4 mt-4">
                <FaWhatsapp
                  className="cursor-pointer text-green-500 text-2xl"
                  onClick={shareOnWhatsApp}
                />
                <FaFacebook
                  className="cursor-pointer text-blue-600 text-2xl"
                  onClick={shareOnFacebook}
                />
                <FaInstagram
                  className="cursor-pointer text-pink-500 text-2xl"
                  onClick={shareOnInstagram}
                />
                <FaTelegram
                  className="cursor-pointer text-blue-400 text-2xl"
                  onClick={shareOnTelegram}
                />
              </div>
              <div className="mt-4">
                <Button
                  submit={() => handleShare()}
                  title="Share With Your Friends"
                  styles="auth-btn"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Refer;
