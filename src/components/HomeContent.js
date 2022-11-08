import React from "react";
import { Moon, ArrowDown, ArrowUp } from "../assets/desktop";

const HomeContent = ({
  slideState,
  activeTimeLocalData,
  activeSlideInData,
}) => {
  const { isSlideInActive, setIsSlideInActive } = slideState;
  console.log(activeSlideInData);
  
  //
  return (
    <div className="home">
      <div className="time-location">
        <div className="time-location-msg">
          <Moon className="time-location-msg__icon" />
          <h4 className="h4-header-style time-location-msg__greeting">
            GOOD EVENING
            <span className="time-location-msg__greeting--extra">
              , IT’S CURRENTLY
            </span>
          </h4>
        </div>
        <div className="time-location-timezone">
          <h1 className="h1-header-style time-location-timezone__time">
            24:14
          </h1>
          <p className="timezone-text time-location-timezone__zone">
            {activeSlideInData?.abbreviation}
          </p>
        </div>
        <h3 className="h3-header-style time-location__location">
          in {activeTimeLocalData?.city}, {activeTimeLocalData?.countryCode}
        </h3>
      </div>
      <button
        className="btn-basic btn-text time-location__btn"
        onClick={() => setIsSlideInActive(!isSlideInActive)}
      >
        {isSlideInActive ? "less" : "more"}
        <span>
          {isSlideInActive ? (
            <ArrowUp className="time-location__btn-icon" />
          ) : (
            <ArrowDown className="time-location__btn-icon" />
          )}
        </span>
      </button>
    </div>
  );
};

export default HomeContent;
