let map;

function initMap() {
  const options = {
    zoom: 15,
    center: { lat: 55.76488404455363, lng: 37.64481325384762 },
  };
  map = new google.maps.Map(document.getElementById("contact-map"), options);

  addMarker({
    coordinates: { lat: 55.76488404455363, lng: 37.64481325384762 },
  });
}

function addMarker(prop) {
  let marker = new google.maps.Marker({
    position: prop.coordinates,
    map: map,
  });
}

initMap();
