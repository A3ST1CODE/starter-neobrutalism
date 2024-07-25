"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/button";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white p-4 border-b-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] fixed top-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold text-black">
                    <Link href="/">Neobrutalism</Link>
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link
                        href="/"
                        className="text-black font-bold transition-transform transform hover:underline"
                    >
                        Home
                    </Link>
                </div>
                <div className="md:hidden flex items-center">
                    <Button onClick={toggleMenu} variant="blue" size="sm">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={
                                    isOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16M4 18h16"
                                }
                            ></path>
                        </svg>
                    </Button>
                </div>
            </div>
            <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
                <Link
                    href="/"
                    className="block text-black font-bold py-2 px-4 transition-transform transform hover:underline"
                >
                    Home
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
