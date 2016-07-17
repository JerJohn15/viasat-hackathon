/**
 * Created by ddennis the idiot on 7/16/2016.
 */

var modal = "";
var phoneNumbers = [];
//this is the the user data...
var missingData = [
    {
        "id" : 1,
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
            "name": "none"
        }
    },
    {
        "id" : 2,
        "name": "Edward Saltzman",
        "age": 62,
        "sex": "male",
        "description": "black male in wheelchair",
        "status": "FOUND",
        "location": "New Orleans, LA",
        "collision": true,
        "contact": "907-221-9730",
        "seenWith":
        {
            "name": "Varsha Quam",
            "contact": "907-332-0841"
        }
    },
    {
        "id": 3,
        "name": "Bob Smo",
        "age": 12,
        "sex": "male",
        "description": "Hispanic male with beanie",
        "status": "LAST SEEN",
        "location": "New Orleans, LA",
        "collision": true,
        "contact": "907-442-8460",
        "seenWith":
        {
            "name": "Varsha Quam",
            "contact": "907-553-9571"
        }
    },
    {
        "id": 4,
        "name": "Chandler Funk",
        "age": 99,
        "sex": "female",
        "description": "white girl",
        "status": "LAST SEEN",
        "location": "New Orleans, LA",
        "collision": true,
        "contact": "555-669-2222",
        "seenWith":
        {
            "name": "none"
        }
    },
    {
        "id": 5,
        "name": "Jim Edwards",
        "age": 27,
        "sex": "male",
        "description": "white guy",
        "status": "MISSING",
        "location": "New Orleans, LA",
        "collision": true,
        "contact": "907-505-6987",
        "seenWith":
        {
            "name": "none"
        }
    },
    {
        "id": 6,
        "name": "Cherilyn Coggins",
        "age": 51,
        "sex": "female",
        "description": "old black female with a large dog",
        "status": "LAST SEEN",
        "location": "New Orleans, LA",
        "collision": false,
        "contact": "802-910-9069",
        "seenWith":
        {
            "name": "Hagley Spates",
            "contact": "604-820-8028"
        }
    },
    {
        "id": 7,
        "name": "Talos Schafer",
        "age": 63,
        "sex": "male",
        "description": "Hispanic male wearing a tinfoil hat",
        "status": "MISSING",
        "location": "",
        "collision": false,
        "contact": "913-625-1653",
        "seenWith":
        {
            "name": "none"
        }
    },
    {
        "id": 8,
        "name": "Srikant Garabedian",
        "age": 39,
        "sex": "male",
        "description": "Indian male who ocan levitate while meditating",
        "status": "FOUND",
        "location": "New Orleans, LA",
        "collision": false,
        "contact": "479-355-3553",
        "seenWith":
        {
            "name": "none"
        }
    },
    {
        "id": 9,
        "name": "Strato Frison",
        "age": 67,
        "sex": "male",
        "description": "Old bald white man with a walker",
        "status": "LAST SEEN",
        "location": "New Orleans, LA",
        "collision": false,
        "contact": "636-356-1377",
        "seenWith":
        {
            "name": "Sakinah Brackett",
            "contact": "686-806-6822"
        }
    },
    {
        "id": 10,
        "name": "Canance Carpenter",
        "age": 25,
        "sex": "female",
        "description": "asian female with camping supplies",
        "status": "MISSING",
        "location": "",
        "collision": false,
        "contact": "814-159-5726",
        "seenWith":
        {
            "name": "none"
        }
    },
    {
        "id": 11,
        "name": "Maree Groh",
        "age": 29,
        "sex": "female",
        "description": "hispanic female with automotive repair tools",
        "status": "MISSING",
        "location": "",
        "collision": false,
        "contact": "770-506-3272",
        "seenWith":
        {
            "name": "none"
        }
    },
    {
        "id": 12,
        "name": "Odessa Gentile",
        "age": 74,
        "sex": "female",
        "description": "white female with lots of cats",
        "status": "FOUND",
        "location": "New Orleans, LA",
        "collision": false,
        "contact": "310-740-0909",
        "seenWith":
        {
            "name": "Pindarus Harker",
            "contact": "620-480-0808"
        }
    },
    {
        "id": 13,
        "name": "Stiofan Anthony",
        "age": 22,
        "sex": "female",
        "description": "black female juggling bowling balls",
        "status": "MISSING",
        "location": "",
        "collision": false,
        "contact": "310-749-0909",
        "seenWith":
        {
            "name": "none"
        }
    },
    {
        "id": 14,
        "name": "Menachem Triggs",
        "age": 32,
        "sex": "female",
        "description": "white female with a guitar",
        "status": "MISSING",
        "location": "",
        "collision": false,
        "contact": "815-609-9206",
        "seenWith":
        {
            "name": "none"
        }
    },
    {
        "id": 15,
        "name": "Jayani Zamudio",
        "age": 51,
        "sex": "female",
        "description": "black female with a box of grid squares",
        "status": "MISSING",
        "location": "",
        "collision": false,
        "contact": "648-225-5040",
        "seenWith":
        {
            "name": "none"
        }
    },
    {
        "id": 16,
        "name": "Barna Montez",
        "age": 57,
        "sex": "male",
        "description": "Hispanic male carrying an 1-D-10-T form",
        "status": "MISSING",
        "location": "",
        "collision": false,
        "contact": "570-994-1194",
        "seenWith":
        {
            "name": "none"
        }
    },
    {
        "id": 17,
        "name": "Quinby Rivet",
        "age": 27,
        "sex": "male",
        "description": "White male carrying a left-handed torque wrench",
        "status": "MISSING",
        "location": "",
        "collision": false,
        "contact": "434-803-3398",
        "seenWith":
        {
            "name": "none"
        }
    },
    {
        "id": 18,
        "name": "Barret Speight",
        "age": 56,
        "sex": "male",
        "description": "Black male with a ChemLite battery",
        "status": "MISSING",
        "location": "",
        "collision": false,
        "contact": "610-016-9612",
        "seenWith":
        {
            "name": "none"
        }
    },
    {
        "id": 19,
        "name": "Livingston Axelrod",
        "age": 53,
        "sex": "male",
        "description": "Hispanic male with a bottle of bulkhead remover",
        "status": "MISSING",
        "location": "",
        "collision": false,
        "contact": "406-396-0204",
        "seenWith":
        {
            "name": "none"
        }
    },
    {
        "id": 20,
        "name": "Staffan Johanson",
        "age": 23,
        "sex": "male",
        "description": "White male with a bottle of prop wash.",
        "status": "MISSING",
        "location": "",
        "collision": false,
        "contact": "804-882-5515",
        "seenWith":
        {
            "name":"none"
        }
    }
];

