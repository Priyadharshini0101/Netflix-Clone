import React,{useState,useRef,useEffect} from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {caret} from '../assets/index.js'
import {Template} from '../components/index.js'

function Filters({title,content}) {
  const object = {id:0,name:title}
  const [genre, setGenre] = useState([]);
  const [currentGenre, setCurrentGenre] = useState(object)
  const [list,setList] = useState([]);
 
  const getList = async (genre,content) => { 
    try {

    const allResults = []; 
    for (let page = 1; page <= 6; page++) {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/${content}?page=${page}&sort_by=popularity.desc&api_key=365fae6b1e2fabc371f203e61d7fdbc8&with_genres=${genre.id}&with_original_language=en`
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
  
    const cardRef = useRef(null)
  
    const getGenre = async () => { 
      try {
        const response = 
        await fetch(
          `https://api.themoviedb.org/3/genre/${content}/list?language=en-US&api_key=365fae6b1e2fabc371f203e61d7fdbc8`
        );
   
        const data = await response.json();
        setGenre(data.genres); // Access results property for clarity
      } catch (error) {
        console.error('Error fetching TV list:', error); // Handle potential errors
      }
    };
    useEffect(() =>{
        getGenre();
},[])

useEffect(() =>{
  const content = (title === "Movies")?"movie":"tv"
 getList(currentGenre,content)
 console.log(list)

},[currentGenre])
  
  
  return (
    <>
    
    <div className='w-full h-[150px] justify-between flex relative gap-[50px] top-[100px]'>
    
    <h1 className='text-3xl font-semibold ml-[75px]'>{title}
    </h1>
   
 
     { (currentGenre.name !== title) ?   (
             <h2  className='relative left-[-275px] py-1.5 text-[18px] font-medium text-gray-400'>
                 &gt;&nbsp;&nbsp;&nbsp;&nbsp;{currentGenre.name}
                </h2>
               ) : ("")}
  

    <Menu as="div" className="mx-[150px] relative   inline-block text-left">

        <MenuButton className=" flex w-full  text-[16px]  px-2 py-1 text-1xl  text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#6d6d6eb3]">
          {currentGenre.name} 
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
                      onClick={() => setCurrentGenre(genre)}
                    >
                      {genre.name}
                    
                    </a>
                  </MenuItem>
                
            ))}
      
        </div>
      </MenuItems>
    </Menu>

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