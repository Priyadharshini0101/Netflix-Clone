import React,{useState,useRef} from 'react'
import {heroBanner, heroCaption, play,info} from '../assets/index.js'
import TitleCard from '../components/TitleCard.jsx'
import Template from '../components/Template.jsx'


function Home() {
 
  const watchlists = JSON.parse(localStorage.getItem("list"))
  return (
    <>
    <div className='relative'>
      <img src={heroBanner} alt="money heist image" className='w-full banner-img'></img>
      <div className='absolute w-full pl-[6%] top-[30%]'>
        <img src={heroCaption} alt="money heist caption" className='w-[90%] max-w-[420px] mb-[30px]'></img>
        <p alt="money heist description" className='max-w-[700px] text-1xl mb-[20px]'>When the national mint and a touring school group are held hostage by robbers, police believe that the thieves have no way out. Little do they know that the thieves have a bigger plan in store.</p>
        <div className='flex gap-[10px] mb-[50px]'>
          <button className='rounded-lg px-[20px] py-[8px] inline-flex items-center gap-[10px] text-1xl text-black  bg-white cursor-pointer hover:bg-[#ffffffbf]'><img src={play} alt="play" className='w-[25px]'></img>Play</button>
          <button  className='rounded-lg px-[20px] py-[8px] inline-flex items-center gap-[10px] text-1xl text-white  bg-[#6d6d6eb3] cursor-pointer hover:bg-[#6d6d6e66] ' ><img src={info} alt="info" className='w-[25px]'></img>More Info</button>
        </div>
   
   </div>
   <div className=' relative overflow-x-auto ml-[50px] '>
  {watchlists ?  <h1 className=''>My List</h1>:""}
   <div className={`grid gap-y-[10px] gap-[10px] grid-cols-8  lg:grid-cols-4 md:grid-cols-2 `} >
      {watchlists ? watchlists.map((watchlist, index) => 
      (
       <Template card={watchlist.movie} key={index} filter={true} index={index} className='' content={watchlist.content}></Template>
        
        )):''}
     </div>
   </div>
   </div>

      
    

  

   
   
    <TitleCard k={0}  title="Familiar TV Shows" genre="18" language="en" content="tv" ></TitleCard>
 
   <TitleCard k={1} title="Anime Series" genre="16" language="ja" content="tv"></TitleCard>
    <TitleCard  k={2} title="Comedy Movies" genre="35" language="en" content="movie" nogenre='80,10751, 10770,10749,16,10762,10765,9648,10759,878'></TitleCard>
    <TitleCard  k={3} title="Top 10 Trending Movies" popular={true} content="movie"></TitleCard>
   
    <TitleCard k={4} title="TV Action & Adventure" genre="10759,10765" language="en" content="tv" nogenre=' 16,35' ></TitleCard>
    <TitleCard k={5} title="Bingeworthy TV Shows" genre="35" language="en" content="tv" nogenre='16,10751,18,10767,10763,10764,10768'></TitleCard>
    <TitleCard k={6} title="Hollywood Movies" genre="18,35" language="en" content="movie" nogenre='16' ></TitleCard>
    <TitleCard k={7} title="Bollywood Movies" genre="18,35" language="hi" content="movie" nogenre='80' ></TitleCard>
    <TitleCard k={8} title="Kids' TV" genre="16,35" language="en" content="tv" nogenre='10767,10763,10764,10768'></TitleCard>
    <TitleCard k={9} title="Tamil-Language Movies" genre="18,35" language="ta" content="movie" ></TitleCard>
    <TitleCard k={10} title="Romantic Favorites" genre="18" language="ko" content="tv"></TitleCard>
    
    <TitleCard  k={11} title="Top 10 Trending Movies" popular={true} content="tv"></TitleCard>
    <TitleCard k={12} title="Thriller Movies" genre="53" language="en" content="movie"></TitleCard>
    <TitleCard k={13} title="Japanese Movies & TV" genre="18,16" language="ja" content="movie" ></TitleCard>
    <TitleCard k={14} title="International TV Shows" genre="18,35" language="th" content="tv" nogenre='10751'></TitleCard>
    </>

  )
}

export default Home