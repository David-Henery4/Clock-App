import React from 'react'

const Overlay = ({isError}) => {
  return <div className={isError ? "overlay overlay-error" : "overlay"}></div>;
}

export default Overlay