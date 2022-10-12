const HourFormater = (hour) => {
  const gethour = hour.slice(0, 2);
  const newHour =
    gethour <= 12
      ? gethour + ":" + hour.slice(2, 4) + " AM"
      : gethour - 12 + ":" + hour.slice(2, 4) + " PM";
  return newHour;
};

export default HourFormater;
