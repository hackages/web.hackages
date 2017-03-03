export const flatten = array => array.reduce((acc, next) => [...acc, ...next]);

const formatHour = hour => hour > 12 ? `${hour - 12}PM` : `${hour}AM`;

const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

export const timestampToDateString = timestamp =>
  [new Date(timestamp)]
    .map(d => ({ day: d.getDate(), month: months[d.getMonth()], hour: formatHour(d.getHours()) }))
    .map(({ day, month, hour }) => `${day} ${month} ${hour}`).join();

export const sortByDate = objects => [...objects].sort((a, b) => a.time - b.time);

export const firstEvents = (objects, n = 3) => objects.slice(0, n);
