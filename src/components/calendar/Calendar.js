import React, { useState } from "react";
import "./Calendar.css";

/*
  Months available in the calendar
  monthIndex follows JavaScript Date convention:
  11 = December, 0 = January, 1 = February
*/
const months = [
  { name: "December 2025", monthIndex: 11, year: 2025 },
  { name: "January 2026", monthIndex: 0, year: 2026 },
  { name: "February 2026", monthIndex: 1, year: 2026 }
];

/*
  Events by date
  Event types:
  - popular → yellow
  - food → green
  - culture → blue
*/
const events = {
  /* ================= DECEMBER ================= */
  "2025-12-03": [{ title: "Christmas Lights Opening", type: "popular" }],
  "2025-12-05": [{ title: "Christmas Market", type: "popular" }],
  "2025-12-08": [{ title: "Wine & Cheese Fair", type: "food" }],
  "2025-12-12": [{ title: "Modern Art Exhibition", type: "culture" }],
  "2025-12-15": [{ title: "Local Choir Concert", type: "culture" }],
  "2025-12-18": [{ title: "Traditional Food Festival", type: "food" }],
  "2025-12-22": [{ title: "Children's Christmas Show", type: "popular" }],
  "2025-12-24": [{ title: "Christmas Eve Concert", type: "popular" }],
  "2025-12-31": [{ title: "New Year's Eve Party", type: "popular" }],

  /* ================= JANUARY ================= */
  "2026-01-04": [{ title: "Three Kings Parade", type: "popular" }],
  "2026-01-07": [{ title: "Winter Gastronomy Week", type: "food" }],
  "2026-01-10": [{ title: "Local Crafts Fair", type: "culture" }],
  "2026-01-12": [{ title: "Theatre Night", type: "culture" }],
  "2026-01-15": [{ title: "Traditional Rice Day", type: "food" }],
  "2026-01-18": [{ title: "Seafood Fair", type: "food" }],
  "2026-01-21": [{ title: "Photography Exhibition", type: "culture" }],
  "2026-01-25": [{ title: "Local Music Festival", type: "culture" }],
  "2026-01-30": [{ title: "Winter Sports Meetup", type: "popular" }],

  /* ================= FEBRUARY ================= */
  "2026-02-02": [{ title: "Candlemas Celebration", type: "popular" }],
  "2026-02-06": [{ title: "Tapas Route", type: "food" }],
  "2026-02-10": [{ title: "Independent Cinema Week", type: "culture" }],
  "2026-02-14": [{ title: "Valentine's Dinner Specials", type: "food" }],
  "2026-02-17": [{ title: "Carnival Parade", type: "popular" }],
  "2026-02-19": [{ title: "Carnival Costume Contest", type: "popular" }],
  "2026-02-22": [{ title: "Local Artists Market", type: "culture" }],
  "2026-02-27": [{ title: "Winter Food Fair", type: "food" }]
};

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
          const dayEvents = events[dateKey] || [];

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