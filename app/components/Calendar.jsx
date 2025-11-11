'use client';

import React, { useState, useEffect } from 'react';

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function Calendar() {
  const [date, setDate] = useState(new Date());
  const [currYear, setCurrYear] = useState(date.getFullYear());
  const [currMonth, setCurrMonth] = useState(date.getMonth());
  const [daysList, setDaysList] = useState([]);

  const renderCalendar = () => {
    let lastDayOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let firstDayOfMonthIndex = new Date(currYear, currMonth, 1).getDay();
    let lastDayOfLastMonth = new Date(currYear, currMonth, 0).getDate();
    let days = [];

    // Days from last month (inactive)
    for (let i = firstDayOfMonthIndex; i > 0; i--) {
        days.push({ day: lastDayOfLastMonth - i + 1, className: "inactive" });
    }

    // Days from current month
    const today = new Date();
    for (let i = 1; i <= lastDayOfMonth; i++) { 
        let isToday = i === today.getDate() && currMonth === today.getMonth() && currYear === today.getFullYear() ? "active" : "";
        days.push({ day: i, className: isToday });
    }

    // Days from next month (inactive)
    const totalCells = days.length;
    const nextMonthStart = totalCells <= 35 ? (35 - totalCells) : (42 - totalCells);
    for (let i = 1; i <= nextMonthStart; i++) {
        days.push({ day: i, className: "inactive" });
    }
    
    setDaysList(days);
  };

  useEffect(() => {
    renderCalendar();
  }, [currYear, currMonth]);

  const navigateCalendar = (nav) => {
    let newMonth = currMonth + nav;
    let newYear = currYear;

    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    }

    setCurrMonth(newMonth);
    setCurrYear(newYear);
  };

  return (
    <div className="calendar-box bg-sidebar-bg text-dark-brown">
      <div className="icons flex justify-between items-center mb-2">
        <span className="material-symbols-rounded cursor-pointer" onClick={() => navigateCalendar(-1)}>chevron_left</span>
        <p id="current-date" className="font-bold text-xl">{monthNames[currMonth]} {currYear}</p>
        <span className="material-symbols-rounded cursor-pointer" onClick={() => navigateCalendar(1)}>chevron_right</span>
      </div>
      <div className="calendar">
        <ul className="Weeks"> 
          <li>Sun</li><li>Mon</li><li>Tue</li><li>Wed</li><li>Thu</li><li>Fri</li><li>Sat</li>
        </ul>
        <ul className="Days"> 
          {daysList.map((dayObj, index) => (
            <li key={index} className={dayObj.className}>{dayObj.day}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}