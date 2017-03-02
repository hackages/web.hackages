const fetch = require('isomorphic-fetch');
import config from '../config/config'

const getUrl = (urlName = "ReactJS-Belgium") => {
  return `https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=${urlName}&photo-host=public&page=20&fields=&order=time&desc=false&status=upcoming`;
};

const getUrlGroup = (urlName = "ReactJS-Belgium") => {
  return `https://api.meetup.com/2/groups?offset=0&format=json&group_urlname=${urlName}&photo-host=public&page=20&radius=25.0&fields=&order=id&desc=false&key=${config.key}`;
}

const Fetch = (url = getUrl("ReactJS-Belgium")) => {
  return new Promise((resolve) => {
    fetch(url)
      .then(res => res.json())
      .then(({results}) => resolve(results));
  });
};

export function fetchGroups(groups = []){
  const promises = groups.map(group => Fetch(getUrlGroup(group)));
  return Promise.all(promises);
}

export default function fetchEvents(groups = []){
  const promises = groups.map(group => Fetch(getUrl(group)));
  return Promise.all(promises);
};
