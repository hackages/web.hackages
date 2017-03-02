const app = document.getElementById('mount-point');

function flatten(array){
    const concat = [];
    array.map(e => e.length > 0 ? concat.push(...e) : null);
    return concat;
}

function createMarkup(events){
  return `
          <div class="col-md-3 col-sm-4">
            <a href="#" class="tile">
              <h4>${events.name}</h4>
              <p class="type">${events.groupName}</p>
              <p class="location">${events.city}</p>
              <p class="date">${events.formatedTime}</p>
              <button class="btn btn-hackages medium">Join us</button>
              <div class="clearfix"></div>
          </div>`;
}

function renderMarkup(el, markup){
  el.innerHTML = markup;
}

$.get('http://localhost:4200/events', (data) => {
  data.map(e => {
    renderMarkup(app, createMarkup(e));
  });
});
