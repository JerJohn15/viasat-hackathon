/**
 * Created by ddennis on 7/16/2016.
 */

//stuff for the google map.
function initMap() {
    var styles = [{
        "elementType": "geometry",
        "stylers": [{"hue": "#ff4400"}, {"saturation": -68}, {"lightness": -4}, {"gamma": 0.72}]
    }, {"featureType": "road", "elementType": "labels.icon"}, {
        "featureType": "landscape.man_made",
        "elementType": "geometry",
        "stylers": [{"hue": "#0077ff"}, {"gamma": 3.1}]
    }, {
        "featureType": "water",
        "stylers": [{"hue": "#00ccff"}, {"gamma": 0.44}, {"saturation": -33}]
    }, {"featureType": "poi.park", "stylers": [{"hue": "#44ff00"}, {"saturation": -23}]}, {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{"hue": "#007fff"}, {"gamma": 0.77}, {"saturation": 65}, {"lightness": 99}]
    }, {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [{"gamma": 0.11}, {"weight": 5.6}, {"saturation": 99}, {"hue": "#0091ff"}, {"lightness": -86}]
    }, {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [{"lightness": -48}, {"hue": "#ff5e00"}, {"gamma": 1.2}, {"saturation": -23}]
    }, {
        "featureType": "transit",
        "elementType": "labels.text.stroke",
        "stylers": [{"saturation": -64}, {"hue": "#ff9100"}, {"lightness": 16}, {"gamma": 0.47}, {"weight": 2.7}]
    }];

    var styledMap = new google.maps.StyledMapType(styles,
        {name: "Styled Map"});
    var mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(29.9511, -90.0715),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };


    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    var cityCircle = new google.maps.Circle({
        strokeColor: '#EFA533',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#F3BE6C',
        fillOpacity: 0.35,
        map: map,
        center: {lat:29.9511,lng:-90.0715},
        radius: Math.sqrt(900) * 100
    });
}
