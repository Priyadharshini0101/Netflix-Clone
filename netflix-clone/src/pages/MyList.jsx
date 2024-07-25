import React,{useEffect} from 'react'
import {useSelector} from 'react-redux'
import { Filters, Template } from '../components'

function MyList() {
  
  const watchlists = JSON.parse(localStorage.getItem("list"))


  useEffect(() =>{
    window.scroll(0,0)
    console.log(watchlists)
  },[])
  return (
   <div className='w-full h-screen relative top-[100px]  '>
    
    <h1 className='text-3xl  ml-[75px]'>My List
    </h1>    
   <div className={`grid gap-y-[25px] gap-[25px] grid-cols-8 mx-[64px] my-[12px] lg:grid-cols-4 md:grid-cols-2 `} >
      {watchlists.map((watchlist, index) => 
      (
       <Template card={watchlist.movie} key={index} filter={true} index={index} className='' content={watchlist.content}></Template>
        
        ))}
     </div>
   </div>
  )
}

export default MyList