import React, { useEffect, useState,useRef} from 'react';
import Template from './Template.jsx'

function TitleCard({k,page="1",title,genre,language,content,nogenre="",addNumber=false,popular}) {
  const [tvList, setTvList] = useState([]); // Use a descriptive name for clarity

  const cardRef = useRef(null)

  const getTVList = async (genre,language,content,nogenre) => { // Use async/await for cleaner handling
    try {
      const response = 
      await fetch(
        `https://api.themoviedb.org/3/discover/${content}?page=${page}&sort_by=popularity.desc&api_key=365fae6b1e2fabc371f203e61d7fdbc8&with_genres=${genre}&with_original_language=${language}&without_genres=${nogenre}`
      );
 
      const data = await response.json();
      setTvList(data.results); // Access results property for clarity
    } catch (error) {
      console.error('Error fetching TV list:', error); // Handle potential errors
    }
  };
  const getTopMovies = async (content) => { // Use async/await for cleaner handling
    try {
      const response = 
      await fetch(
          `https://api.themoviedb.org/3/trending/${content}/day?language=en-US&api_key=365fae6b1e2fabc371f203e61d7fdbc8`      
        );
 
      const data = await response.json();
      let d = data.results;
      d = d.slice(10,20)
      setTvList(d); // Access results property for clarity
    } catch (error) {
      console.error('Error fetching TV list:', error); // Handle potential errors
    }
  };

   

  useEffect(() => {
    if(!popular){
    getTVList(genre,language,content,nogenre);
    }else{
      getTopMovies(content);
  
    }
    
  }, []);
  
  const initialArray = Array(15).fill(0);
  const [index, setIndex] = useState(initialArray);

  const setindex = (indexToUpdate, newValue) => {
    const updatedArray = [...index]; // Create a copy of the array
    updatedArray[newValue] = indexToUpdate;
    setIndex(updatedArray);
    console.log(index)
  };
  
  const handleScroll = (scrollAmount,leftOrRight) => {
   
    const container = cardRef.current;
   
    if (container) {
      const temp = index[k] < 2 ? (index[k] + 1) : (index[k])
      setindex(temp,k)
      if(leftOrRight == "right"){
     
      container.scrollBy({
        
        left: scrollAmount,
        behavior: 'smooth',
      });
    }else{
      const temp = index[k] > 0 ? (index[k] - 1) : (index[k])
      setindex(temp,k)
    
    
      container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      });
    }
    }
  }


   

 
  return (
    <>    <div className=' mt-[50px]' >
      <h2 className='ml-[50px] mb-[8px]'>{title}</h2>
<div className='flex '>  
  
     <div className='flex gap-[10px] card-list overflow-y-hidden  overflow-x-hidden ' 
      ref={cardRef}
      >
<button
 id={cardRef+ 'prev' + k}
onClick={() => handleScroll(1450)} 
className={`btn-prev bg-[hsla(0, 0%, 8%, .7)]   rounded  ${index[k] > 0 ? `hover:bg-[#6d6d6e66]`:``}`} 
onMouseOver={() => 
  {
   
    {index[k] > 0 ? (document.getElementById(cardRef + 'prev' + k).innerHTML = `&lang;`) :("")}
  }
}
onMouseOut={() => 
  {
   
 (document.getElementById(cardRef + 'prev' + k).innerHTML = ``)
  }
}
></button>
  
  

      {tvList.map((card, index) => 
      (
       <Template card={card} key={index} k={k}   cardRef={cardRef} index={index} className='' rank={index}  addNumber={popular} content={content}></Template>
      
        ))}
        
   <button  
  id={cardRef + 'next' + k}
   onMouseOver={() => 
  {
{index[k] < 2 ? ( document.getElementById(cardRef + 'next' + k).innerHTML = `&rang;`):("")}
  }
}
onMouseOut={() =>{
  
document.getElementById(cardRef + 'next' + k).innerHTML = ``
 
}}
  onClick={() =>handleScroll(1450,"right")} 
  className={`btn-next bg-[hsla(0, 0%, 8%, .7)]   onmouseover:bg-[#6d6d6e66] rounded ${index[k] < 2 ? `hover:bg-[#6d6d6e66]` : ``}`}></button>
        </div>
        </div>
   
    

  
    </div>
    </>

  );
}

export default TitleCard;
