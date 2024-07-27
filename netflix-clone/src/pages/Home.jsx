import React,{ useEffect} from 'react'
import {heroBanner, heroCaption, play,info} from '../assets/index.js'
import TitleCard from '../components/TitleCard.jsx'
import Template from '../components/Template.jsx'
import { useDispatch } from 'react-redux'
import { addWatchList } from '../features/list/watchListSlice.js'

function Home() {
  const watchlists = JSON.parse(localStorage.getItem("list"))
  const dispatch = useDispatch()

  useEffect(()=>{
    if(watchlists){
      watchlists.map((watchlist)=> {
       const watchListObject ={
         details:watchlist.movie,
         content:watchlist.content
       }
     dispatch(addWatchList(watchListObject))
    })
   }
  },[])
 
  return (
    <>
    <div className='relative'>
      <img src={heroBanner} alt="money heist image" className='banner'></img>
      <div className='absolute w-full pl-[6%] top-[20%] md:top-[15%] sm:top-[5%]'>
        <img src={heroCaption} alt="money heist caption" className='w-[90%] max-w-[480px] mb-[30px] md:mb-[15px] md:max-w-[320px] sm:max-w-[240px]'></img>
        <p alt="money heist description" className='max-w-[700px] md:max-w-[500px] text-1xl mb-[20px] md:mb-[10px] sm:text-[14px] '>When the national mint and a touring school group are held hostage by robbers, police believe that the thieves have no way out. Little do they know that the thieves have a bigger plan in store.</p>
        <div className='flex gap-[10px] mb-[50px] '>
          <button className='rounded-lg px-[20px] py-[8px] sm:px-[10px] sm:py-[4px] sm:text-[14px] inline-flex items-center gap-[10px] sm:gap-[5px] text-1xl text-black  bg-white cursor-pointer hover:bg-[#ffffffbf]'><img src={play} alt="play" className='w-[25px] sm:w-[10px] p-0'></img>Play</button>
          <button  className='rounded-lg px-[20px]  py-[8px] sm:px-[10px] sm:py-[4px] sm:text-[14px] inline-flex items-center gap-[10px] sm:gap-[5px] text-1xl text-white  bg-[#6d6d6eb3] cursor-pointer hover:bg-[#6d6d6e66] ' ><img src={info} alt="info" className='w-[25px] sm:w-[10px] p-0'></img>More Info</button>
        </div>
      </div>
   <div className=' relative overflow-x-auto ml-[50px] sm:text-[14px] sm:ml-[25px] mt-[10px] overflow-hidden '>
      {watchlists ?  <h1 className=''>My List</h1>:""}
      <div className={`grid gap-y-[10px] gap-[10px] grid-cols-8 sm:gap-[5px] lg:grid-cols-6  md:grid-cols-4 sm:grid-cols-3 `} >
          {watchlists ? watchlists.map((watchlist, index) => 
          (
          <Template card={watchlist.movie} key={index} filter={true} index={index} className='' content={watchlist.content}></Template>
            
            )):''} 
      </div> 
    </div>
  </div>
  <TitleCard id={0}  title="Familiar TV Shows" genre="18" language="en" content="tv" ></TitleCard>
  <TitleCard id={1} title="Anime Series" genre="16" language="ja" content="tv"></TitleCard>
  <TitleCard  id={2} title="Comedy Movies" genre="35" language="en" content="movie" notIncludedGenre='80,10751, 10770,10749,16,10762,10765,9648,10759,878'></TitleCard>
  <TitleCard  id={3} title="Top 10 Trending Movies" addRank={true} content="movie"></TitleCard>
  <TitleCard id={4} title="TV Action & Adventure" genre="10759,10765" language="en" content="tv" notIncludedGenre=' 16,35' ></TitleCard>
  <TitleCard id={5} title="Bingeworthy TV Shows" genre="35" language="en" content="tv" notIncludedGenre='16,10751,18,10767,10763,10764,10768'></TitleCard>
  <TitleCard id={6} title="Hollywood Movies" genre="18,35" language="en" content="movie" notIncludedGenre='16' ></TitleCard>
  <TitleCard id={7} title="Bollywood Movies" genre="18,35" language="hi" content="movie" notIncludedGenre='80' ></TitleCard>
  <TitleCard id={8} title="Kids' TV" genre="16,35" language="en" content="tv" notIncludedGenre='10767,10763,10764,10768'></TitleCard>
  <TitleCard id={9} title="Tamil-Language Movies" genre="18,35" language="ta" content="movie" ></TitleCard>
  <TitleCard id={10} title="Romantic Favorites" genre="18" language="ko" content="tv"></TitleCard>
  <TitleCard  id={11} title="Top 10 Trending TV Shows" addRank={true} content="tv"></TitleCard>
  <TitleCard id={12} title="Thriller Movies" genre="53" language="en" content="movie"></TitleCard>
  <TitleCard id={13} title="Japanese Movies & TV" genre="18,16" language="ja" content="movie" ></TitleCard>
  <TitleCard id={14} title="International TV Shows" genre="18,35" language="th" content="tv" notIncludedGenre='10751'></TitleCard>
    </>

  )
}

export default Home