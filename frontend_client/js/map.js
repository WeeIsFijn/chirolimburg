function initMap() {
  var vaartstraat = {lat: 50.935260, lng: 5.338757};
    var kalei = {lat: 51.023755, lng: 5.690084};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: vaartstraat, kalei
  });
  var markerBanier = new google.maps.Marker({
    position: vaartstraat,
    map: map
  });
  var markerKalei = new google.maps.Marker({
    position: kalei,
    map: map
  });

  var contentStringBanier = '<div class="info-window">' +
                '<h3>De Banier</h3>' +
                '<div class="info-content">' +
                '<p>Hier moet nog nader te bepalen info komen!</p>' +
                '</div>' +
                '</div>';

  var contentStringKalei = '<div class="info-window">' +
                '<h3>De Kalei</h3>' +
                '<div class="info-content">' +
                '<p>Hier moet nog nader te bepalen info komen!</p>' +
                '</div>' +
                '</div>';

  var infowindowBanier = new google.maps.InfoWindow({
      content: contentStringBanier,
      maxWidth: 400
  });

  var infowindowKalei = new google.maps.InfoWindow({
      content: contentStringKalei,
      maxWidth: 400
  });

  markerBanier.addListener('click', function () {
      infowindowBanier.open(map, markerBanier);
  });

  markerKalei.addListener('click', function () {
      infowindowKalei.open(map, markerKalei);
  });
}
