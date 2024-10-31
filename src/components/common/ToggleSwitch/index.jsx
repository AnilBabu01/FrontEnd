import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import styles from "./ToggleSwitch.module.css";

export default function ToggleSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark-mode");
    } else {
      setIsDarkMode(false);
      document.body.classList.remove("dark-mode");
    }

    const darkModePreference = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    const handleChange = (e) => {
      if (e.matches) {
        setIsDarkMode(true);
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
      } else {
        setIsDarkMode(false);
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
      }
    };

    darkModePreference.addEventListener("change", handleChange);

    return () => {
      darkModePreference.removeEventListener("change", handleChange);
    };
  }, []);

  const toggleSwitch = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div
      className={`w-16 h-7 relative flex items-center rounded-full p-1 cursor-pointer ${
        isDarkMode ? "" : "bg-gray-400"
      }`}
      onClick={toggleSwitch}
      style={{
        background: isDarkMode ? "#2B2E5E" : undefined,
      }}
    >
      <div className={`absolute left-1 ${isDarkMode ? "" : styles.light}`}>
        {isDarkMode ? (
          <FaMoon className="text-white" />
        ) : (
          <FaSun style={{ color: "#e77626" }} />
        )}
      </div>
      <div
        className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform ${
          isDarkMode ? "translate-x-9" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
}
