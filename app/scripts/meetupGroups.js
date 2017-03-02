const app = document.getElementById('groups-app');

function createMarkup(events){
  return '<div class="col-sm-4 col-md-3">'+
          '<img width="80" class="img-responsive" src="'+events.thumb+'" alt="">'+
          '<p>'+events.name+'</p>'+
          '<a href="'+events.link+'" target="_blank" class="btn btn-hackages medium">Join it</a>'+
        '</div>'
}

function renderMarkup(el, markup){
  el.innerHTML = markup;
}

// I know, this is not what it looks like,
// Please dont fire me,
// Gulp wouldnt build unless I used var here
$.get('http://calapez.me/groups', function(data){
  console.log(data);
  var htmlMarkup = '';
  for(var i=0; i<data.length; ++i){
    htmlMarkup += createMarkup(data[i]);
  }
  renderMarkup(app, htmlMarkup);
});
