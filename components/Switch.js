import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function DarkModeSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 focus:outline-none"
    >
      {darkMode ? (
        <FiSun className="text-yellow-500 w-6 h-6" />
      ) : (
        <FiMoon className="text-gray-800 dark:text-gray-200 w-6 h-6" />
      )}
    </button>
  );
}
