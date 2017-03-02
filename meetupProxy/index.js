import express from 'express';

import { flatten, timestampToDateString as dateString, firstEvents } from './libs/utils';
import meetup from './libs/meetup';

import config from './config/config';

const app = express();
app.use((req, res, next) => { 
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get('/events', (req, res) => {
  meetup(config.groups).then(results => {
    results = flatten(results);
    const first3Events = firstEvents(results);
    
    res.json(first3Events.map(e => {
      const {name, venue: {city}, group: {name: groupName}, time, event_url} = e;
        return {
          name,
          city,
          event_url,
          groupName,
          time,
          formatedTime: dateString(time)
        }
      }));
  });
});

app.listen(4200, config.IPVps);
