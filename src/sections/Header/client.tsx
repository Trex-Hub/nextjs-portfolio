"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex w-3/4">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-blue-500 text-2xl font-bold">
                D
              </Link>
            </div>
            <nav className="hidden sm:flex sm:space-x-8 w-full justify-around">
              <Link
                href="/"
                className="border-transparent  text-black-500 hover:text-blue-500 inline-flex items-center px-1   border-b-2 text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="border-transparent  text-black-500 hover:text-blue-500 inline-flex items-center px-1   border-b-2 text-sm font-medium"
              >
                Projects
              </Link>
              <Link
                href="/blogs"
                className="border-transparent  text-black-500 hover:text-blue-500 inline-flex items-center px-1   border-b-2 text-sm font-medium"
              >
                Blogs
              </Link>
              <Link
                href="/contact"
                className="border-transparent  text-black-500 hover:text-blue-500 inline-flex items-center px-1   border-b-2 text-sm font-medium"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover: text-black-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              <AnimatePresence initial={false} mode="wait">
                {isMenuOpen ? (
                  <motion.svg
                    key="close"
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 180 }}
                    exit={{ rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="menu"
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    initial={{ rotate: 180 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </motion.svg>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="sm:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-black-500 hover:bg-gray-50  hover:text-blue-500"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-black-500 hover:bg-gray-50  hover:text-blue-500"
              >
                Projects
              </Link>
              <Link
                href="/blogs"
                className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-black-500 hover:bg-gray-50  hover:text-blue-500"
              >
                Blogs
              </Link>
              <Link
                href="/contact"
                className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-black-500 hover:bg-gray-50  hover:text-blue-500"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
