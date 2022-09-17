import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ToggleThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleSetTheme = () => {
    if (theme === "light") {
      return setTheme("dark");
    }
    return setTheme("light");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={handleSetTheme}
      className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-small"
    >
      Toggle to {theme === "light" ? "dark" : "light"} theme
    </button>
  );
};

export default ToggleThemeButton;
