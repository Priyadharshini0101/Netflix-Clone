import React from "react";
import PropTypes from 'prop-types'

NotFound.propTypes = {
  title:PropTypes.string,
  className:PropTypes.string,
}
function NotFound({title,className="text-4xl sm:text-2xl "}) {
  return (
    <div className="w-full h-screen  flex items-center justify-center">
      <h1  className={` ${className}`}>
       {title}
      </h1>
    </div>
  );
}

export default NotFound;
