import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { MENU_ITEMS } from "../libs/constants";
import RMILogo from "../assets/images/rmi-icon-white.png";
import RMILogo2 from "../assets/images/rmi-header-white.png";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  UserRoundPen,
  MessageSquareDot,
  ListTodo,
  Settings,
  Text,
  LogOut,
} from "lucide-react";

const Navigation = () => {
  const [navStatus, setNavStatus] = useState(false);

  const menuIcons = {
    0: <Text />,
    1: <ListTodo />,
    2: <UserRoundPen />,
    3: <MessageSquareDot />,
    4: <Settings />,
  };

  function toggleState() {
    setNavStatus((prevState) => !prevState);
  }

  function textState(navStatus) {
    return navStatus ? "visible" : "hidden";
  }

  return (
    <nav
      className={`${
        navStatus ? "w-56" : "w-20"
      } h-full flex flex-col items-center justify-between py-4 px-2`}
    >
      <img
        className={`${navStatus ? "p-4" : "p-2"}`}
        src={`${navStatus ? RMILogo : RMILogo2}`}
        alt="Readyman, Inc."
      />
      <ul className="w-full">
        <button
          onClick={toggleState}
          className="flex items-center justify-center gap-2 w-full p-2 mb-2"
        >
          <p className={textState(navStatus)}>Navigation</p>
          {navStatus ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </button>
        {MENU_ITEMS.menu.map((item) => {
          return (
            <li key={item.id}>
              <NavLink
                to={item.link}
                className={({ isActive, isPending }) =>
                  `${
                    isActive
                      ? "bg-scd-clr text-prm-clr rounded-md shadow-lg font-semibold"
                      : isPending
                      ? "bg-acn-clr text-prm-clr/30 rounded-md shadow-lg font-semibold"
                      : "bg-prm-clr text-scd-clr"
                  }
                  
                  flex gap-2 my-2 
                  
                  ${
                    navStatus
                      ? "flex-row px-4 py-2 "
                      : "flex-col items-center py-2"
                  }

                  `
                }
              >
                {menuIcons[item.id]}
                <p className={`${navStatus ? "text-md" : "text-xs "}`}>
                  {item.name}
                </p>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <Link
        to="/"
        className="w-full bg-scd-clr text-prm-clr flex justify-center gap-2 p-2 rounded-lg shadow-md"
      >
        <LogOut />
        <p className={textState(navStatus)}>Log Out</p>
      </Link>
    </nav>
  );
};

export default Navigation;
