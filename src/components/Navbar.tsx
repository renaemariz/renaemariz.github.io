"use client";
import React, { useState } from "react";
import { useTheme } from "../providers/ThemeProvider";
import Link from "next/link";
import { fadeIn } from "@/lib/motions";
import { motion } from "framer-motion";
interface NavbarProps {
  activeNav: string;
}
export default function Navbar({ activeNav }: NavbarProps) {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = ["About", "Experience", "Projects", "Skills", "Contact"];
  return (
    <nav className="fixed top-0 left-0 w-full z-100 py-4 bg-nav-bg border-b border-slate-100 dark:border-zinc-900">
      <div className="container mx-auto px-2 flex items-center justify-between gap-1 md:gap-2">
        {/* LOGO */}
        <Link href="/" className="text-lg font-bold text-main uppercase">
          RENAE CARINO
        </Link>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex gap-10 mr-4">
            {links.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`${activeNav == item.toLowerCase() ? "text-indigo-400" : "text-main"} text-[11px] font-bold uppercase tracking-[0.2em] hover:text-indigo-600  dark:hover:text-white `}
                replace
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1 border-l border-slate-200 dark:border-zinc-800 pl-4 md:pl-6">
            {/* THEME TOGGLE BUTTON */}
            <button
              onClick={toggleTheme}
              className="p-2.5 text-slate-600 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-xl transition-all active:scale-90"
              aria-label="Toggle Theme"
            >
              {isDark ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m0 13.5V21m8.966-8.966h-2.25m-13.5 0h-2.25m15.356-6.403l-1.591 1.591M6.75 17.25l-1.591 1.591m12.727 0l-1.591-1.591M6.75 6.75L5.159 5.159M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              )}
            </button>

            {/* HAMBURGER (Mobile Only) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2.5 text-slate-600 dark:text-zinc-200 rounded-xl hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isMenuOpen && (
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-zinc-950 border-b border-slate-100 dark:border-zinc-900 p-6 flex flex-col gap-6 shadow-xl animate-in fade-in slide-in-from-top-4 transition-colors"
        >
          {links.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-bold uppercase tracking-widest ${activeNav == item.toLowerCase() ? "text-indigo-400" : "text-main"}`}
              onClick={() => setIsMenuOpen(false)}
              replace
            >
              {item}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
