"use client";
import Link from "next/link";
import React, { useState } from "react";
import { PATHS } from "@/constant/Paths";
import { usePathname } from "next/navigation";
import { Menu } from "@/ui/icons";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { title: "Home", href: PATHS.HOME },
    { title: "About us", href: PATHS.ABOUT },
    { title: "Portfolio", href: PATHS.PORTFOLIO },
    { title: "News", href: PATHS.NEWS },
    { title: "Contact us", href: PATHS.CONTACT },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="relative z-50 text-white">
      <div className="flex justify-between items-center p-4">
        <div className="text-3xl uppercase font-extrabold">Logo</div>
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
           <Menu isMenuOpen={isMenuOpen}/>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-20 text-[16px] font-bold">
          {navItems.map(({ title, href }) => (
            <li key={href} className="relative inline-block text-center">
              <Link
                href={href}
                className={`${pathname === href ? "text-[#DC7000]" : ""}`}
              >
                {title}
              </Link>
              {pathname === href && (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 flex items-center space-x-2">
                  <div className="w-9 h-1 bg-[#DC7000] rounded-full"></div>
                  <div className="w-1 h-1 bg-[#DC7000] rounded-full"></div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu with Slide Animation */}
      <div
        className={`md:hidden overflow-hidden bg-[#39289F] transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-[500px] py-6 z-20" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-[16px] font-bold">
          {navItems.map(({ title, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className={`${
                pathname === href ? "text-[#DC7000]" : ""
              } hover:text-[#DC7000]`}
            >
              {title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
