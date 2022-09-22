import { Fragment, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Menu, Transition } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

function classNames(...classes: [string, string]) {
  return classes.filter(Boolean).join(" ");
}

const DropDown = (): JSX.Element | null => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  function renderIcon() {
    let dark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark").matches;

    if (theme === "system" && dark) {
      return <MoonIcon className="h-6 w-6 " />;
    } else if (theme === "system" && !dark) {
      return <SunIcon className="h-6 w-6 " />;
    } else if (theme === "light") {
      return <SunIcon className="h-6 w-6 " />;
    } else {
      return <MoonIcon className="h-6 w-6 " />;
    }
  }

  if (!mounted) {
    return null;
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="">
        <Menu.Button
          aria-label="theme mode"
          className="flex w-full justify-center items-center text-sm font-medium  focus:outline-none py-2"
        >
          {renderIcon()}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-dropdownBg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    active
                      ? "bg-pageBgTertiary text-pgColor"
                      : "text-pageColorSecondary",
                    "block w-full px-4 py-2 text-left text-sm"
                  )}
                  onClick={() => setTheme("light")}
                >
                  Light
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    active
                      ? "bg-pageBgTertiary text-pgColor"
                      : "text-pageColorSecondary",
                    "block w-full px-4 py-2 text-left text-sm"
                  )}
                  onClick={() => setTheme("dark")}
                >
                  Dark
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    active
                      ? "bg-pageBgTertiary text-pgColor"
                      : "text-pageColorSecondary",
                    "block w-full px-4 py-2 text-left text-sm"
                  )}
                  onClick={() => setTheme("system")}
                >
                  System
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropDown;
