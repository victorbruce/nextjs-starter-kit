import { useTheme } from "next-themes";
import { ChangeEvent, useEffect, useState } from "react";

const themes = [
  { name: "Light" },
  { name: "Dark" },
  { name: "Emerald" },
  { name: "Pink" },
];
const ToggleThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleSetTheme = (e: any) => {
    setTheme(e.currentTarget.value);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <p className="mb-2">Current Theme: {theme}</p>
      <button className="px-4 py-2 rounded-sm bg-th-background text-th-primary-dark">
        {/* Toggle to {theme === "light" ? "dark" : "light"} theme */}

        <select onChange={handleSetTheme} className="outline-none">
          <option value="">{theme}</option>
          {themes.map((t) => (
            <option key={t.name.toLowerCase()} value={t.name.toLowerCase()}>
              {t.name}
            </option>
          ))}
        </select>
      </button>
    </>
  );
};

export default ToggleThemeButton;
