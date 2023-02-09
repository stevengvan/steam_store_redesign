import React, { useState } from "react";
import { FaSteam } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { ImHome } from "react-icons/im";
import { BiCategory } from "react-icons/bi";
import { GiDramaMasks } from "react-icons/gi";
import { BsListTask } from "react-icons/bs";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [current, setCurrent] = useState("home");
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
          <li
            className={
              current === "home"
                ? "navbar-list-item current-item"
                : "navbar-list-item"
            }
            onClick={() => {
              setCurrent("home");
              setDropdown("");
              setDropdownItem("");
            }}
          >
            <ImHome />
            <h4>Home</h4>
          </li>

          <li onClick={() => setDropdown("categories")}>
            <div
              className={
                current === "categories"
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
                    setCurrent("categories");
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
                    setCurrent("categories");
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
                    setCurrent("categories");
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
                    setCurrent("categories");
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
                    setCurrent("categories");
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
                current === "genres"
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
                    dropdownItem === "role playing"
                      ? "menu-dropdown-item current-dropdown"
                      : "menu-dropdown-item"
                  }
                  onClick={() => {
                    setDropdownItem("role playing");
                    setCurrent("genres");
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
                    setCurrent("genres");
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
                    setCurrent("genres");
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
                    setCurrent("genres");
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
                    setCurrent("genres");
                  }}
                >
                  Horror
                </li>
              </ul>
            )}
          </li>

          <li
            className={
              current === "wishlist"
                ? "navbar-list-item current-item"
                : "navbar-list-item"
            }
            onClick={() => {
              setCurrent("wishlist");
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
