import { useState } from "react";
import {
  CalendarWrapper,
  CalendarHeader,
  CalendarMonth,
  CalendarNav,
  NavAction,
  CalendarContent,
  CalendarDays,
  CalendarCell,
  CalendarPeriod,
} from "./Calendar.styled";

const Calendar = ({
  isReadonly = false,
  selectedDate = null,
  onDateSelect = () => {},
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(
    selectedDate || new Date().getDate()
  );

  const monthNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const daysOfWeek = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    const firstDay = new Date(year, month, 1).getDay();
    return firstDay === 0 ? 6 : firstDay - 1;
  };

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handleDayClick = (day) => {
    if (!isReadonly) {
      setSelectedDay(day);
      onDateSelect(
        new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
      );
    }
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    const days = [];

    const prevMonthDays = getDaysInMonth(year, month - 1);
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push(
        <CalendarCell key={`prev-${i}`} $otherMonth>
          {prevMonthDays - i}
        </CalendarCell>
      );
    }

    const today = new Date();
    const isCurrentMonth =
      today.getFullYear() === year && today.getMonth() === month;

    for (let day = 1; day <= daysInMonth; day++) {
      const isWeekend = (firstDay + day - 1) % 7 >= 5;
      const isCurrent = isCurrentMonth && day === today.getDate();
      const isSelected = day === selectedDay;

      days.push(
        <CalendarCell
          key={day}
          $isCurrent={isCurrent}
          $isWeekend={isWeekend}
          $isSelected={isSelected}
          $isClickable={!isReadonly}
          onClick={() => handleDayClick(day)}
        >
          {day}
        </CalendarCell>
      );
    }

    const totalCells = 42;
    const nextMonthDays = totalCells - (firstDay + daysInMonth);
    for (let day = 1; day <= nextMonthDays; day++) {
      days.push(
        <CalendarCell key={`next-${day}`} $otherMonth>
          {day}
        </CalendarCell>
      );
    }

    return days;
  };

  return (
    <CalendarWrapper>
      <CalendarHeader>
        <CalendarMonth>
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </CalendarMonth>
        <CalendarNav>
          <NavAction onClick={prevMonth} disabled={isReadonly}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="11"
              viewBox="0 0 6 11"
            >
              <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
            </svg>
          </NavAction>
          <NavAction onClick={nextMonth} disabled={isReadonly}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="11"
              viewBox="0 0 6 11"
            >
              <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
            </svg>
          </NavAction>
        </CalendarNav>
      </CalendarHeader>

      <CalendarContent>
        <CalendarDays>
          {daysOfWeek.map((day, index) => (
            <CalendarCell key={day} $isHeader $isWeekend={index >= 5}>
              {day}
            </CalendarCell>
          ))}
        </CalendarDays>
        <CalendarDays>{renderCalendar()}</CalendarDays>
      </CalendarContent>

      {selectedDate && (
        <CalendarPeriod>
          <p>
            Срок исполнения:{" "}
            <span>{selectedDate.toLocaleDateString("ru-RU")}</span>
          </p>
        </CalendarPeriod>
      )}
    </CalendarWrapper>
  );
};

export default Calendar;
