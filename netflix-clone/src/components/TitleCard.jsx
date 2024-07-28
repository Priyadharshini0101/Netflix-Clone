import React, { useEffect, useState, useRef } from "react";
import Template from "./Template.jsx";

function TitleCard({
  id,
  title,
  genre,
  language,
  content,
  notIncludedGenre,
  addRank,
}) {
  const [list, setList] = useState([]);
  const [scrollAmount,setScrollAmount] = useState(window.innerWidth-50);
  const cardRef = useRef(null);

  const getList = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/${content}?page=1&sort_by=addRankity.desc&api_key=365fae6b1e2fabc371f203e61d7fdbc8&with_genres=${genre}&with_original_language=${language}&without_genres=${notIncludedGenre}`
      );

      const data = await response.json();
      setList(data.results);
    } catch (error) {
      console.error("Error fetching list:", error);
    }
  };
  const getTrending = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/${content}/day?language=en-US&api_key=365fae6b1e2fabc371f203e61d7fdbc8`
      );

      const data = await response.json();
      let d = data.results;
      d = d.slice(0, 10);
      setList(d);
    } catch (error) {
      console.error("Error fetching trending:", error);
    }
  };

  useEffect(() => {
    if (!addRank) {
      getList();
    } else {
      getTrending();
    }
      
   window.addEventListener(('resize'),handler);
  },[])
 
    
    const handler = () =>{
      setScrollAmount(window.innerWidth-50);
    }

  const handleScroll = ( leftOrRight) => {
    const container = cardRef.current;
  
    if (container) {
    
      if (leftOrRight == "right") {
        container.scrollBy({
          left:scrollAmount,
          behavior: "smooth",
        });
      } else {
        
   
        container.scrollBy({
          left:-scrollAmount ,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      {" "}
      <div className="">
        <h2 className="ml-[50px] mb-[8px] sm:text-[14px] sm:ml-[25px] md:mt-[25px] ">{title}</h2>
        <div className="flex">
          <div
            className="flex gap-[10px] md:gap-[5px] card-list overflow-y-hidden  overflow-x-hidden "
            ref={cardRef}
          >
            <button
              id={cardRef + "prev" + id}
              onClick={() => {
             handleScroll()}}
              className={`btn-prev bg-[hsla(0, 0%, 8%, .7)] md:h-[190px] md:my-[15px]    rounded 
             hover:bg-[#6d6d6e66]
            `}
              onMouseOver={() => {
                {
                  
              
              
                   (document.getElementById(
                        cardRef + "prev" + id
                      ).innerHTML = `&lang;`)
                  
                }
              }}
              onMouseOut={() => {
                document.getElementById(cardRef + "prev" + id).innerHTML = ``;
              }}
            ></button>

            {list.map((value, index) => (
              <Template
                card={value}
                key={index}
                cardRef={cardRef}
                index={index}
                addRank={addRank}
                content={content}
              ></Template>
            ))}

            <button
              id={cardRef + "next" + id}
              onMouseOver={() => {
                {
                  
                     (document.getElementById(
                        cardRef + "next" + id
                      ).innerHTML = `&rang;`)
                  
                }
              }}
                
              
              onMouseOut={() => {
                document.getElementById(cardRef + "next" + id).innerHTML = ``;
              }}
              onClick={() => handleScroll( "right")}
              className={`btn-next bg-[hsla(0, 0%, 8%, .7)] md:h-[190px] md:my-[15px] hover:bg-[#6d6d6e66]
              onmouseover:bg-[#6d6d6e66] rounded
            
              `}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TitleCard;