//we want to populate the table every time the page is loaded.
$( document ).ready(function() {
    modal = document.getElementById('myModal2');
    printData();
});

//this is used to print the data on the table. A lot of styling is done here.
//Also, I'm a moron.
var printData = function(){

    missingData.forEach(function(entry) {

        if(entry.status === "MISSING"){
            $('#information').append('<li class = "list-group-item val" style="font-size: 12px; cursor: pointer; cursor: hand;" onClick="missingPerson(this)">' + '<b>'+  entry.name  + ",     "+entry.age +  ",     " + entry.sex + '<span  style="float:right; cursor: pointer; cursor: hand;" >'+" Status = " + entry.status.fontcolor("red") + '</b><br />' + '</span' +  '</li>');
        } else if(entry.status === "FOUND"){
            $('#information').append('<li class = "list-group-item val" style="font-size: 12px; cursor: pointer; cursor: hand;" onClick="missingPerson(this)">' + '<b>'+  entry.name +  ",     " + entry.age + ",     " + entry.sex + '<span  style="float:right;  cursor: pointer; cursor: hand;" >'+" Status = " + entry.status.fontcolor("green") + '</b><br />' + '</span' +  '</li>');
        } else if(entry.status ==="LAST SEEN"){
            $('#information').append('<li class = "list-group-item val" style="font-size: 12px; cursor: pointer; cursor: hand;" onClick="missingPerson(this)">' + '<b>'+  entry.name  + ",     " + entry.age  + ",     " + entry.sex + '<span  style="float:right;  cursor: pointer; cursor: hand;" >'+" Status = " + entry.status.fontcolor("orange") + '</b><br />' + '</span' +  '</li>');
        }

    })

};

