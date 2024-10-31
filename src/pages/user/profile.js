import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "@/context/authContext";
import InputBox from "@/components/common/InputBox/index";
import Button from "@/components/common/Button/index";
import Logo from "../../../public/images/mewlogo.svg";
import Image from "next/image";
import Head from "next/head";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";
import { handleDarkAndLightMode } from "@/utils/funtions";
import { toast } from "react-toastify";
import { serverInstance } from "@/Api/ServerInstance";
import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();
  const { getUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      serverInstance("login", "post", formData)
        .then((res) => {
          if (res?.status) {
            toast.success(res?.msg);
            setLoading(false);
            localStorage.setItem("token", res?.data[0]?.token);
            getUser();
            router.push("/");
          } else {
            toast.error(res?.msg);
            setLoading(false);
          }
        })
        .catch((errors) => {
          console.log(errors);
        });
    }
  };

  useEffect(() => {
    handleDarkAndLightMode();
  }, []);

  return (
    <>
      <Head>
        <title>Profile | Mighty Jackpot</title>
      </Head>

      <div className="flex justify-center items-center min-h-screen">
        <div className="flex justify-center items-center">
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <div className="mb-4 flex justify-center items-center flex-col">
                <h2 className="Sign-hd mb-4 mt-1">Your Profile</h2>
                <p className="Sign-p mt-2 mb-2 ">Edit Your Profile</p>
              </div>
              <div className="mb-4">
                <InputBox
                  placeholder="Name"
                  title="Full Name"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
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
                <Button title="Update" styles="auth-btn" loading={loading} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
