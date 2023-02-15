import React, { useState } from "react";
import { useStateContext } from "@/context/StateContext";
import Link from "next/link";
import { FaSteam } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { ImHome } from "react-icons/im";
import { BiCategory } from "react-icons/bi";
import { GiDramaMasks } from "react-icons/gi";
import { BsListTask } from "react-icons/bs";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Navbar = () => {
  const { menu, setMenu } = useStateContext();
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState("");
  const [dropdownItem, setDropdownItem] = useState("");

  return (
    <nav
      className={toggle ? "navbar-container show-navbar" : "navbar-container"}
    >
      <div className="navbar-menu">
        <div className="navbar-header">
          <FaSteam />
          <span>Steam</span>
          <AiOutlineClose onClick={() => setToggle(false)} />
        </div>

        <ul className="navbar-list">
          <Link href="/">
            <li
              className={
                menu === "/"
                  ? "navbar-list-item current-item"
                  : "navbar-list-item"
              }
              onClick={() => {
                setMenu("/");
                setDropdown("");
                setDropdownItem("");
              }}
            >
              <ImHome />
              <h4>Home</h4>
            </li>
          </Link>

          <li onClick={() => setDropdown("categories")}>
            <div
              className={
                menu.includes("categories")
                  ? "navbar-list-item current-item"
                  : "navbar-list-item"
              }
            >
              <BiCategory />
              <h4>Categories</h4>
              {dropdown === "categories" ? (
                <MdKeyboardArrowUp size={25} />
              ) : (
                <MdKeyboardArrowDown size={25} />
              )}
            </div>

            {dropdown === "categories" && (
              <ul className="menu-dropdown-list">
                <li
                  className={
                    dropdownItem === "singleplayer"
                      ? "menu-dropdown-item current-dropdown"
                      : "menu-dropdown-item"
                  }
                  onClick={() => {
                    setDropdownItem("singleplayer");
                    setMenu("categories/singleplayer");
                  }}
                >
                  Singleplayer
                </li>
                <li
                  className={
                    dropdownItem === "multiplayer"
                      ? "menu-dropdown-item current-dropdown"
                      : "menu-dropdown-item"
                  }
                  onClick={() => {
                    setDropdownItem("multiplayer");
                    setMenu("categories/multiplayer");
                  }}
                >
                  Multiplayer
                </li>
                <li
                  className={
                    dropdownItem === "vr games"
                      ? "menu-dropdown-item current-dropdown"
                      : "menu-dropdown-item"
                  }
                  onClick={() => {
                    setDropdownItem("vr games");
                    setMenu("categories/vr_games");
                  }}
                >
                  VR Games
                </li>
                <li
                  className={
                    dropdownItem === "software"
                      ? "menu-dropdown-item current-dropdown"
                      : "menu-dropdown-item"
                  }
                  onClick={() => {
                    setDropdownItem("software");
                    setMenu("categories/software");
                  }}
                >
                  Software
                </li>
                <li
                  className={
                    dropdownItem === "cross platform"
                      ? "menu-dropdown-item current-dropdown"
                      : "menu-dropdown-item"
                  }
                  onClick={() => {
                    setDropdownItem("cross platform");
                    setMenu("categories/cross_platform");
                  }}
                >
                  Cross Platform
                </li>
              </ul>
            )}
          </li>

          <li onClick={() => setDropdown("genres")}>
            <div
              className={
                menu.includes("genres")
                  ? "navbar-list-item current-item"
                  : "navbar-list-item"
              }
            >
              <GiDramaMasks />
              <h4>Genres</h4>
              {dropdown === "genres" ? (
                <MdKeyboardArrowUp size={25} />
              ) : (
                <MdKeyboardArrowDown size={25} />
              )}
            </div>

            {dropdown === "genres" && (
              <ul className="menu-dropdown-list">
                <li
                  className={
                    dropdownItem === "roleplaying"
                      ? "menu-dropdown-item current-dropdown"
                      : "menu-dropdown-item"
                  }
                  onClick={() => {
                    setDropdownItem("roleplaying");
                    setMenu("genres/roleplaying");
                  }}
                >
                  Role Playing
                </li>
                <li
                  className={
                    dropdownItem === "shooter"
                      ? "menu-dropdown-item current-dropdown"
                      : "menu-dropdown-item"
                  }
                  onClick={() => {
                    setDropdownItem("shooter");
                    setMenu("genres/shooter");
                  }}
                >
                  Shooter
                </li>
                <li
                  className={
                    dropdownItem === "action"
                      ? "menu-dropdown-item current-dropdown"
                      : "menu-dropdown-item"
                  }
                  onClick={() => {
                    setDropdown("action");
                    setMenu("genres/action");
                  }}
                >
                  Action
                </li>
                <li
                  className={
                    dropdownItem === "stealth"
                      ? "menu-dropdown-item current-dropdown"
                      : "menu-dropdown-item"
                  }
                  onClick={() => {
                    setDropdownItem("stealth");
                    setMenu("genres/stealth");
                  }}
                >
                  Stealth
                </li>
                <li
                  className={
                    dropdownItem === "horror"
                      ? "menu-dropdown-item current-dropdown"
                      : "menu-dropdown-item"
                  }
                  onClick={() => {
                    setDropdownItem("horror");
                    setMenu("genres/horror");
                  }}
                >
                  Horror
                </li>
              </ul>
            )}
          </li>

          <li
            className={
              menu === "wishlist"
                ? "navbar-list-item current-item"
                : "navbar-list-item"
            }
            onClick={() => {
              setMenu("wishlist");
              setDropdown("");
              setDropdownItem("");
            }}
          >
            <BsListTask />
            <h4>Wishlist</h4>
          </li>
        </ul>

        <div className="navbar-setting">
          <div className="profile-picture" />
          <h4>thelegend27thelegend27</h4>
        </div>
      </div>

      <button className="navbar-toggle" onClick={() => setToggle(!toggle)}>
        {toggle ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </button>
    </nav>
  );
};

export default Navbar;
