import * as React from 'react';
import Link from "next/link";
import Image from "next/image";
import hero from "/public/images/hero-image-01.png";
import { HiArrowDownTray, HiMagnifyingGlass, HiOutlineMapPin  } from "react-icons/hi2";
import NavBar from './navbar';



export function Header() {
    return (
        <div className="bg-white hero">
            {/* Navbar Start */}
            <NavBar />
            {/* Navbar End */}

            {/* Hero Section Start  */}
                <div className="relative bg-white pt-[20px] pb-[110px] lg:pt-[50px] text-black">
                    <div className="container mx-auto">
                        <div className="-mx-4 flex flex-wrap">
                            <div className="w-full px-4 lg:w-5/12">
                                <div className="hero-content">
                                    <h1
                                        className="mb-3 text-4xl font-bold leading-snug text-dark sm:text-[42px] lg:text-[40px] xl:text-[60px]"
                                    >
                                        Get The <span className="text-blue-500">Right Job</span> <br/>
                                        You Deserve
                                    </h1>
                                    <p className="mb-8 max-w-[480px] text-base text-black">
                                        With TailGrids, business and students thrive together. Business
                                        can perfectly match their staffing to changing demand throughout
                                        the dayed.
                                    </p>
                                    <ul className="flex flex-wrap items-center gap-8">
                                        <li>
                                            <Link
                                                href="#"
                                                className="inline-flex items-center justify-center rounded-lg bg-blue-700 py-4 px-6 text-center text-base font-normal text-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10"
                                            >
                                                Get Started
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#"
                                                className="inline-flex text-blue-800 items-center justify-center py-4 px-6 rounded-lg border-2 border-blue-500 text-center text-base font-normal text-body-color hover:text-primary sm:px-10 lg:px-8 xl:px-10"
                                            >
                                                <span className="mr-2 text-blue-800">
                                                    <HiArrowDownTray className="text-2xl"/>
                                                </span>
                                                Upload CV
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="clients pt-16">
                                        <div className="mt-10 flex items-center justify-center gap-x-6">
                                            <div className="flex bg-white shadow-lg shadow-slate-300 max-sm:w-full w-screen sm:ml- md:ml-2 xl:ml-28 h-[70px] rounded-[85px] max-sm:ml-3">
                                                <div className="mr-6 flex justify-center text-center items-center gap-x-6 ">
                                                    <button className="flex text-base max-sm:w-full w-[228px] sm:text-[14px] max-sm:text-[11px] font-semibold leading-6 text-gray-900/30 justify-center items-center"> <HiMagnifyingGlass className="ml-2 text-2xl max-sm:mr-1 mr-3" /> Search Title or Keyword </button>
                                                </div>
                                                <div className="ml-6 flex justify-center text-center items-center gap-x-6">
                                                    <button className="border-l max-sm:w-full w-[228px] flex sm:text-[14px] max-sm:text-[11px] text-base font-semibold leading-6 text-gray-900/30 justify-center items-center"> <HiOutlineMapPin className="ml-2 text-2xl mr-3" /> Search Location </button>
                                                </div>
                                                <div className="lg:flex lg:flex-1 lg:justify-end text-center ">
                                                    <button
                                                        className="block bg-blue-500 text-white text-center items-center rounded-[85px] sm:py-5 sm:justify-end sm:flex px-9 max-sm:ml-6 mr-3 py-1 max-sm:px-6 h-12 mt-3 text-lg font-semibold  hover:bg-blue-900"
                                                    >Search</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden px-2 lg:block lg:w-1/12"></div>
                            <div className="w-full px-4 lg:w-6/12">
                                <div className="lg:ml-auto lg:text-right">
                                    <div className="relative z-10 inline-block pt-11 lg:pt-0">
                                        <Image
                                            src={hero}
                                            alt="hero"
                                            className="max-w-full lg:ml-auto"
                                        />
                                        <span className="absolute -left-8 -bottom-8 z-[-1]">
                                            <svg
                                            width="93"
                                            height="93"
                                            viewBox="0 0 93 93"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                                            <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                                            <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                                            <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                                            <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                                            <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                                            <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                                            <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                                            <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                                            <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                                            <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                                            <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                                            <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                                            <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                                            <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                                            <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                                            <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                                            <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                                            <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                                            <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                                            <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                                            <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                                            <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                                            <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                                            <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* Hero Section End */}

        </div>

    );
}