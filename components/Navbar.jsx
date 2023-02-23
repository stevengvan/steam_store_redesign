import React, { useState } from "react";
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
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState("");

  return (
    <nav
      className={toggle ? "navbar-container show-navbar" : "navbar-container"}
    >
      <div className="navbar-menu">
        <div className="navbar-header">
          <FaSteam title="Steam logo" />
          <h1>Steam</h1>
          <AiOutlineClose
            title="close button"
            onClick={() => setToggle(false)}
          />
        </div>

        <ul className="navbar-list">
          <Link href="/">
            <li
              tabIndex={0}
              className={
                router.pathname === "/"
                  ? "navbar-list-item current-item"
                  : "navbar-list-item"
              }
              onClick={() => {
                setDropdown("");
                setToggle(false);
              }}
            >
              <ImHome title="home icon" />
              <h4>Home</h4>
            </li>
          </Link>

          <li>
            <div className="navbar-dropdown-con">
              <Link href="/categories">
                <div
                  className={
                    router.pathname.includes("categories") && !slug
                      ? "navbar-list-item current-item"
                      : "navbar-list-item"
                  }
                >
                  <BiCategory title="categories icon" />
                  <h4>Categories</h4>
                </div>
              </Link>
              {dropdown === "categories" ? (
                <MdKeyboardArrowUp
                  title="hide categories dropdown"
                  size={25}
                  onClick={
                    router.pathname.includes("categories") && slug
                      ? () => ""
                      : () => setDropdown("")
                  }
                />
              ) : (
                <MdKeyboardArrowDown
                  title="show categories dropdown"
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
                  onClick={() => setToggle(false)}
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
                  onClick={() => setToggle(false)}
                >
                  <li>Multiplayer</li>
                </Link>

                <Link
                  className={
                    slug && slug === "vr_games"
                      ? "menu-dropdown-item current-dropdown"
                      : "menu-dropdown-item"
                  }
                  href="/categories/vr_games"
                  onClick={() => setToggle(false)}
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
                  onClick={() => setToggle(false)}
                >
                  <li>Software</li>
                </Link>

                <Link
                  className={
                    slug && slug === "cross_platform"
                      ? "menu-dropdown-item current-dropdown"
                      : "menu-dropdown-item"
                  }
                  href="/categories/cross_platform"
                  onClick={() => setToggle(false)}
                >
                  <li>Cross Platform</li>
                </Link>
              </ul>
            )}
          </li>

          <li>
            <div className="navbar-dropdown-con">
              <Link href="/genres">
                <div
                  className={
                    router.pathname.includes("genres") && !slug
                      ? "navbar-list-item current-item"
                      : "navbar-list-item"
                  }
                >
                  <GiDramaMasks title="genres icon" />
                  <h4>Genres</h4>
                </div>
              </Link>

              {dropdown === "genres" ? (
                <MdKeyboardArrowUp
                  title="hide genres dropdown"
                  size={25}
                  tabIndex={0}
                  onClick={() => setDropdown("")}
                />
              ) : (
                <MdKeyboardArrowDown
                  title="show genres dropdown"
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
                <Link
                  href="/genres/roleplaying"
                  className={
                    slug && slug === "roleplaying"
                      ? "menu-dropdown-item current-dropdown"
                      : "menu-dropdown-item"
                  }
                >
                  <li>Role Playing</li>
                </Link>

                <Link
                  href="/genres/shooter"
                  className={
                    slug && slug === "shooter"
                      ? "menu-dropdown-item current-dropdown"
                      : "menu-dropdown-item"
                  }
                >
                  <li>Shooter</li>
                </Link>

                <Link
                  href="/genres/action"
                  className={
                    slug && slug === "action"
                      ? "menu-dropdown-item current-dropdown"
                      : "menu-dropdown-item"
                  }
                >
                  <li>Action</li>
                </Link>

                <Link
                  href="/genres/stealth"
                  className={
                    slug && slug === "stealth"
                      ? "menu-dropdown-item current-dropdown"
                      : "menu-dropdown-item"
                  }
                >
                  <li>Stealth</li>
                </Link>

                <Link
                  href="/genres/horror"
                  className={
                    slug && slug === "horror"
                      ? "menu-dropdown-item current-dropdown"
                      : "menu-dropdown-item"
                  }
                >
                  <li>Horror</li>
                </Link>
              </ul>
            )}
          </li>

          <Link href="/wishlist">
            <li
              tabIndex={0}
              className={
                router.pathname.includes("wishlist")
                  ? "navbar-list-item current-item"
                  : "navbar-list-item"
              }
              onClick={() => {
                setDropdown("");
                setToggle(false);
              }}
            >
              <BsListTask title="wishlist icon" />
              <h4>Wishlist</h4>
            </li>
          </Link>
        </ul>

        <div className="navbar-setting">
          <div className="profile-picture" />
          <h4>thelegend27thelegend27</h4>
        </div>
      </div>

      <button className="navbar-toggle" onClick={() => setToggle(!toggle)}>
        {toggle ? (
          <MdKeyboardArrowUp title="hide navigation bar" />
        ) : (
          <MdKeyboardArrowDown title="show navigation bar" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
