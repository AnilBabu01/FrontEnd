import React, { useState, useEffect } from "react";
import InputBox from "@/components/common/InputBox/index";
import Button from "@/components/common/Button/index";
import Logo from "../../../../public/images/mewlogo.svg";
import GoogleLog from "../../../../public/images/google.webp";
import Image from "next/image";
import Head from "next/head";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";
import { handleDarkAndLightMode } from "@/utils/funtions";
import { toast } from "react-toastify";
import { serverInstance } from "@/Api/ServerInstance";
import { useRouter } from "next/router";
import GoogleProvider from "next-auth/providers/google";

const Signup = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    emailRepeat: "",
    password: "",
    passwordRepeat: "",
    ReferBy:""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    emailRepeat: "",
    password: "",
    passwordRepeat: "",
  });

  const [captcha, setCaptcha] = useState("");

  const validate = () => {
    const newErrors = {};

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not in correct format.";
    }

    if (formData.email !== formData.emailRepeat) {
      newErrors.emailRepeat = "Email addresses do not match.";
    }

    if (!formData.name) {
      newErrors.name = "Username is required .";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    }

    if (formData.password !== formData.passwordRepeat) {
      newErrors.passwordRepeat = "Passwords do not match.";
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
    if (validate()) {
      setLoading(true);
      serverInstance("register", "post", formData)
        .then((res) => {
          if (res?.status) {
            toast.success(res?.msg);
            setLoading(false);

            router.push("/user/account/signin");
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

   console.log("formData  is formData",formData)

  return (
    <>
      <Head>
        <title>Sign up | Mighty Jackpot</title>
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
                <h2 className="Sign-hd mb-4 mt-1">Sign up</h2>
                <p className="Sign-p">Sign up for a free account.</p>
              </div>
              <div className="mb-4">
                <InputBox
                  placeholder="e.g. Mr ramu"
                  title="USERNAME"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
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
                  placeholder="e.g. ramu@gmail.com"
                  title="EMAIL ADDRESS (REPEAT)"
                  name="emailRepeat"
                  type="email"
                  value={formData.emailRepeat}
                  onChange={handleChange}
                />
                {errors.emailRepeat && (
                  <p className="text-red-500">{errors.emailRepeat}</p>
                )}
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
              <div className="mb-4">
                <InputBox
                  placeholder="pick a password"
                  title="PASSWORD (REPEAT)"
                  name="passwordRepeat"
                  type="password"
                  value={formData.passwordRepeat}
                  onChange={handleChange}
                />
                {errors.passwordRepeat && (
                  <p className="text-red-500">{errors.passwordRepeat}</p>
                )}
              </div>
              <div className="mb-4">
                <InputBox
                  placeholder="pick a ReferBy"
                  title="Refer Code"
                  name="ReferBy"
                  type="text"
                  value={formData.ReferBy}
                  onChange={handleChange}
                />
               
              </div>
              {/* <button
                onClick={() => signupWithGoogle()}
                className="mb-4 flex justify-center items-center sign-with-google  w-full"
              >
                <Image src={GoogleLog} width={37} height={37} alt="logo" />
                <p>Continue With Google</p>
              </button> */}
              {/* <div className="mb-4 flex justify-center items-center">
                <ReCAPTCHA
                  sitekey={"6LfwukcqAAAAAFZCpgWPXVDIwDiYP4atRXbP-oo_"}
                  onChange={(value) => setCaptcha(value)}
                  className="max-auto"
                />
              </div> */}
              <div>
                <Button
                  title="Create account"
                  styles="auth-btn"
                  loading={loading}
                />
              </div>
              <div className="flex justify-center items-center mt-4">
                <p>
                  Already have an account?{" "}
                  <Link className="underline" href="/user/account/signin">
                    Sign in{" "}
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
