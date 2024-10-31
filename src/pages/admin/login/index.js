import React, { useState, useEffect } from "react";
import InputBox from "@/components/common/InputBox/index";
import Button from "@/components/common/Button/index";
import Logo from "../../../../public/images/mewlogo.svg";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";

import { handleDarkAndLightMode } from "@/utils/funtions";

const Index = () => {
  const router = useRouter();

  const handleNavigate = (link) => {
    router.push(link);
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [captcha, setCaptcha] = useState("");

  const validate = () => {
    const newErrors = {};

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not in correct format.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
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
        <title>Admin login | Mighty Jackpot</title>
      </Head>
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
                <h2 className="Sign-hd mb-4 mt-1">Login</h2>
                <p className="Sign-p mt-2 mb-2 ">Login to get admin panel.</p>
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

              <div className="mb-4">
                <InputBox
                  placeholder="pick a password"
                  title="PASSWORD"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password}</p>
                )}
              </div>

              <div>
                <Button
                  title="Login"
                  submit={() => handleNavigate("/admin/dashboard")}
                  styles="auth-btn"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Index;
