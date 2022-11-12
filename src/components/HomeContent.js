import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Moon, ArrowDown, Sun } from "../assets/desktop";

const HomeContent = ({ slideState, activeTimeLocalData, isNight }) => {
  const { isSlideInActive, setIsSlideInActive } = slideState;
  const [currentTime, setCurrentTime] = useState(
    `${new Date().getHours().toString().padStart(2, "0")}:${new Date()
      .getMinutes()
      .toString()
      .padStart(2, "0")}`
  );
  //
  const setGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 12) {
      return "Good Morning";
    }
    if (hour >= 12 && hour < 18) {
      return "Good Afternoon";
    }
    if (hour >= 18 && hour < 24) {
      return "Good Evening";
    }
  };
  //
  const getTime = () => {
    const hours = new Date().getHours().toString().padStart(2, "0");
    const mins = new Date().getMinutes().toString().padStart(2, "0");
    const time = `${hours}:${mins}`;
    setCurrentTime(time);
  };
  //
  useEffect(() => {
    setInterval(() => {
      getTime();
    }, 1000);
  }, []);
  //
  return (
    <div className="home">
      <div className="time-location">
        <div className="time-location-msg">
          {isNight ? (
            <Moon className="time-location-msg__icon" />
          ) : (
            <Sun className="time-location-msg__icon" />
          )}

          <h3 className="h4-header-style time-location-msg__greeting">
            {setGreeting()}
            <span className="time-location-msg__greeting--extra">
              , IT’S CURRENTLY
            </span>
          </h3>
        </div>
        <div className="time-location-timezone">
          <h1 className="h1-header-style time-location-timezone__time">
            {currentTime}
          </h1>
          <p className="timezone-text time-location-timezone__zone">
            {new Date()
              .toLocaleDateString("en", {
                day: "2-digit",
                timeZoneName: "short",
              })
              .slice(4)}
          </p>
        </div>
        <h2 className="h3-header-style time-location__location">
          in {activeTimeLocalData?.city}, {activeTimeLocalData?.country}
        </h2>
      </div>
      <button
        className="btn-basic btn-text time-location__btn"
        onClick={() => setIsSlideInActive(!isSlideInActive)}
      >
        <span className="time-location__btn-text">
          {isSlideInActive ? "less" : "more"}
        </span>
        <span className="time-location__btn-whole-icon">
          <span className="time-location-btn-circle">
            <ArrowDown
              className={
                isSlideInActive
                  ? "time-location-btn-circle__icon time-location-btn-circle__icon-active"
                  : "time-location-btn-circle__icon"
              }
            />
          </span>
        </span>
      </button>
    </div>
  );
};

export default HomeContent;
