const getDayAndWeekNumbers = () => {
  const currDate = new Date();
  const startDate = new Date(currDate.getFullYear(), 0, 1);
  const days = Math.floor((currDate - startDate) / (24 * 60 * 60 * 1000));
  const weekNum = Math.ceil(days / 7);
  return { weekNumber: weekNum, dayNumber: days + 1 };
};

export default getDayAndWeekNumbers;
