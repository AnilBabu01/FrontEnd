import React from "react";
import styles from "./Footer.module.css";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";
const Index = () => {
  return (
    <footer>
      <div className="flex flex-col sm:flex-row justify-between items-center p-4">
        <div className="flex justify-between items-center sm:flex-row flex-col ">
          <div className="flex justify-between items-center ">
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-contaimer"
            >
              <FaTwitter size={15} />
            </Link>
            <Link
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-contaimer"
            >
              <FaTelegramPlane size={15} />
            </Link>
          </div>
          <p className="reserved-text mt-4 mb-4 md:mt-0 md:mb-0">
            © Mighty Jackpot All Rights Reserved
          </p>
        </div>
        <div className="flex justify-between items-center ">
          <Link
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            className="link-text"
          >
            Terms & Conditions
          </Link>
          <Link
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            className="link-text"
          >
            Private Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Index;
