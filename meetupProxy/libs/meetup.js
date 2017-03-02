const fetch = require('isomorphic-fetch');

const getUrl = (urlName = "ReactJS-Belgium") => {
  return `https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=${urlName}&photo-host=public&page=20&fields=&order=time&desc=false&status=upcoming`;
};

const fetchEvent = (group = "ReactJS-Belgium") => {
  return new Promise((resolve) => {
    fetch(getUrl(group))
      .then(res => res.json())
      .then(({results}) => resolve(results));
  });
};

export default function fetchEvents(groups = []){
  const promises = groups.map(group => fetchEvent(group));
  return Promise.all(promises);
};
