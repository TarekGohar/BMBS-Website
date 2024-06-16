"use client";

import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { useState } from "react";

// Implement responsive navbar with hamburger button

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <nav className="flex py-8 px-8 md:px-4 items-center justify-between font-light text-white shadow-md">
        {/* Logo Button */}
        <Link href="/">
          <button draggable>
            <Image
              src="/images/logo.png"
              alt="Logo"
              height={400}
              width={400}
              draggable
              className="object-contain w-60"
            />
          </button>
        </Link>

        {/* Menu */}
        <div className="hidden pl-10 h-10 font-normal md:flex md:space-x-4 lg:space-x-16 items-center">
          <div className="group">
            <Link href="/about">About</Link>
            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>

          <div className="group">
            <Link href="/careers">Services</Link>
            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>

          <div className="group">
            <Link href="/contact">Contact</Link>
            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>
          <div className="group">
            <Link href="/book-now">
              <button className="btn-white">Book Now</button>
            </Link>
          </div>
        </div>

        {/* Hamburger button */}
        <div className="md:hidden">
          <button
            id="menu-btn"
            className={`${
              menu ? "open" : "none" // enables/disables styling for hamburger button
            } z-40 block hamburger md:hidden focus:outline-none`}
            onClick={() => setMenu((prev) => !prev)}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </nav>

      <div
        id="menu"
        className={`${
          menu ? "flex" : "hidden" // opens menu or hides it on click of hamburger button
        } absolute top-0 bottom-0 left-0 flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-black uppercase opacity-90 bg-white`}
      >
        <Link href="/about" className="hover:text-pink-500">
          About
        </Link>
        <Link href="/careers" className="hover:text-pink-500">
          Services
        </Link>
        <Link href="#" className="hover:text-pink-500">
          Contact
        </Link>
      </div>
    </>
  );
}