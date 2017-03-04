const appEvents = document.getElementById('mount-point');

function createMarkup1(events){
  return '<div class="col-md-3 col-sm-4">'+ 
          '<a href="#" class="tile">'+ 
            '<h4>'+events.name+'</h4>'+
            '<p class="type">'+events.groupName+'</p>'+
            '<p class="location">'+events.city+'</p>'+
            '<p class="date">'+events.formatedTime+'</p>'+
            '<button class="btn btn-hackages medium">Join us</button>'+
            '<div class="clearfix"></div>'+
        '</div>';
}

function renderMarkup1(el, markup){
  el.innerHTML = markup;
}

// I know, this is not what it looks like,
// Please dont fire me,
// Gulp wouldnt build unless I used var here
$.get('http://web-hackages.herokuapp.com/events', function(data){
  var htmlMarkup1 = '';
  for(var i=0; i<data.length; ++i){
    htmlMarkup1 += createMarkup1(data[i]);
  }
  renderMarkup1(appEvents, htmlMarkup1);
});
