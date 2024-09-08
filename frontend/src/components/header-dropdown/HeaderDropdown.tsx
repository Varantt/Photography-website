import { useState, useEffect } from "react";
import {
  HeaderDropdownProps,
  DropdownItem,
  HeaderDropdownStyle,
} from "../../models/types";
import { Link } from "react-router-dom";
import "./HeaderDropdown.css";

const HeaderDropdown: React.FC<HeaderDropdownProps> = ({
  linkedNavItem,
  data,
}) => {
  const [isLinkedNavItemHovered, setIsLinkedNavItemHovered] =
    useState<boolean>(false);

  const defaultStyles: HeaderDropdownStyle = {
    visibility: "hidden",
    opacity: "0",
    transform: "translateY(-10px) scale(0.98)",
  };

  const hoveredStyles: HeaderDropdownStyle = {
    visibility: "visible",
    opacity: "1",
    transform: "translateY(0) scale(1)",
  };

  useEffect(() => {
    const handleMouseEnter = () => setIsLinkedNavItemHovered(true);
    const handleMouseLeave = () => setIsLinkedNavItemHovered(false);

    const linkedNavItemCurrent = linkedNavItem.current;
    if (linkedNavItemCurrent) {
      linkedNavItemCurrent.addEventListener("mouseenter", handleMouseEnter);
      linkedNavItemCurrent.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (linkedNavItemCurrent) {
        linkedNavItemCurrent.removeEventListener(
          "mouseenter",
          handleMouseEnter
        );
        linkedNavItemCurrent.removeEventListener(
          "mouseleave",
          handleMouseLeave
        );
      }
    };
  }, [linkedNavItem]);

  const formattedID: string | undefined = linkedNavItem.current?.textContent
    ?.split(" ")
    .join("-")
    .toLowerCase();
  return (
    <div
      id={`dropdown-${formattedID}`}
      className="category-dropdown mt-2 w-auto rounded-default bg-dark p-4 absolute  top-[100%]"
      style={isLinkedNavItemHovered ? hoveredStyles : defaultStyles}
    >
      {data.map((item: DropdownItem) => {
        const { name, id } = item;
        return (
          <div key={`dropdown-${formattedID}-item-${id}`} className="group">
            <Link
              to={`/category/${id}`}
              className="text-primary group-hover:text-terciary dropdown-item"
            >
              {name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default HeaderDropdown;
