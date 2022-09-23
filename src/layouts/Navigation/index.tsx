import { useState } from "react";
import Link from "next/link";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/20/solid";
// components
import ToggleThemeButton from "components/DropDown/ToggleThemeButton";
import LanguageSwitcher from "components/DropDown/LanguageSwitcher";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        {isMenuOpen ? (
          <button
            className="transition focus:duration-150 focus:outline-none outline-none"
            onClick={() => setIsMenuOpen((prevState) => !prevState)}
          >
            <XMarkIcon className="w-6 h-6 md:hidden" />
          </button>
        ) : (
          <button
            className="transition focus:duration-150 focus:outline-none outline-none"
            onClick={() => setIsMenuOpen((prevState) => !prevState)}
          >
            <Bars2Icon className="w-6 h-6 md:hidden" />
          </button>
        )}

        {/** Desktop */}
        <ul className="gap-4 items-center hidden md:flex">
          <li className="border-r-2 border-borderColor px-4 flex justify-center items-center">
            <ToggleThemeButton />
          </li>
          <li>
            <LanguageSwitcher />
          </li>
        </ul>

        {/** Mobile */}
        {isMenuOpen && (
          <div className="absolute top-[82px] left-0 right-0 bottom-0 h-screen">
            <div className="bg-pageBg relative w-100 h-[80vh] py-8 px-4 overflow-y-auto">
              <nav>
                <ul className="flex flex-col gap-4">
                  <li>
                    <Link href="/">About</Link>
                  </li>
                </ul>
              </nav>
              <div className="border-borderColor border-t absolute left-0 right-0 bottom-0 px-4 py-4">
                <div className="flex justify-between items-center mb-4">
                  <span>Switch theme:</span>
                  <ToggleThemeButton />
                </div>
                <div className="flex justify-between items-center">
                  <span>Switch language:</span>
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
