const cities = ['amsterdam', 'belgium', 'Zurich', 'geneva', 'dublin'];

// TODO: fetch those directly from api.meetup.com
export default {
  IPVps: '172.31.11.148',
  groups: [
    ...[cities.map(city => `javascript-lab-${city}`)],
    'ReactJS-Belgium',
    'Tech-Academy-for-Business-Minds',
    'Expat-Club',
  ],
  key: process.env.MEETUP_API_KEY || 'Please provide ENV.MEETUP_API_KEY',
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 4200,
  redisUrl: process.env.REDIS_URL || 'Pleace provie ENV.REDIS_URL',
};
