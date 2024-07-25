import React,{useState,useRef,useEffect} from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {caret} from '../assets/index.js'
import {Template} from '../components/index.js'
import { useSelector, useDispatch } from 'react-redux'
import { addLanguage } from '../features/list/languageSlice'
import { addMovieGenres, addTvGenres } from '../features/list/genreSlice.js'



function Filters({title,content}) {
  const genres = (content === "tv") ? useSelector(state => state.genre.genres.tv) : useSelector(state => state.genre.genres.movie)
 const lang = useSelector(state => state.language.languages)
  const [genre, setGenre] = useState([]);
  const [list,setList] = useState([]);
  const [languages,setLanguages] = useState([])
 
  const getList = async (content) => { 
    try {

    const allResults = []; 
    for (let page = 1; page <= 6; page++) {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/${content}?page=${page}&sort_by=popularity.desc&api_key=365fae6b1e2fabc371f203e61d7fdbc8&with_genres=${genres.id}&with_original_language=${lang.iso_639_1}`
      );

      const data = await response.json();
      const results = data.results; 

      allResults.push(...results); 
    }

    setList(allResults);
  } catch (error) {
    console.error('Error fetching TV list:', error); 
  }

  };

  const dispatch = useDispatch()
  const addLanguageHandler = (language) =>{
    dispatch(addLanguage(language))
  }

  const addGenreHandler = (genre) =>{
    if(content == "tv"){
      dispatch(addTvGenres(genre))
    }else{
      dispatch(addMovieGenres(genre))
    }
  }
  
    const cardRef = useRef(null)
  
    const getGenre = async (content) => { 
      try {
        const response = 
        await fetch(
          `https://api.themoviedb.org/3/genre/${content}/list?language=en-US&api_key=365fae6b1e2fabc371f203e61d7fdbc8`
        );
   
        const data = await response.json();
        setGenre(data.genres); 
      } catch (error) {
        console.error('Error fetching TV list:', error); 
      }
    };
    const getLanguages =  async () => { 
      try {
        const response = 
        await fetch(
          `https://api.themoviedb.org/3/configuration/languages?api_key=365fae6b1e2fabc371f203e61d7fdbc8`
        );
   
        const data = await response.json();
        const temp=data.filter((d) => (d.name !== "")) 
        temp.sort((a, b) => a.english_name.localeCompare(b.english_name))
        setLanguages(temp); 
      } catch (error) {
        console.error('Error fetching TV list:', error); 
      }
    };
    useEffect(() =>{
      const language = JSON.parse(localStorage.getItem("language")) 
      if(language){
        dispatch(addLanguage(language))
      }

      
      const genretv = JSON.parse(localStorage.getItem("genretv")) 
      if(genretv){
       
          dispatch(addTvGenres(genretv))
       
      }

      const genremovie = JSON.parse(localStorage.getItem("genremovie"))
      if(genremovie){
        dispatch(addMovieGenres(genremovie))
      }

      

      
     const content = (title === "Movies")?"movie":"tv"
        getGenre(content);
        getLanguages();
        
},[])

useEffect(() =>{
  const content = (title === "Movies")?"movie":"tv"

 getList(content)
 

       
},[genres,lang])



  
  
  return (
    <>
    
    <div className='w-full justify-between flex relative gap-[50px] top-[100px]'>
    
    <h1 className='text-3xl font-semibold ml-[75px]'>{title}
    </h1>    
   
 
     { (genres.name !== title) ?   (
             <h2  className='relative left-[-275px] py-1.5 text-[18px] font-medium text-gray-400'>
                 &gt;&nbsp;&nbsp;&nbsp;&nbsp;{genres.name}
                </h2>
               ) : ("")}
  
<div className='flex gap-[25px]'> 
     <Menu as="div" className=" relative   inline-block text-left">

        <MenuButton className=" flex w-full  text-[16px]  px-2 py-1 text-1xl  text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#6d6d6eb3]">
       {genres.name } 
          <img src={caret} className="my-1.5 ml-5 h-3 w-5 text-gray-400" />
        </MenuButton>
       
      
      <MenuItems
        transition
        className="absolute  bg-black  left-0 z-10 w-48 origin-top-right  shadow-lg ring-1 ring-inset ring-gray-300  transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
            {genre.map((genre,index) =>(
                    <MenuItem
                    key={genre.id}>
                    <a
                      href="#"
                      className="block px-2 py-1 text-sm text-white data-[focus]:underline data-[focus]:text-white"
                      onClick={() => {
                        addGenreHandler(genre)
                      }}
                    >
                      {genre.name}
                    
                    </a>
                  </MenuItem>
                
            ))}
      
        </div>
      </MenuItems>
     
        
    </Menu>
    

    <Menu as="div" className="mr-[150px] relative mb-[150px] overflow-y text-left">

        <MenuButton className=" flex w-full  text-[16px]  px-2 py-1 text-1xl  text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#6d6d6eb3]">
          {lang.english_name} 
          <img src={caret} className="my-1.5 ml-5 h-3 w-5 text-gray-400" />
        </MenuButton>
       
      
     <MenuItems
transition
className="absolute overflow-y-auto  h-48 left-0 bg-black z-10 w-48 origin-top-right  shadow-lg ring-1 ring-inset ring-gray-300  transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
>
<div className="py-1">
    {languages.map((language,index) =>(
            <MenuItem
            key={languages.iso_639_1}>
            <a
              href="#"
              className="block px-2 py-1 text-sm text-white data-[focus]:underline data-[focus]:text-white"
              onClick={() =>addLanguageHandler(language)}
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

{/* <div className='flex'>      */}
     <div className='grid gap-y-[25px] gap-x-[25px] grid-cols-8 mx-[64px] my-[12px] lg:grid-cols-4 md:grid-cols-2 ' >
      {list.map((card, index) => 
      (
       <Template card={card} key={index} filter={true}  cardRef={cardRef} index={index} className='' content={content}></Template>
        
        ))}
     </div>
{/* </div> */}
</>
  )
}

export default Filters

