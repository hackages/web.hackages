const cities = ["amsterdam", "belgium", "Zurich", "geneva", "dublin"];
const jslabGroups = cities.map(city => `javascript-lab-${city}`);


// TODO: fetch those directly from api.meetup.com
module.exports = {
  IPVps: '172.31.11.148',
  groups: [
    ...jslabGroups,
    "paris",
    "ReactJS-Belgium",
    "Tech-Academy-for-Business-Minds",
    "Angular-Belgium"
  ],
  key: "2d7d73151124a1d63782c7af452e3b"
};
