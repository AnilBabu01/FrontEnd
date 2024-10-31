import { useEffect } from "react";
import { useRouter } from "next/router";

export const ProtectedPage = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/user/account/signin");
    }
  }, [router]);
};

export const handleDarkAndLightMode = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");
  const handleChange = (e) => {
    if (e.matches) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  };

  darkModePreference.addEventListener("change", handleChange);

  return () => {
    darkModePreference.removeEventListener("change", handleChange);
  };
};
