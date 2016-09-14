
// Constructor to create search box
function searchControl(controlDiv, map){

    // Set CSS for the control border.
    var controlUI = document.createElement('div');
    controlUI.style.backgroundColor = '#fff';
    controlUI.style.border = '2px solid #fff';
    controlUI.style.borderRadius = '3px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginBottom = '22px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Click to recenter the map';
    controlDiv.appendChild(controlUI);

    // Set CSS for the control interior.
    var controlText = document.createElement('div');
    controlText.style.color = 'rgb(25,25,25)';
    controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlText.style.fontSize = '16px';
    controlText.style.lineHeight = '38px';
    controlText.style.paddingLeft = '5px';
    controlText.style.paddingRight = '5px';
    controlText.innerHTML = 'Center Map';
    controlUI.appendChild(controlText);

    // Setup the click event listeners: simply set the map to Chicago.
    controlUI.addEventListener('click', function() {
        map.setCenter(chicago);
    });
}

var map;
var chicago = {lat: 41.85, lng: -87.65};
var initMap = function () {
    // Creating map
        map = new google.maps.Map(document.getElementById('map'), {
            center: chicago,
            zoom: 8,
            mapTypeControl: false,
            streetViewControl: false
        });

    // Create the DIV to hold the control and call the searchControl()
    // constructor passing in this DIV.
    var centerControlDiv = document.createElement('div');
    var centerControl = new searchControl(centerControlDiv, map);

    centerControlDiv.index = 1;
    // Adding search control to map
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(centerControlDiv);
}


$(document).ready(initMap);