import React from "react";
import getDayAndWeekNumbers from "../data/getDayWeekNum";

const SlideIn = ({ isSlideInActive, activeTimeLocalData }) => {
  //
  const {weekNumber, dayNumber} = getDayAndWeekNumbers()
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
          <h2 className="h2-header-style">{activeTimeLocalData?.timezone}</h2>
        </div>
        <div className="info-style day-year-info">
          <h3 className="slide-header-style">Day of the year</h3>
          <h2 className="h2-header-style">{dayNumber}</h2>
        </div>
      </div>
      <div className="slide-in-col slide-in-col-2">
        <div className="info-style day-week-info">
          <h3 className="slide-header-style">Day of the week</h3>
          <h2 className="h2-header-style">
            {new Date().getDay() === 0 ? 7 : new Date().getDay()}
          </h2>
        </div>
        <div className="info-style week-num-info">
          <h3 className="slide-header-style">Week number</h3>
          <h2 className="h2-header-style">{weekNumber}</h2>
        </div>
      </div>
    </aside>
  );
};

export default SlideIn;
