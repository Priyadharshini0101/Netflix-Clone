import React from "react";
import { Template } from "../components";

function MyList() {
  const watchlists = JSON.parse(localStorage.getItem("list"));

  return (
    <div className="w-full flex  flex-col ">
      <h1 className="text-3xl sm:text-2xl  ml-[75px] md:ml-[25px] mt-[100px] ">My List</h1>
      <div
        className={`grid gap-[25px] gap-x-[25px] grid-cols-8 mx-[64px]  md:mx-[24px] sm:mx-[12px] md:gap-x-[10px] md:gap-[10px] lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 `}
      >
        {watchlists
          ? watchlists.map((watchlist, index) => (
              <Template
                card={watchlist.movie}
                key={index}
                filter={true}
                index={index}
                className=""
                content={watchlist.content}
              ></Template>
            ))
          : ""}
      </div>
    </div>
  );
}

export default MyList;
