import React,{useState} from 'react'
import Header from '../components/Header.jsx'
import {heroBanner, heroCaption, play,info} from '../assets/index.js'
import TitleCard from '../components/TitleCard.jsx'
import Footer from '../components/Footer.jsx'
import { DataProvider } from '../contexts/data.js'

function Home() {
  const initialArray = Array(15).fill(0);
  const [index, setIndex] = useState(initialArray);

  const setindex = (indexToUpdate, newValue) => {
    const updatedArray = [...index]; // Create a copy of the array
    updatedArray[newValue] = indexToUpdate;
    setIndex(updatedArray);
    console.log(index)
  };
  return (
    <>
    <div className='relative'>
      <img src={heroBanner} alt="money heist image" className='w-full banner-img'></img>
      <div className='absolute w-full pl-[6%] top-[40%]'>
        <img src={heroCaption} alt="money heist caption" className='w-[90%] max-w-[420px] mb-[30px]'></img>
        <p alt="money heist description" className='max-w-[700px] text-1xl mb-[20px]'>When the national mint and a touring school group are held hostage by robbers, police believe that the thieves have no way out. Little do they know that the thieves have a bigger plan in store.</p>
        <div className='flex gap-[10px] mb-[50px]'>
          <button className='rounded-lg px-[20px] py-[8px] inline-flex items-center gap-[10px] text-1xl text-black  bg-white cursor-pointer hover:bg-[#ffffffbf]'><img src={play} alt="play" className='w-[25px]'></img>Play</button>
          <button  className='rounded-lg px-[20px] py-[8px] inline-flex items-center gap-[10px] text-1xl text-white  bg-[#6d6d6eb3] cursor-pointer hover:bg-[#6d6d6e66]' ><img src={info} alt="info" className='w-[25px]'></img>More Info</button>
        </div>
      </div>
    </div>
  
<DataProvider value={{index,setindex}}>
   
   
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
    </DataProvider>
    </>

  )
}

export default Home