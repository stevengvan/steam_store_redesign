import React, { useState } from "react";
import { useStateContext } from "@/context/StateContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaSteam } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { ImHome } from "react-icons/im";
import { BiCategory } from "react-icons/bi";
import { GiDramaMasks } from "react-icons/gi";
import { BsListTask } from "react-icons/bs";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Navbar = () => {
  const router = useRouter();
  const { slug } = router.query;
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
                router.pathname === "/"
                  ? "navbar-list-item current-item"
                  : "navbar-list-item"
              }
              onClick={() => {
                setDropdown("");
                setDropdownItem("");
              }}
            >
              <ImHome />
              <h4>Home</h4>
            </li>
          </Link>

          <li>
            <div className="navbar-dropdown-con">
              <div
                className={
                  router.pathname.includes("categories") && !slug
                    ? "navbar-list-item current-item"
                    : "navbar-list-item"
                }
                onClick={() => setMenu("categories")}
              >
                <BiCategory />
                <h4>Categories</h4>
              </div>
              {dropdown === "categories" ? (
                <MdKeyboardArrowUp
                  size={25}
                  onClick={
                    router.pathname.includes("categories") && slug
                      ? () => ""
                      : () => setDropdown("")
                  }
                />
              ) : (
                <MdKeyboardArrowDown
                  size={25}
                  onClick={() => setDropdown("categories")}
                />
              )}
            </div>

            {(dropdown === "categories" ||
              (router.pathname.includes("categories") && slug)) && (
              <ul className="menu-dropdown-list">
                <Link
                  className={
                    slug && slug === "singleplayer"
                      ? "menu-dropdown-item current-dropdown"
                      : "menu-dropdown-item"
                  }
                  href="/categories/singleplayer"
                >
                  <li>Singleplayer</li>
                </Link>

                <Link
                  className={
                    slug && slug === "multiplayer"
                      ? "menu-dropdown-item current-dropdown"
                      : "menu-dropdown-item"
                  }
                  href="/categories/multiplayer"
                >
                  <li>Multiplayer</li>
                </Link>

                <Link
                  className={
                    slug && slug === "vr games"
                      ? "menu-dropdown-item current-dropdown"
                      : "menu-dropdown-item"
                  }
                  href="/categories/vr_games"
                >
                  <li>VR Games</li>
                </Link>

                <Link
                  className={
                    slug && slug === "software"
                      ? "menu-dropdown-item current-dropdown"
                      : "menu-dropdown-item"
                  }
                  href="/categories/software"
                >
                  <li>Software</li>
                </Link>

                <Link
                  className={
                    slug && slug === "cross platform"
                      ? "menu-dropdown-item current-dropdown"
                      : "menu-dropdown-item"
                  }
                  href="/categories/cross_platform"
                >
                  <li>Cross Platform</li>
                </Link>
              </ul>
            )}
          </li>

          <li>
            <div className="navbar-dropdown-con">
              <div
                className={
                  router.pathname.includes("genres") && !slug
                    ? "navbar-list-item current-item"
                    : "navbar-list-item"
                }
                onClick={() => setMenu("genres")}
              >
                <GiDramaMasks />
                <h4>Genres</h4>
              </div>

              {dropdown === "genres" ? (
                <MdKeyboardArrowUp size={25} onClick={() => setDropdown("")} />
              ) : (
                <MdKeyboardArrowDown
                  size={25}
                  onClick={
                    router.pathname.includes("genres") && slug
                      ? () => ""
                      : () => setDropdown("genres")
                  }
                />
              )}
            </div>

            {(dropdown === "genres" ||
              (router.pathname.includes("genres") && slug)) && (
              <ul className="menu-dropdown-list">
                <li
                  className={
                    slug && slug === "roleplaying"
                      ? "menu-dropdown-item current-dropdown"
                      : "menu-dropdown-item"
                  }
                >
                  Role Playing
                </li>
                <li
                  className={
                    slug && slug === "shooter"
                      ? "menu-dropdown-item current-dropdown"
                      : "menu-dropdown-item"
                  }
                >
                  Shooter
                </li>
                <li
                  className={
                    slug && slug === "action"
                      ? "menu-dropdown-item current-dropdown"
                      : "menu-dropdown-item"
                  }
                >
                  Action
                </li>
                <li
                  className={
                    slug && slug === "stealth"
                      ? "menu-dropdown-item current-dropdown"
                      : "menu-dropdown-item"
                  }
                >
                  Stealth
                </li>
                <li
                  className={
                    slug && slug === "horror"
                      ? "menu-dropdown-item current-dropdown"
                      : "menu-dropdown-item"
                  }
                >
                  Horror
                </li>
              </ul>
            )}
          </li>

          <li
            className={
              router.pathname.includes("wishlist")
                ? "navbar-list-item current-item"
                : "navbar-list-item"
            }
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
