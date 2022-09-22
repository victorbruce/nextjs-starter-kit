import Link from "next/link";

// components
import ToggleThemeButton from "components/DropDown/ToggleThemeButton";
import LanguageSwitcher from "components/DropDown/LanguageSwitcher";

const Navigation = () => {
  return (
    <header className="w-full sticky top-0 z-[1000px] border-b border-borderColor backdrop-blur">
      <nav className="max-w-7xl px-4 mx-auto flex justify-between items-center h-[80px]">
        <div>
          <Link href="/">
            <a
              className="text-pageColorSecondary text-lg font-medium md:text-xl"
              title="Go to Home"
            >
              Next Starter Kit
            </a>
          </Link>
        </div>
        <ul className="flex gap-4 items-center ">
          <li className="border-r-2 border-borderColor px-4 flex justify-center items-center">
            <ToggleThemeButton />
          </li>
          <li>
            <LanguageSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
