import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  // Apply theme whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Toggle between light and dark
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <button onClick={toggleTheme} className="btn btn-sm btn-outline">
        {theme === "light" ? (
          <>
            <FaMoon /> Dark
          </>
        ) : (
          <>
            <FaSun /> Light
          </>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
