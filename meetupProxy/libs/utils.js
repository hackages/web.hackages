export function flatten(array){
    const concat = [];
    array.map(e => e.length > 0 ? concat.push(...e) : null);
    return concat;
}

const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

export function timestampToDateString(timestamp){
  const date = new Date(timestamp);
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const hour = formatHour(date.getHours());
  return `${day} ${month} ${hour}`;
}

function formatHour(hour){
  return hour > 12 ? hour - 12 + "PM" : hour + "AM";
}

export function firstEvents(events, n = 3){
  events.sort((a, b) => a.time - b.time);
  return events.slice(0, 3);
}
