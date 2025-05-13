"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-light/20">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <i className="bx bx-building-house text-2xl text-primary group-hover:scale-110 transition-transform"></i>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-black group-hover:text-primary transition-colors leading-tight">
                AirBnB-Home-Rents
              </span>
              <span className="text-xs text-light font-light">Find Your Dream Home</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/search"
              className="text-black hover:text-primary transition-colors text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
            >
              Browse Properties
            </Link>
            <Link
              href="/post-property"
              className="text-black hover:text-primary transition-colors text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
            >
              Post Property
            </Link>
            <Link
              href="/saved"
              className="text-black hover:text-primary transition-colors text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
            >
              Saved
            </Link>
          </div>

          {/* Account Menu */}
          <div className="hidden lg:block relative">
            <button
              onClick={() => setIsAccountOpen(!isAccountOpen)}
              className="flex items-center gap-2 bg-primary text-white px-4 py-[14px] rounded-lg hover:bg-black transition-all text-sm font-medium shadow-sm hover:shadow-md group"
            >
              <i className="bx bx-user-circle text-base group-hover:scale-110 transition-transform"></i>
              <span>Account</span>
              <i
                className={`bx bx-chevron-${
                  isAccountOpen ? "up" : "down"
                } text-base transition-transform duration-300`}
              ></i>
            </button>

            {isAccountOpen && (
              <div className="absolute right-0 mt-2 w-52 bg-white rounded-lg shadow-lg py-2 border border-light/20 animate-fadeIn">
                <div className="px-3 py-2 border-b border-light/20">
                  <p className="text-sm font-medium text-black">Welcome!</p>
                  <p className="text-xs text-light">Sign in to access your account</p>
                </div>
                <Link
                  href="/login"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-black hover:bg-primary/5 hover:text-primary transition-colors"
                >
                  <i className="bx bx-log-in text-base"></i>
                  <span>Login</span>
                </Link>
                <Link
                  href="/register"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-black hover:bg-primary/5 hover:text-primary transition-colors"
                >
                  <i className="bx bx-user-plus text-base"></i>
                  <span>Register</span>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl text-black hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`bx bx-${isMenuOpen ? "x" : "menu"}`}></i>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-light/20 animate-fadeIn">
            <div className="flex flex-col gap-4">
              <Link
                href="/search"
                className="flex items-center gap-2 text-sm text-black hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-primary/5 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="bx bx-search text-lg"></i>
                <span>Browse Properties</span>
              </Link>
              <Link
                href="/post-property"
                className="flex items-center gap-2 text-sm text-black hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-primary/5 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="bx bx-plus-circle text-lg"></i>
                <span>Post Property</span>
              </Link>
              <Link
                href="/saved"
                className="flex items-center gap-2 text-sm text-black hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-primary/5 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="bx bx-bookmark text-lg"></i>
                <span>Saved</span>
              </Link>
              <div className="pt-4 border-t border-light/20 mt-2">
                <Link
                  href="/login"
                  className="flex items-center gap-2 text-sm text-black hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-primary/5 rounded-lg mb-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="bx bx-log-in text-lg"></i>
                  <span>Login</span>
                </Link>
                <Link
                  href="/register"
                  className="flex items-center gap-2 text-sm text-black hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-primary/5 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="bx bx-user-plus text-lg"></i>
                  <span>Register</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
