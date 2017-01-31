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

  var contentStringBanier = '<div class="row">' +
                                '<div class="col-lg-12 text-center">' +
                                  '<img src="img/chirologo.png" class="col-md-3"></img>' +
                                    '<div class="col-md-9">' +
                                      '<h2 class="section-heading">De Banier</h2>' +
                                      '<p>Hier nog ewa info!</p>' +
                                    '</div>' +
                                '</div>' +
                            '</div>';

  var contentStringKalei = '<div class="row">' +
                                '<div class="col-lg-12 text-center">' +
                                  '<img src="img/chirologo.png" class="col-md-3"></img>' +
                                    '<div class="col-md-9">' +
                                      '<h2 class="section-heading">De Kalei</h2>' +
                                      '<p>Hier nog ewa info!</p>' +
                                    '</div>' +
                                '</div>' +
                            '</div>';

  var infowindowBanier = new google.maps.InfoWindow({
      content: contentStringBanier,
  });

  var infowindowKalei = new google.maps.InfoWindow({
      content: contentStringKalei,
  });

  markerBanier.addListener('click', function () {
      infowindowBanier.open(map, markerBanier);
  });

  markerKalei.addListener('click', function () {
      infowindowKalei.open(map, markerKalei);
  });
}
