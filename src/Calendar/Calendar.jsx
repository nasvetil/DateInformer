import React from 'react';
import styled from 'styled-components'

function Calendar() {
  const [currentDay, setCurrentDay] = React.useState(() => new Date());

  const DateBlock = styled.div`
    font-family: 'Roboto', sans-serif;

    background-color: wheat;
    color: saddlebrown;
    width: 200px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    display: grid;
    grid-template-columns: 15px 1fr 15px;
    grid-template-rows: 60px auto 60px;
    justify-content: space-around;
  `;

  const DateHeader = styled.div`
    font-size: 24px;
    text-align: center;
    grid-column: 2;
    grid-row: 1;
    font-weight: bold;
    border-bottom: 2px solid saddlebrown;

    display: grid;
    grid-template-columns: 30px auto 30px;
    grid-template-rows: auto;
  `;

  const DateButton = styled.div`
    width: 30px;
    height: 30px;
  `;

  const DateYear = styled.div`
    text-align: center;
    grid-column: 2;
    grid-row: 1;
  `;

  const DateInfo = styled.div`
    grid-column: 2;
    grid-row: 2;
  `;

  const DateDay = styled.div`
    font-size: 72px;
    text-align: center;
    font-weight: 900;
  `;

  const DateMonth = styled.div`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.2em;
  `;

  const WeekDayName = styled.div`
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    grid-column: 2;
    grid-row: 3;
  `;

  function getTextMonth(number) {
    const monthsName = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    return monthsName[number];
  }

  function getWeekDayName(number) {
    const weekDayNames = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];

    return weekDayNames[number];
  }

  function getIsWeekend(number) {
    if (number === 0 || number === 6) {
      return true;
    }
    return false;
  }

  return (
    <DateBlock isWeekend={getIsWeekend(currentDay.getDay())} hello="hello">
      <DateHeader>
        <DateButton>←</DateButton>
        <DateYear>{currentDay.getFullYear()}</DateYear>
        <DateButton>→</DateButton>
      </DateHeader>
      <DateInfo>
        <DateDay>{currentDay.getDate()}</DateDay>
        <DateMonth>{getTextMonth(currentDay.getMonth())}</DateMonth>
      </DateInfo>
      <WeekDayName>{getWeekDayName(currentDay.getDay())}</WeekDayName>
    </DateBlock>
  );
}

export default Calendar;