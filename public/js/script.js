$.getJSON('http://ip-api.com/json', function (pos) {
    var myLat = pos.lat;
    var myLon = pos.lon;

function initMap() {
    var uluru = {
        lat: myLat,
        lng: myLon
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });

    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
});
