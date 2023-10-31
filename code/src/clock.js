export const getTimeString = (now) => {
  const hour = now.getHours();
  const minute = now.getMinutes();
  const seconds = now.getSeconds();
  return `${hour}:${minute}:${seconds}`;
};

const getNextYearDate = (now) => {
  const endOfYearDate = new Date(0);
  endOfYearDate.setUTCFullYear(now.getUTCFullYear() + 1);
  return endOfYearDate;
};

const getChristmasDate = (now) => {
  const endOfYearDate = new Date(0);
  endOfYearDate.setUTCFullYear(now.getUTCFullYear());
  endOfYearDate.setUTCDate(24);
  endOfYearDate.setUTCMonth(11);
  return endOfYearDate;
};

//console.log(getChristmasDate(new Date()));

export const getSecondsLeftOfYear = (now) => {
  const startOfNextYear = getNextYearDate(now);
  const startOfNextYearMillis = startOfNextYear.getTime();
  const nowMillis = now.getTime();
  return Math.floor((startOfNextYearMillis - nowMillis) / 1000);
};

export const getSecondsLeftChristmas = (now) => {
  const startOfNextYear = getChristmasDate(now);
  const startOfNextYearMillis = startOfNextYear.getTime();
  const nowMillis = now.getTime();
  return Math.floor((startOfNextYearMillis - nowMillis) / 1000);
};
