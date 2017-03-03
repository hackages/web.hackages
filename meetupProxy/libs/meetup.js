import fetch from 'isomorphic-fetch';
import config from '../config/config';
import { flatten } from './utils';

const BASE_URL = 'https://api.meetup.com/2/';

const getEventUrl = (urlName = 'ReactJS-Belgium') =>
  `${BASE_URL}events?offset=0&format=json&limited_events=False&group_urlname=${urlName}&photo-host=public&page=20&fields=&order=time&desc=false&status=upcoming`;

const getGroupUrl = (urlName = 'ReactJS-Belgium') =>
  `${BASE_URL}groups?offset=0&format=json&group_urlname=${urlName}&photo-host=public&page=20&radius=25.0&fields=&order=id&desc=false&key=${config.key}`;

const Fetch = (url = getGroupUrl('ReactJS-Belgium')) =>
  new Promise((resolve) => {
    fetch(url)
      .then(res => res.json())
      .then(({ results }) => resolve(results || []))
      .catch(() => resolve([]));
  });

const getAll = (urlFonction, objects) =>
  Promise.all(objects.map(obj => Fetch(urlFonction(obj)))).then(results => flatten(results));

export const fetchGroups = (groups = []) => getAll(getGroupUrl, groups);
export const fetchEvents = (groups = []) => getAll(getEventUrl, groups);
