import express from 'express';
import Cache from 'express-redis-cache';
import redis from 'redis';

import { timestampToDateString as dateString, firstEvents } from './libs/utils';
import { fetchEvents, fetchGroups } from './libs/meetup';

import config from './config/config';

console.log();

const cache = Cache({
  client: redis.createClient(process.env.REDIS_URL),
});

console.log(redis);

const app = express();
app.use((req, res, next) => {
  cache.route();
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

/**
  Out: [0 -> n groups: {name, thumb, link}]
**/
app.get('/groups', (req, res) => {
  fetchGroups(config.groups)
  .then((groups) => {
    res.json(groups.map((group) => {
      const { name, link } = group;
      const thumb = group.group_photo ? group.group_photo.thumb_link : 'http://preview.hackages.io/images/js_logo.png';
      return { name, thumb, link };
    }));
  });
});

/**
  params: numberOfEvents: specifies the number of events you want (optional)
  Out: [0 -> number groups: {name, thumb, link}]
**/
app.get('/events/:numberOfEvents?', (req, res) => {
  fetchEvents(config.groups).then((events) => {
    const { numberOfEvents } = req.params;
    const filteredEvents = numberOfEvents ? firstEvents(events, +numberOfEvents) : events;
    res.json(filteredEvents.map((event) => {
      const city = events.venue ? events.venue.city : '';
      const { name, group: { name: groupName }, time, event_url } = event;
      return {
        name,
        city,
        event_url,
        groupName,
        time,
        formatedTime: dateString(time),
      };
    }));
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server up and running at ${config.host}:${config.port}`);
});
