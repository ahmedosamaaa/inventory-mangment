"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";
import { Bell, Menu, Moon, Settings, Sun } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    const dispatch = useAppDispatch();

    const isSidebarCollapsed = useAppSelector(
        (state) => state.global.isSidebarCollapsed
    );
    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

    const toggleSidebar = () => {
        dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
    };
    const toggleDarkMode = () => {
        dispatch(setIsDarkMode(!isDarkMode));
    };
    return (
        <div className="flex justify-between items-center w-full mb-7 gap-4">
            {/* Left */}
            <div className="flex justify-between items-center gap-5">
                <button
                    className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
                    onClick={toggleSidebar}
                >
                    <Menu />
                </button>

                <div className="relative">
                    <input
                        type="search"
                        placeholder="Start type to search groups & products"
                        className="border border-1 rounded-md pl-10 pr-4 py-2 w-56 md:w-48 lg:w-60 border-gray-300 bg-white focus:outline-none focus:border-blue-500"
                    />
                    <div className="absolute inset-y-0 flex justify-center items-center left-0 pl-3 pointer-events-none ">
                        <Bell className="text-gray-500" size={20} />
                    </div>
                </div>
            </div>

            {/* Right */}
            <div className="flex justify-between items-center gap-5">
                <div className="hidden md:flex justify-between items-center gap-5">
                    <div>
                        <button onClick={toggleDarkMode}>
                            {isDarkMode ? (
                                <Sun
                                    className="cursor-pointer text-gray-500"
                                    size={24}
                                />
                            ) : (
                                <Moon
                                    className="cursor-pointer text-gray-500"
                                    size={24}
                                />
                            )}
                        </button>
                    </div>
                    <div className="relative">
                        <Bell
                            className="cursor-pointer text-gray-500"
                            size={24}
                        />
                        <span className="absolute inline-flex justify-center -top-2 -right-2 rounded-full bg-red-400 px-[0.4rem] py-1 text-sm font-semibold leading-none text-red-100 ">
                            3
                        </span>
                    </div>
                    <hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3" />
                    <div className="flex items-center gap-3 cursor-pointer">
                        <div className="w-9 h-9">image</div>
                        <span className="font-semibold">Osama</span>
                    </div>
                </div>
                <Link href="/settings">
                    <Settings className="text-gray-500" size={24} />
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
