import express from 'express';

import { flatten, timestampToDateString as dateString, firstEvents } from './libs/utils';
import meetup, {fetchGroups} from './libs/meetup';

import config from './config/config';
const host = process.env.host || config.IPVps;

const app = express();
app.use((req, res, next) => { 
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get('/groups', (req, res) => {
  fetchGroups(config.groups)
  .then(results => {
    results = flatten(results);
    res.json(results.map(e => {
      const {name, link} = e;
      let thumb;
      if(e.group_photo){
        thumb = e.group_photo.thumb_link;
      } else {
        thumb = "http://preview.hackages.io/images/js_logo.png";
      }
      return {name, thumb, link};
    }));
  });
});

app.get('/events/:all?', (req, res) => {
  meetup(config.groups).then(results => {
    results = flatten(results);
    console.log(req.params);
    if(!req.params.all){
      results = firstEvents(results);
    }
    
    res.json(results.map(e => {
      let city = '';
      if(e.venue){
        city = e.venue.city;
      }
      const {name, group: {name: groupName}, time, event_url} = e;
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

app.listen(4200, host);