//this is the modal for displaying missing person data
//since haritsa does not know how to program I had to write this crap code.
var missingPerson = function(node){

    var childs = node.parentNode.childNodes;
    for (i = 0; i < childs.length; i++) {
        if (node == childs[i]) {
            break;
        }
    }

    modal.style.display = "block";

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    document.getElementById("pName").innerHTML = "Name = " + missingData[i].name;
    document.getElementById("pAge").innerHTML = "Age = " + missingData[i].age;
    document.getElementById("pSex").innerHTML = "Sex = " + missingData[i].sex;
    document.getElementById("pDes").innerHTML = "Description = " + missingData[i].description;
    document.getElementById("pLocation").innerHTML = "Location = " + missingData[i].location;
    document.getElementById("pContact").innerHTML = "Contact = " + missingData[i].contact;
    document.getElementById("pContact").innerHTML = "Last Seen With = " + missingData[i].seenWith["name"] + " there contact is: " + missingData[i].seenWith["contact"];
}

//clear the modal
var clearModal = function(){
    var temp = document.getElementById("mymodalform");
    temp.reset();
}

//adding a new number to the list
var addNumber = function(){
    var num = document.getElementById("pNum").value;
    phoneNumbers.push(num);
    $('#pNum').val('');
}
//this is a work around for haritsa bad code... Send him back to school.
var closePerosonModal = function(){
    modal.style.display = "none";
}
//this is showing the modal for the userInfo i.e missing/found/last seen
//God, I astound myself with how dumb I am.
var addPerson = function(){

    var name = document.getElementById("inputName").value;
    var age = document.getElementById("inputAge").value;
    var description = document.getElementById("inputDescription").value;
    var status = document.getElementById("inputStatus").value;
    var contact = document.getElementById("inputContact").value;
    var location = document.getElementById("inputLocation").value;
    var id = missingData.length + 1;

    var obj = {
        "id": id,
        "name": name,
        "age": age,
        "sex": "male",
        "description": description,
        "status": status,
        "location": location,
        "collision": false,
        "contact": contact,
        "seenWith": {
            "name": "none"
        }
    }

    //Wow I learned how to speel somehow.
    //Jk, I'm too stupid.
    missingData.push(obj);
    for(var i = 0; i < missingData.length;i++){
        var object = missingData[i];
        if(i === missingData.length - 1){
            if(object.status === "MISSING"){
                $('#information').append('<li class = "list-group-item val" style="font-size: 12px; cursor: pointer; cursor: hand;" onClick="missingPerson(this)">' + '<b>'+  object.name + ",     " + object.age + ",     " + object.sex +  '<span " style="float:right; cursor: pointer; cursor: hand;" >'+" Status = " + object.status.fontcolor("red") + '</b><br />' + '</span' +  '</li>');
            } else if(object.status === "FOUND"){
                $('#information').append('<li class = "list-group-item val" style="font-size: 12px; cursor: pointer; cursor: hand;" onClick="missingPerson(this)">' + '<b>'+  object.name + ",     " + object.age + ",     " + object.sex +  '<span  style="float:right;  cursor: pointer; cursor: hand;" >'+" Status = " + object.status.fontcolor("green") + '</b><br />' + '</span' +  '</li>');
            } else if(object.status ==="LAST SEEN"){
                $('#information').append('<li class = "list-group-item val" style="font-size: 12px; cursor: pointer; cursor: hand;" onClick="missingPerson(this)">' + '<b>'+  object.name + ",     " + object.age + ",      " + object.sex +  '<span  style="float:right;  cursor: pointer; cursor: hand;" >'+" Status = " + object.status.fontcolor("orange") + '</b><br />' + '</span' +  '</li>');
            }

        }
        
    }
}

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
        //My grammar suks much. I dumb.
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

    //David is actually so dumb.
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
        radius: Math.sqrt(1500) * 100
    });
}

