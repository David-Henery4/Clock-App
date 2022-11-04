import React from 'react'
import { Refresh } from '../assets/desktop';

const Quote = () => {

  //
  return (
    <div className="quote">
      <Refresh/>
      <p className="quote__text">
        “The science of operations, as derived from mathematics more especially,
        is a science of itself, and has its own abstract truth and value.”
      </p>
      <p className="quote__author">Ada Lovelace</p>
    </div>
  );
}

export default Quote