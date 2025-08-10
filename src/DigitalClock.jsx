// Build a Digital Clock using React using useEffect() Hook.

import React, { useState, useEffect } from "react";
function DigitalClock() {
  const [time, setTime] = useState(new Date());
  // const [date, setDate] = useState(new Date());
  // const [day, setDay] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000); // After every second we will update of state of time with new current date and time.

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12; // for example hours is 13 , so 13 mod 12 = 1. And 12 % 12 = 0 that we don't want so return 12.

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${padZero(
      meridiem
    )}`;
  }

  //Lets do one more thing and have the Current Date also with the time.
  function formatDate() {
    // let cDate = date.getDate();
    let date = time.getDate();
    const month = time.getMonth();
    const year = time.getFullYear();

    return `${padZero(date)}/${padZero(month)}/${year} `;
  }

  function formatDay() {
    let day = time.toLocaleDateString("en-US", { weekday: "long" });
    return `${day}`;
  }

  // When we have a single digit, we don't have a leading zero. So,
  // For Date,month,Time(Hours,minutes,seconds).
  function padZero(number) {
    // we need to check to see if our number is less than 10 then it is a single digit and we have to return a '0', otherwise we dont have to do it.
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
        <br />
        <span>{formatDate()}</span>
        <br />
        <span>{formatDay()}</span>
      </div>
    </div>
  );
}
export default DigitalClock;
