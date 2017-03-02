const express = require('express');

const flatten = require('./libs/utils').flatten;
const dateString = require('./libs/utils').timestampToDateString;
const config = require('./config/config');
const meetup = require('./libs/meetup');

const app = express();
app.use((req, res, next) => { 
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get('/events', (req, res) => {
  console.log('Got a new request');
  meetup(config.groups)
  .then(results => {
    results = flatten(results);
     res.json(results.map(e => {
      const {name, venue: {city}, group: {name: groupName}, time} = e;
        return {
          name,
          city,
          groupName,
          time,
          formatedTime: dateString(time)
        }
      }));
  });
});

app.listen(4200);
