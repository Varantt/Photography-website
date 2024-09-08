import { useRef } from "react";

import { Link } from "react-router-dom";
import { NavbarProps } from "@/models/types";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import "./Navbar.css";
// inc components
import HeaderDropdown from "../header-dropdown/HeaderDropdown";

export const Navbar: React.FC<NavbarProps> = ({ categoryDropdownItems }) => {
  const categoryNavItem = useRef<HTMLDivElement>(null);

  return (
    <div id="navbar-wrapper" className="pt-4 ">
      <nav
        id="navbar"
        className="flex py-4 bg-primary  justify-between bg-opacity-55 rounded-default"
      >
        {" "}
        <div className="menu flex  gap-default">
          <div className="nav-item hover:text-terciary ">
            <Link to="/projects">Projects</Link>
          </div>
          <div className="nav-item hover:text-terciary " ref={categoryNavItem}>
            <Link to="/categories" className="category-dropdown-item">
              Categories
            </Link>
            <HeaderDropdown
              linkedNavItem={categoryNavItem}
              data={categoryDropdownItems}
            />
          </div>
        </div>
        <div className="social-icons flex justify-end gap-default">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"

            className = "hover:text-terciary"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className = "hover:text-terciary"
          >
            <InstagramIcon />
          </a>
        </div>
      </nav>
    </div>
  );
};
