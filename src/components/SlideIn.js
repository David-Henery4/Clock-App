import React from "react";
import { useEffect, useState } from "react";

const SlideIn = ({ isSlideInActive, activeTimeLocalData }) => {
  //
  const [dayNumber, setDayNumber] = useState(0);
  const [weekNumber, setWeekNumber] = useState(0);
  //
  const getDayAndWeekNumbers = () => {
    const currDate = new Date();
    const startDate = new Date(currDate.getFullYear(), 0, 1);
    const days = Math.floor((currDate - startDate) / (24 * 60 * 60 * 1000));
    const weekNum = Math.ceil(days / 7);
    setDayNumber(days + 1);
    setWeekNumber(weekNum);
  };
  //
  useEffect(() => {
    getDayAndWeekNumbers();
  }, []);
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
          <h2 className="h2-header-style">{new Date().getDay()}</h2>
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
