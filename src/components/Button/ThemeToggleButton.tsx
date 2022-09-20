import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// icons
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const themes = [{ name: "Light" }, { name: "Dark" }, { name: "System" }];

const ToggleThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleSetTheme = (e: any) => {
    setTheme(e.currentTarget.value);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  function renderIcon() {
    let dark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark").matches;

    if (theme === "system" && dark) {
      return <MoonIcon className="text-accent h-6 w-6 stroke-2" />;
    } else if (theme === "system" && !dark) {
      return <SunIcon className="text-accent h-6 w-6 stroke-2" />;
    } else if (theme === "light") {
      return <SunIcon className="text-accent h-6 w-6 stroke-2" />;
    } else {
      return <MoonIcon className="text-accent h-6 w-6 stroke-2" />;
    }
  }

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center px-4">
      <p className="sr-only">Current theme:{theme}</p>
      <p className="flex items-center gap-2">{renderIcon()}</p>
      {/* <button className="px-4 py-2 rounded-sm bg-back-secondary">
        <select onChange={handleSetTheme} className="outline-none">
          <option value={theme}>{theme}</option>
          {themes.map((t) => (
            <option key={t.name.toLowerCase()} value={t.name.toLowerCase()}>
              {t.name}
            </option>
          ))}
        </select>
      </button> */}
    </div>
  );
};

export default ToggleThemeButton;
