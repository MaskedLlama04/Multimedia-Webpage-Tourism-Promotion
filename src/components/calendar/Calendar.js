import React, { useState } from "react";
import "./Calendar.css";
import eventsData from "../../data/events.json";

/*
  Months available in the calendar
  monthIndex follows JavaScript Date convention, something I learned while at work btw:
  11 = December, 0 = January, 1 = February
*/
const months = [
  { name: "December 2025", monthIndex: 11, year: 2025 },
  { name: "January 2026", monthIndex: 0, year: 2026 },
  { name: "February 2026", monthIndex: 1, year: 2026 }
];

function Calendar() {
  // Current selected month (index in months array)
  const [currentMonth, setCurrentMonth] = useState(0);

  const { monthIndex, year, name } = months[currentMonth];

  // First day of the month (Monday-based)
  const firstDay = new Date(year, monthIndex, 1);
  let startDay = firstDay.getDay() - 1;
  if (startDay === -1) startDay = 6;

  // Total days in month
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  // Build calendar grid
  const days = [];
  for (let i = 0; i < startDay; i++) {
    days.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    days.push(d);
  }

  return (
    <section className="calendar">
      {/* Month navigation - centered */}
      <div className="calendar-header">
        <button
          disabled={currentMonth === 0}
          onClick={() => setCurrentMonth(currentMonth - 1)}
          className="nav-button"
        >
          ◀
        </button>

        <h2>{name}</h2>

        <button
          disabled={currentMonth === months.length - 1}
          onClick={() => setCurrentMonth(currentMonth + 1)}
          className="nav-button"
        >
          ▶
        </button>
      </div>

      {/* Legend */}
      <div className="calendar-legend">
        <div className="legend-item">
          <span className="legend-color popular"></span>
          <span>Popular events</span>
        </div>

        <div className="legend-item">
          <span className="legend-color food"></span>
          <span>Food & gastronomy</span>
        </div>

        <div className="legend-item">
          <span className="legend-color culture"></span>
          <span>Cultural activities</span>
        </div>
      </div>

      {/* Week days */}
      <div className="calendar-grid calendar-weekdays">
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>
      </div>

      {/* Days grid */}
      <div className="calendar-grid">
        {days.map((day, index) => {
          if (!day) {
            return <div key={index} className="calendar-cell empty" />;
          }

          const dateKey = `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
          const dayEvents = eventsData[dateKey] || [];

          return (
            <div key={index} className="calendar-cell">
              <span className="day-number">{day}</span>

              {dayEvents.map((event, i) => (
                <div key={i} className={`event ${event.type}`}>
                  {event.title}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Calendar;