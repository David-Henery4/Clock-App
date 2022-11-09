import React from "react";

const slideIn = ({ isSlideInActive, activeSlideInData }) => {
  //
  return (
    <aside
      className={
        isSlideInActive ? "slide-in slide-in-slide-active" : "slide-in"
      }
    >
      <div className="slide-in-col slide-in-col-1">
        <div className="info-style local-info">
          <h3 className="slide-header-style">CURRENT TIMEZONE</h3>
          <h2 className="h2-header-style">{activeSlideInData?.timezone}</h2>
        </div>
        <div className="info-style day-year-info">
          <h3 className="slide-header-style">Day of the year</h3>
          <h2 className="h2-header-style">{activeSlideInData?.day_of_year}</h2>
        </div>
      </div>
      <div className="slide-in-col slide-in-col-2">
        <div className="info-style day-week-info">
          <h3 className="slide-header-style">Day of the week</h3>
          <h2 className="h2-header-style">{activeSlideInData?.day_of_week}</h2>
        </div>
        <div className="info-style week-num-info">
          <h3 className="slide-header-style">Week number</h3>
          <h2 className="h2-header-style">{activeSlideInData?.week_number}</h2>
        </div>
      </div>
    </aside>
  );
};

export default slideIn;
