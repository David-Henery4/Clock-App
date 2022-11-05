import React from 'react'
import { Refresh } from '../assets/desktop';

const Quote = ({isSlideInActive}) => {
  //
  return (
    <div className={isSlideInActive ? "quote quote-slide-active" : "quote"}>
      <div className="quote-text-icon-wrap">
        <Refresh className="quote__refresh-icon" />
        <p className="quote__text basic-text-style">
          “The science of operations, as derived from mathematics more
          especially, is a science of itself, and has its own abstract truth and
          value.”
        </p>
      </div>
      <p className="quote__author basic-text-style">Ada Lovelace</p>
    </div>
  );
};

export default Quote