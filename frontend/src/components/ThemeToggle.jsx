import { useEffect, useState } from "react";
import { LuSun, LuMoon } from "react-icons/lu";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement; // this targets <html>
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-4 right-4 z-50 px-4 py-2 bg-n-1 dark:bg-n-10 dark:text-n-1 rounded-full"
    >
      {darkMode ? <LuSun /> : <LuMoon />}
    </button>
  );
};

export default ThemeToggle;
