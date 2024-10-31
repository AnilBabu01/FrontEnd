import React, { useState, useEffect } from "react";
import Navber from "@/components/User/Navber/index";
import InputBox from "@/components/common/InputBox/index";
import Button from "@/components/common/Button/index";
import Logo from "../../../../public/images/mewlogo.svg";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { handleDarkAndLightMode } from "@/utils/funtions";
const ResetPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({
    email: "",
  });

  const validate = () => {
    const newErrors = {};

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not in correct format.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate() && captcha) {
    }
  };

  useEffect(() => {
    handleDarkAndLightMode();
  }, []);

  return (
    <>
      <Head>
        <title>Reset Password | Mighty Jackpot</title>
      </Head>
      {/* <Navber /> */}
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex justify-center items-center">
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <div className="mb-4 flex justify-center items-center flex-col">
                <Image
                  src={Logo}
                  width={200}
                  height={200}
                  alt="logo"
                  className="mt-4 mb-4"
                />
                <h2 className="Sign-hd mb-4 mt-1">Reset Password</h2>
              </div>
              <div className="mb-4">
                <InputBox
                  placeholder="e.g. ramu@gmail.com"
                  title="EMAIL ADDRESS"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>

              <div>
                <Button title="Create account" styles="auth-btn" />
              </div>
              <div className="flex justify-center items-center mt-4">
                <Link className="underline" href="/user/account/signin">
                  Sign in{" "}
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
