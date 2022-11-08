import React from 'react'

const slideIn = ({ isSlideInActive, initialData }) => {
    initialData?.find((eachInitData) => {
      console.log(eachInitData)
    })
  return (
    <aside
      className={
        isSlideInActive ? "slide-in slide-in-slide-active" : "slide-in"
      }
    >
      <div className="slide-in-col slide-in-col-1">
        <div className="info-style local-info">
          <h3 className="slide-header-style">CURRENT TIMEZONE</h3>
          <h2 className="h2-header-style">Europe/London</h2>
        </div>
        <div className="info-style day-year-info">
          <h3 className="slide-header-style">Day of the year</h3>
          <h2 className="h2-header-style">295</h2>
        </div>
      </div>
      <div className="slide-in-col slide-in-col-2">
        <div className="info-style day-week-info">
          <h3 className="slide-header-style">Day of the week</h3>
          <h2 className="h2-header-style">5</h2>
        </div>
        <div className="info-style week-num-info">
          <h3 className="slide-header-style">Week number</h3>
          <h2 className="h2-header-style">42</h2>
        </div>
      </div>
    </aside>
  );
};

export default slideIn