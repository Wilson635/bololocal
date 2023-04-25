import logo from "/public/images/bolo.png";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="flex justify-between h-16">
          <div className="flex px-2 lg:px-0">
            <div className="shrink-0 flex items-center font-semibold text-xl tracking-tight">
              <Image src={logo} width={50} height={50} alt={""} />
            </div>
            <div>
              {isOpen && (
                <div>
                  <div
                    className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm opacity-100"
                    onClick={toggleMenu}
                  ></div>
                  <div
                    className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 opacity-100 scale-100"
                    tabIndex={-1}
                  >
                    <div className="flex flex-row-reverse items-center justify-between">
                      <button
                        aria-label="Close menu"
                        className="-m-1 p-1"
                        type="button"
                        onClick={toggleMenu}
                        tabIndex={0}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="h-6 w-6 text-zinc-500"
                        >
                          <path
                            d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                      <h2 className="text-sm font-medium text-zinc-600">
                        Navigation
                      </h2>
                    </div>
                    <nav className="mt-6">
                      <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800">
                        <li>
                          <Link href="/" legacyBehavior>
                            <Link href="" className="block py-2">Home</Link>
                          </Link>
                        </li>
                        <li>
                          <Link href="/" legacyBehavior>
                            <Link href="" className="block py-2">About</Link>
                          </Link>
                        </li>
                        <li>
                          <Link href="/" legacyBehavior>
                            <Link href="" className="block py-2">Find job</Link>
                          </Link>
                        </li>
                        <li>
                          <Link href="/" legacyBehavior>
                            <Link href="" className="block py-2">Post job</Link>
                          </Link>
                        </li>
                        <li>
                          <Link href="/" legacyBehavior>
                            <Link href="" className="block py-2 font-bold">Login</Link>
                          </Link>
                        </li>
                        <li>
                          <Link href="/" legacyBehavior>
                            <Link href="/" className="block py-2 font-bold">
                              Create an account
                            </Link>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
            <div className="hidden lg:ml-10 lg:flex lg:items-center lg:space-x-6 font-semibold">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/find">Find job</Link>
              <Link href="/post">Post job</Link>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="max-w-lg w-full lg:max-w-xs cursor-pointer group">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div
                  className="w-full pr-12 pl-4 py-2 border border-skin-base rounded-md
                             text-skin-base leading-5 bg-skin-body font-normal text-skin-muted
                             text-sm group-hover:bg-skin-card-gray"
                >
                  Search...
                </div>
                <div className="absolute inset-y-0 right-0 flex py-1.5 pr-2 pointer-events-none">
                  <kbd
                    className="inline-flex items-center border border-skin-base rounded
                                px-2 text-sm font-sans font-medium text-skin-muted"
                  >
                    <HiMagnifyingGlass />
                  </kbd>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center lg:hidden">
            <button className="text-2xl" onClick={toggleMenu}>
              {isOpen ? <RxCross1 /> : <AiOutlineMenu />}
            </button>
          </div>
          <div className="hidden lg:ml-6 lg:flex lg:items-center">
            <div className="relative flex items-center space-x-6 font-sans">
              <Link
                href="https://laravel.cm/login"
                className="text-skin-menu hover:text-skin-menu-hover inline-flex items-center text-sm font-medium"
              >
                Login
              </Link>
              <Link
                href="https://laravel.cm/register"
                className="text-flag-green inline-flex items-center text-sm font-medium"
              >
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;