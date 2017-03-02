const app = document.getElementById('mount-point');

$.get('http://localhost:4200/events', (data) => {
  console.log(data);
});
