import React from "react";

const Menu = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#eee"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 transition-all duration-300 ease-in-out"
    >
      {!isMenuOpen ? (
        <>
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      ) : (
        <>
          <line x1="4.5" y1="4.5" x2="19.5" y2="19.5" />
          <line x1="19.5" y1="4.5" x2="4.5" y2="19.5" />
        </>
      )}
    </svg>
  );
};

export default Menu;
