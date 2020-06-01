import React from 'react';
import styled from 'styled-components'

function Calendar() {
  const [currentDay, setCurrentDay] = React.useState(() => new Date());

  const DateBlock = styled.div`
    background-color: wheat;
    color: saddlebrown;
    font-family: Roboto, sans-serif;
    width: 200px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  `;

  const DateDay = styled.div`
    font-size: 72px;
    text-align: center;
  `;

  const Month = styled.div`
    font-size: 36px;
    text-align: center;
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

  return (
    <DateBlock>
      <DateDay>{currentDay.getDate()}</DateDay>
      <Month>{getTextMonth(currentDay.getMonth())}</Month>
    </DateBlock>
  );
}

export default Calendar;