import React from "react";

function NotFound({title,className="text-4xl"}) {
  return (
    <div className="w-full h-screen  flex items-center justify-center">
      <h1  className={` ${className}`}>
       {title}
      </h1>
    </div>
  );
}

export default NotFound;
