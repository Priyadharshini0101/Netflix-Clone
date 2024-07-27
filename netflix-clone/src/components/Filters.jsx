import React, { useState, useRef, useEffect } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { caret } from "../assets/index.js";
import { Template } from "../components/index.js";
import { useSelector, useDispatch } from "react-redux";
import { addLanguage } from "../features/list/languageSlice";
import { addMovieGenre, addTvGenre } from "../features/list/genreSlice.js";
import NotFound from "../pages/NotFound.jsx";

function Filters({ title, content }) {
  const currentGenre = content === "tv"  ? useSelector((state) => state.genre.genres.tv): useSelector((state) => state.genre.genres.movie);
  const currentLanguage = useSelector((state) => state.language.language);
  const [genres, setGenres] = useState([]);
  const [contentList, setContentList] = useState([]);
  const [languages, setLanguages] = useState([]);
  const dispatch = useDispatch();

  const getContentList = async () => {
    try {
      const allResults = [];
      for (let page = 1; page <= 4; page++) {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/${content}?page=${page}&sort_by=popularity.desc&api_key=365fae6b1e2fabc371f203e61d7fdbc8&with_genres=${currentGenre.id}&with_original_language=${currentLanguage.iso_639_1}`
        );

        const data = await response.json();
        const results = data.results;

        allResults.push(...results);
      }

      setContentList(allResults);
    } catch (error) {
      console.error("Error fetching content list:", error);
    }
  };

  const getGenres = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/${content}/list?language=en-US&api_key=365fae6b1e2fabc371f203e61d7fdbc8`
      );

      const data = await response.json();
      setGenres(data.genres);
    } catch (error) {
      console.error("Error fetching genre list:", error);
    }
  };

 const getLanguages = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/configuration/languages?api_key=365fae6b1e2fabc371f203e61d7fdbc8`
      );

      const data = await response.json();
      const temp = data.filter((d) => d.name !== "" && d.english_name != "No Language");
      temp.sort((a, b) => a.english_name.localeCompare(b.english_name));
      setLanguages(temp);
    } catch (error) {
      console.error("Error fetching language list:", error);
    }
  };

  const addGenreHandler = (genre) => {
    if (content == "tv") {
      dispatch(addTvGenre(genre));
    } else {
      dispatch(addMovieGenre(genre));
    }
  };

  useEffect(() => {
    const currentLanguage = JSON.parse(localStorage.getItem("language"));
    if (currentLanguage) {
      dispatch(addLanguage(currentLanguage));
    }
    
    const currentGenreTv = JSON.parse(localStorage.getItem("genretv"));
    if (currentGenreTv) {
      dispatch(addTvGenre(currentGenreTv));
    }

    const currentGenreMovie = JSON.parse(localStorage.getItem("genremovie"));
    if (currentGenreMovie) {
      dispatch(addMovieGenre(currentGenreMovie));
    }
   
    getGenres();
    getLanguages();
  }, []);

  useEffect(() => {
    getContentList();
  }, [currentGenre, currentLanguage]);

  return (
    <>
      <div className="w-full sm:flex-col justify-between  flex relative gap-[50px] md:gap-[0px] top-[100px]">
        <div className="flex gap-[25px]">
        <h1 className="text-3xl font-semibold md:text-2xl ml-[75px] md:ml-[25px]  w-[150px]">{title}</h1>

        {currentGenre.name !== title ? (
          <h2 className="relative  sm:text-[14px] py-1.5 text-[18px]  font-medium text-gray-400">
            &gt;&nbsp;&nbsp;&nbsp;&nbsp;{currentGenre.name}
          </h2>) : ("")}
          </div>

        <div className="flex sm:justify-between sm:mx-[24px] sm:mt-[24px]  gap-[25px] md:gap-[10px]">
          
          <Menu as="div" className=" relative text-left">
            <MenuButton className=" flex   text-[16px] md:text-[14px] md:px-1.5 px-2 py-1 text-1xl  text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#6d6d6eb3]">
              {currentGenre.name}
              <img src={caret} className="my-1.5 ml-5 h-3 w-5 text-gray-400" />
            </MenuButton>
            <MenuItems
              transition
              className="absolute  bg-black  left-0 z-10 w-48 origin-top-right  shadow-lg ring-1 ring-inset ring-gray-300  transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
              <div className="py-1">
                {genres.map((genre, index) => (
                  <MenuItem key={genre.id}>
                    <a
                      href="#"
                      className="block px-2 py-1 text-sm text-white data-[focus]:underline data-[focus]:text-white"
                      onClick={() => {
                        addGenreHandler(genre);
                      }}
                    >
                      {genre.name}
                    </a>
                  </MenuItem>
                ))}
              </div>
            </MenuItems>
          </Menu>

          <Menu
            as="div"
            className="mr-[150px]  relative mb-[150px] md:mr-[50px] overflow-y text-left">
            <MenuButton className=" flex w-full  text-[16px] sm:text-[14px] md:px-1.5 px-2 py-1 text-1xl  text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#6d6d6eb3]">
              {currentLanguage.english_name}
              <img src={caret} className="my-1.5 ml-5 h-3 w-5 text-gray-400" />
            </MenuButton>

            <MenuItems
              transition
              className="absolute overflow-y-auto   h-48 left-0 bg-black z-10 w-48 origin-top-right  shadow-lg ring-1 ring-inset ring-gray-300  transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                {languages.map((language) => (
                  <MenuItem key={languages.iso_639_1}>
                    <a
                      href="#"
                      className="block px-2 py-1 text-sm text-white data-[focus]:underline data-[focus]:text-white"
                      onClick={() => dispatch(addLanguage(language))}
                    >
                      {language.english_name}
                    </a>
                  </MenuItem>
                ))}
              </div>
            </MenuItems>
          </Menu>
        </div>
      </div>

      {contentList.length > 0 ?   <div className="grid gap-[25px] gap-x-[25px] grid-cols-8 mx-[64px]  lg:mx-[24px] md:mx-[12px]  md:gap-x-[10px] md:gap-[10px] lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 sm:mx-[6px]  ">
 { contentList.map((value, index) => (
          <Template
            card={value}
            key={index}
            filter={true}
            index={index}
            content={content}
          ></Template>
        ))}
        </div> : <NotFound title={`Find ${title} based on your interests.....`} className="text-gray-400  text-xl"></NotFound>
      }
  
    </>
  );
}

export default Filters;

