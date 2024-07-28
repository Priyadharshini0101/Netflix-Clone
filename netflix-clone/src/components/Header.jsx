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
  const [navMenu,setNavMenu] = useState(false)
  const navRef = useRef();
  const location = useLocation()

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
      <nav
        className="bg w-full px-[50px] sm:px-[25px] xs:px-[10px]  z-50  flex justify-between fixed text-sm background-header "
        ref={navRef}
  
      >
        
        <div className=" flex items-center gap-[50px] sm:gap-[10px] xs:justify-between xs:mr-[25px]">
         
          <img
            src={logo}
            alt="Netflix logo"
            className="h-[25px] ml-[25px] my-[20px] xs:mx-[0px]"
          ></img>
  
<button data-collapse-toggle="navbar-default" type="button" class="hidden  md:block items-center p-2 w-10 h-10 justify-center" aria-controls="navbar-default" aria-expanded="false" onClick={() => setNavMenu((navMenu) => !navMenu)}>
   <div className="flex gap-[5px]">  <a className="text-white text-[14px]">Browse </a><img src={caret} className={`w-[20px] h-[15px] my-[3.5px] ${navMenu ? `transition ease-in-out rotate-180`:`transition ease-out`}`}></img></div>
    </button>
    
<div className={`${navMenu ? `md:absolute top-[100%] left-[20%] md:bg-black md:p-5 sm:p-2.5 md:text-center  md:border-t-gray-200 md:border-black md:border-[2.5px]` : `md:hidden`} `}>
  <ul className={` flex  gap-[20px] md:flex-col`}>
            <Link to="/" >
              <li 
                className={`cursor-pointer hover:text-[#b3b3b3] ${location.pathname === '/' ? `text-white font-semibold` : ``}   `}
                onClick={() => setHelmet("Home - Netflix")}
              >
                Home
              </li>
            </Link>
            <Link to="/tvshows" >
              <li
                className={`block cursor-pointer hover:text-[#b3b3b3] ${location.pathname === '/tvshows' ? `text-white font-semibold` : ``}`}
                onClick={() => setHelmet("TV Shows - Netflix")}
              >
                TV Shows
              </li>
            </Link>
            <Link to="/movies">
              <li
                className={`cursor-pointer hover:text-[#b3b3b3] ${location.pathname === '/movies' ? `text-white font-semibold` : ``}`}
                onClick={() => setHelmet("Movies - Netflix")}
              >
                Movies
              </li>
            </Link>
            <Link to="/new&popular">
              {" "}
              <li
                className={`cursor-pointer hover:text-[#b3b3b3] ${location.pathname === '/new&popular' ? `text-white font-semibold` : ``}`}
                onClick={() => setHelmet("New & Popular - Netflix")}
              >
                New & Popular
              </li>
            </Link>
            <Link to="/mylist">
              {" "}
              <li
                className={`cursor-pointer hover:text-[#b3b3b3] ${location.pathname === '/mylist' ? `text-white font-semibold` : ``}`}
                onClick={() => setHelmet("My List - Netflix")}
              >
                My List
              </li>
            </Link>
            <Link to="/browserbylanguages">
              {" "}
              <li
                className={`cursor-pointer hover:text-[#b3b3b3] ${location.pathname === '/browserbylanguages' ? `text-white font-semibold` : ``}`}
                onClick={() => setHelmet("Browse by Languages - Netflix")}
              >
                Browse by Languages
              </li>
            </Link>
          </ul>
        </div>
        </div>

        <div className=" flex gap-[20px] items-center xs:justify-between">
          <img src={search} alt="search icon" className="cursor-pointer"></img>
          <p className="xs:hidden hover:text-[#b3b3b3]">Children</p>
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
                  className={`py-1 ${menu ? `py-2.5 px-1 sm:px-0.5 sm:py-1.5` : `hidden`}`}
                  role="none"
                >
                  <div className="flex gap-[10px]  py-[5%] px-[10%]">
                    {" "}
                    <img src={children} className="rounded-md"></img>{" "}
                    <a
                      href="#"
                      class="text-[13px] hover:underline   p-[4%] text-sm text-white text-left"
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
      

      </nav>
      



    </>
  );
};

export default Header;


