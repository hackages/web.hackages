
window.onload = function () {
  initMap();


  function initMap() {
    var styles = [
      {
        stylers: [
          { hue: '#00ffe6' },
          { saturation: -20 }
        ]
      },{
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
          { lightness: 100 },
          { visibility: 'simplified' }
        ]
      },{
        featureType: 'road',
        elementType: 'labels',
        stylers: [
          { visibility: 'off' }
        ]
      }
    ];

    var styledMap = new google.maps.StyledMapType(styles,
      {name: 'Styled Map'});
    var myLatlng = new google.maps.LatLng(50.833511, 4.358177);

    var mapOptions = {
      zoom: 13,
      center: myLatlng,
      disableDefaultUI: true,
      mapTypeControlOptions: {
        mapTypeIds: ['map_style']
      }
    };
    var map = new google.maps.Map(document.getElementById('map_office'),
      mapOptions);

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    var image = '../images/marker.svg';
    var marker = new google.maps.Marker({
      position: myLatlng,
      title:'Our Office !',
      icon: image
    });

    marker.setMap(map);
  }
};
