import React, { useEffect, useState, useRef } from "react";
import { logo, notification, search, user, caret } from "../assets/index.js";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { logout } from "../firebase.js";
import { useLocation } from "react-router-dom";
import {
  children,
  manageProfile,
  transferProfile,
  account,
  helpCentre,
} from "../assets/index.js";
const Header = () => {
  const [helmet, setHelmet] = useState("Netflix");
  const [menu, setMenu] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>{helmet}</title>
        <meta name="description" content={``}></meta>
      </Helmet>
      <div
        className="bg w-full px-[50px] z-[1] bg  flex justify-between fixed text-sm background-header"
        ref={navRef}
      >
        <div className=" flex items-center gap-[50px] ">
          <img
            src={logo}
            alt="Netflix logo"
            className="h-[25px] ml-[25px] my-[20px]"
          ></img>
          <ul className="flex gap-[20px]">
            <Link to="/" >
              <li 
                className={`cursor-pointer hover:text-[#b3b3b3] ${useLocation().pathname === '/' ? `text-white font-semibold` : ``}`}
                onClick={() => setHelmet("Home - Netflix")}
              >
                Home
              </li>
            </Link>
            <Link to="/tvshows" >
              <li
                className={`cursor-pointer hover:text-[#b3b3b3] ${useLocation().pathname === '/tvshows' ? `text-white font-semibold` : ``}`}
                onClick={() => setHelmet("TV Shows - Netflix")}
              >
                TV Shows
              </li>
            </Link>
            <Link to="/movies">
              <li
                className={`cursor-pointer hover:text-[#b3b3b3] ${useLocation().pathname === '/movies' ? `text-white font-semibold` : ``}`}
                onClick={() => setHelmet("Movies - Netflix")}
              >
                Movies
              </li>
            </Link>
            <Link to="/new&popular">
              {" "}
              <li
                className={`cursor-pointer hover:text-[#b3b3b3] ${useLocation().pathname === '/new&popular' ? `text-white font-semibold` : ``}`}
                onClick={() => setHelmet("New & Popular - Netflix")}
              >
                New & Popular
              </li>
            </Link>
            <Link to="/mylist">
              {" "}
              <li
                className={`cursor-pointer hover:text-[#b3b3b3] ${useLocation().pathname === '/mylist' ? `text-white font-semibold` : ``}`}
                onClick={() => setHelmet("My List - Netflix")}
              >
                My List
              </li>
            </Link>
            <Link to="/browserbylanguages">
              {" "}
              <li
                className={`cursor-pointer hover:text-[#b3b3b3] ${useLocation().pathname === '/browserbylanguages' ? `text-white font-semibold` : ``}`}
                onClick={() => setHelmet("Browse by Languages - Netflix")}
              >
                Browse by Languages
              </li>
            </Link>
          </ul>
        </div>
        <div className=" flex gap-[20px] items-center">
          <img src={search} alt="search icon" className="cursor-pointer"></img>
          <p>Children</p>
          <img
            src={notification}
            alt="notification icon"
            className="cursor-pointer"
          ></img>
          <div className="flex gap-[5px] items-center">
            <img
              src={user}
              alt=""
              className="w-[32px] h-[32px] cursor-pointer rounded"
            ></img>
            <div class="relative inline-block text-left">
              <div>
                <img
                  src={caret}
                  className={`w-[16px] h-[16px]  ${
                    menu
                      ? `rotate-180 transition ease-in`
                      : `transition ease-out`
                  } hover:ease-linear`}
                  type="button"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={() => setMenu((menu) => !menu)}
                ></img>
              </div>

              <div
                onMouseOver={() => setMenu(true)}
                className="transition duration-500 ease-in-out   absolute right-0 z-10 mt-2 w-48 origin-top-right top-[40px] bg-[rgba(0.0,0,0.9)] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div
                  className={`py-1 ${menu ? `py-2.5 px-1` : `hidden`}`}
                  role="none"
                >
                  <div className="flex gap-[10px] py-[5%] px-[10%]">
                    {" "}
                    <img src={children} className="rounded-md"></img>{" "}
                    <a
                      href="#"
                      class="text-[13px] hover:underline  p-[4%] text-sm text-white text-left"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-0"
                    >
                      Children
                    </a>
                  </div>
                  <div className="flex gap-[10px] py-[1%] px-[10%]">
                    <img src={manageProfile}></img>{" "}
                    <a
                      href="#"
                      class="text-[13px] hover:underline text-sm py-[4%] text-white text-left"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-0"
                    >
                      Manage Profiles
                    </a>
                  </div>
                  <div className="flex gap-[10px] py-[1%] px-[10%]">
                    <img src={transferProfile}></img>{" "}
                    <a
                      href="#"
                      class="text-[13px] hover:underline  py-[4%] text-sm text-white text-left"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-1"
                    >
                      Transfer Profile
                    </a>
                  </div>
                  <div className="flex gap-[10px] py-[1%] px-[10%]">
                    <img src={account}></img>{" "}
                    <a
                      href="#"
                      class="text-[13px] hover:underline text-sm py-[4%] text-white text-left"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-0"
                    >
                      Account
                    </a>
                  </div>
                  <div className="flex gap-[10px] py-[1%] px-[10%]">
                    <img src={helpCentre}></img>{" "}
                    <a
                      href="#"
                      class="text-[13px] hover:underline  py-[4%] text-sm text-white text-left"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-1"
                    >
                      Help Centre
                    </a>
                  </div>
                  <div className="w-full h-[0.2px] my-[4%] bg-[hsla(0,0%,100%,0.25)]"></div>

                  <button
                    onClick={() => logout()}
                    class="block w-full pt-[2%] hover:underline text-[13px] text-center text-sm text-white"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-3"
                  >
                    Sign out of Netflix
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
