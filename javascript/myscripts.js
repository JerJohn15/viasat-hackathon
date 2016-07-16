/**
 * Created by ddennis on 7/16/2016.
 */


//this is the the user data...
var missingData = [
    {
        "name": "Megan Noland",
        "age": 35,
        "sex": "female",
        "description": "white female wearing red shirt",
        "status": "MISSING",
        "location": "",
        "collision": false,
        "contact": "931-567-2571",
        "seenWith":
        {
            "name": "Raphella Motta",
            "contact": "931-678-3682"
        }
    },
    {
        "name": "Edward Saltzman",
        "age": 62,
        "sex": "male",
        "description": "black male in wheelchair",
        "status": "FOUND",
        "location": "Port Protection, AK",
        "collision": true,
        "contact": "907-221-9730",
        "seenWith":
        {
            "name": "Varsha Quam",
            "contact": "907-332-0841"
        }
    },
    {
        "name": "Edward Saltzman",
        "age": 12,
        "sex": "male",
        "description": "Hispanic male with beanie",
        "status": "FOUND",
        "location": "Nome, AK",
        "collision": true,
        "contact": "907-442-8460",
        "seenWith":
        {
            "name": "Varsha Quam",
            "contact": "907-553-9571"
        }
    }
];

//we want to populate the table every time the page is loaded. 
$( document ).ready(function() {

    missingData.forEach(function(entry) {
        $('#data').append('<b>'+entry.name+ " " + entry.age + " " + entry.sex + " " + "Status = " + entry.status + '</b><br />' + '</b><br />');
    })

});


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

