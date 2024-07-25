import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { logo } from '../assets';
import { addWatchList, removeWatchList } from '../features/list/watchListSlice';
import {useDispatch}from 'react-redux'
import { useSelector } from 'react-redux';

function Player() {
  const { content,id } = useParams();
  const [result, setResult] = useState(null);      
  const [details,setDetails] = useState(null)
  const [runtime,setRuntime] = useState(0)
  const [teaser,setTeaser] = useState(false)
  const [creators,setCreators] = useState(null)
   
  const watchlists = useSelector(state => state.watchLists)


  
const array={
    "ko":"Korean",
    "ta":"Tamil",
    "hi":"Hindi",
    "th":"Thai",
    "en":"English"
  }
  const getTeaser = async (content) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${content}/${id}/videos?language=en-US&api_key=365fae6b1e2fabc371f203e61d7fdbc8`
      );
  
      const data = await response.json();
      const videos = data.results; // Access results property for clarity
    const trailer = videos.filter((video) => (video.type === "Trailer" ))
      if (trailer && trailer.length > 0) {
        if(trailer.length > 1){
          setResult(trailer[1]);
        }else{
          setResult(trailer[0]);
        } // Set the first video as the result (assuming you want the first one)
      } else {
        setResult(null); // Set result to null if no videos found
        setTeaser(true)
      }
     
    console.log(result)
  
      const response1 = await fetch(
        `https://api.themoviedb.org/3/${content}/${id}?language=en-US&api_key=365fae6b1e2fabc371f203e61d7fdbc8`
      );
  
      const data1 = await response1.json();
     
  
  
        setDetails(data1); // Set the first video as the result (assuming you want the first one)
        if(data1 && data1.runtime !== undefined){
          let time = (Number(data1.runtime)/60).toString()
          time = time[0] + "hrs " + time.substr(2,2) + "mins";
          setRuntime(time)
        }
      
        if(data1 && data1.created_by !== undefined){
            const creator = data1.created_by;
             let name= ""
             creator.map((c,index) => {
              if(index < creator.length - 1){
              name += c.name+" , "
              }else{
              name += c.name
              }
             })
            console.log(name)
            setCreators(name)
        }
    } catch (error) {
      console.error('Error fetching teaser:', error); // Handle potential errors
    }
  };
 
  useEffect(() => {
    window.scroll(0,0);
    getTeaser(content);
    
  
    
  }, [id]);
  
  const dispatch = useDispatch()

  const addWatchListHandler = (details,content) =>{
    dispatch(addWatchList({details,content}))
    console.log(watchlists)

  }
  const removeWatchListHandler = (id) =>{
    dispatch(removeWatchList(id))
    console.log(watchlists)

  }

  return (
    <>
   
    <Helmet>    
     <title>Watch Trailer - Netflix</title>
     <meta
     name="description"
     content={``}>
     </meta>
     </Helmet>
   <div className="bg w-full px-[50px] z-[1]  flex justify-between fixed text-sm">
       <div className=' flex items-center gap-[50px]'>
           <img src={logo} alt="Netflix logo"
           className='h-[25px] ml-[25px] my-[20px]'></img>
           </div>
           </div>
     
      <div className='relative  flex flex-col w-full h-[850px] items-center'>
        
    {!teaser ?  
              ( result && details ? (
              <>
            
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${result.key}`}
                  title="trailer"
                  frameBorder='0'
                  allowFullScreen
                ></iframe>
                <div className='flex flex-col w-full  py-2.5 gap-[10px] '>
                <div className='flex  justify-start w-full'>
                <div className='bg-[#e50914] w-2 mx-2.5'></div>
                <h1 className='text-2xl font-semibold'>{content === "tv" ? details.name : details.title}</h1>
                </div>
                <div className='flex flex-col px-2.5 gap-[4px]'>
                <p className=' text-1xl italic font-semibold'>{details.tagline}</p> 
                <p className=' text-gray-300' >{details.overview}</p>
                
                { content === "tv" ?
                <p className='text-[14px] text-gray-200'> {details.first_air_date +  ' - ' + details.last_air_date } &nbsp; 
                   {array[details.original_language]} &nbsp; 
                   </p> :<p className='text-[14px] text-gray-200'> {details.release_date} &nbsp; 
                   {array[details.original_language]} &nbsp; 
                   {runtime}</p>}
                  
              {content === "tv"? <p className='text-[14px] text-gray-200 font-bold'>Seasons {details.number_of_seasons} &nbsp; Episodes {details.number_of_episodes}</p>:""}
               
                 
                  
              {content === "tv" && creators? <p className='text-[12px] text-gray-200 '>Creators: {creators}</p>:""}
               
  
                {content === "movie" ? details.status !== "Released" ? <p className='text-[14px] text-gray-200 font-bold'>Coming Soon</p> :"" : details.status !== "Ended" ? <p className='text-[14px] text-gray-200 font-bold'>It's official:&nbsp;another Season is coming</p> :""}             
                  <div className='flex my-2.5 gap-[5px]'>
                  <button className='w-full text-white bg-[#e50914] p-2 font-semibold hover:bg-red-400 '>Watch Now</button>
            {watchlists.findIndex((watchlist) => (watchlist.movie.id === details.id)) !== -1 ?
            (  <button className='w-full  bg-gray-800 p-2 text-1xl font-semibold  hover:bg-gray-400 text-white'
                  onClick={() => removeWatchListHandler(details.id)}>Remove from  my watchlist</button>):
                
                  (<button className='w-full text-black bg-white p-2 text-1xl font-semibold hover:bg-gray-200'
                  onClick={() => addWatchListHandler(details,content)}>Add to my watchlist</button>)}
                  </div>
                  </div>
                </div>
    
              </> ) :( 
                <div className='flex h-screen w-full justify-center items-center'>
                   <div
                   className="inline-block h-[60px] w-[60px] text-[#e50914] animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                   role="status">
                   </div>                  
                 </div>
              )
              )
            : (
                  
                <div className='w-full h-screen  flex items-center justify-center'>
                <h1 as="h1" className='text-4xl '>Teaser not found</h1>
            </div>
                    
            )}

      </div>
   
      
    </>
  );
}

export default Player;
  