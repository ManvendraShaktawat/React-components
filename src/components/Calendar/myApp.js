import React, { useState, useEffect } from "react";
import "./CalendarApp.css";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CalendarApp = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState({});
  const [newEventText, setNewEventText] = useState("");

  useEffect(() => {
    setSelectedDate(null);
    setNewEventText("");
  }, [currentDate]);

  // Get the first and last day of the current month
  const getFirstDayOfMonth = () => {
    return new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  };

  const getLastDayOfMonth = () => {
    return new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handleDateClick = (day) => {
    const clickedDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    setSelectedDate(clickedDate);
  };

  const handleAddEvent = () => {
    if (!newEventText || !selectedDate) return;

    const eventDateKey = selectedDate.toDateString();
    const updatedEvents = { ...events };

    if (!updatedEvents[eventDateKey]) {
      updatedEvents[eventDateKey] = [];
    }

    updatedEvents[eventDateKey].push(newEventText);
    setEvents(updatedEvents);
    setNewEventText("");
  };

  const renderCalendar = () => {
    const firstDayOfMonth = getFirstDayOfMonth();
    const lastDayOfMonth = getLastDayOfMonth();
    const daysInMonth = [];

    // Fill in days of the month
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      daysInMonth.push(i);
    }

    // Offset for the first day of the month
    const leadingDays = new Array(firstDayOfMonth.getDay()).fill(null);

    // Combine leading empty days and actual days of the month
    const allDays = [...leadingDays, ...daysInMonth];

    return (
      <div className="calendar-grid">
        {daysOfWeek.map((day, idx) => (
          <div key={idx} className="day-header">
            {day}
          </div>
        ))}
        {allDays.map((day, idx) => (
          <div
            key={idx}
            className="day-cell"
            onClick={() => day && handleDateClick(day)}
          >
            <div className="day-number">{day}</div>
            <div className="events">
              {events[
                new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth(),
                  day
                )?.toDateString()
              ]?.map((event, i) => (
                <div key={i} className="event-item">
                  {event}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="calendar-app">
      <h2>Calendar</h2>
      <div className="calendar-controls">
        <button onClick={handlePrevMonth}>Previous</button>
        <h3>
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </h3>
        <button onClick={handleNextMonth}>Next</button>
      </div>

      {renderCalendar()}

      {selectedDate && (
        <div className="event-form">
          <h4>Add Event for {selectedDate.toDateString()}</h4>
          <input
            type="text"
            placeholder="Event description"
            value={newEventText}
            onChange={(e) => setNewEventText(e.target.value)}
          />
          <button onClick={handleAddEvent}>Add Event</button>
        </div>
      )}
    </div>
  );
};

export default CalendarApp;
