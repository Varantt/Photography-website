import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Hero } from "../hero/Hero";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const categoryDropdownItems = [
    { name: "Wedding", id: 1 },
    { name: "Kids", id: 2 },
  ];

  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <header id="header" className="min-h-svh">
      <div className="header-content  max-w-none md:max-w-default m-auto">
        <Navbar categoryDropdownItems={categoryDropdownItems} />
        {isHome && <Hero />}
      </div>
    </header>
  );
};

export default Header;
