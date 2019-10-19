'use strict'

var gStartPos = {
    lat: 29.55805,
    lng: 34.94821
};
var gMarker

function init() {
    createLocs()
    renderLocs()
}

function initMap() {
    gMap = new google.maps.Map(document.getElementById('map'), {
        center: gStartPos,
        zoom: 12
    });
    gMarker = new google.maps.Marker({ position: gStartPos, map: gMap })
    gMap.addListener('click', function (event) {
        var pos = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
        }

        var marker = new google.maps.Marker({ position: pos, map: gMap });
        marker.title = prompt('name:')
        marker.getTitle();
        addLoc(pos.lat, pos.lng, marker.title)
        gMap.setCenter(pos);
    })
}


function getUserPos() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(centerMap);

    }
}

function renderLocs() {
    let elLocsList = document.querySelector('.locs');
    let locs = getgLocs();
    let locsHTML = locs.map((loc) => {

        return `<li onclick="onLoc(${loc.id})">${loc.name}</li>`
    })
    elLocsList.innerHTML = locsHTML.join('');
}

function onLoc(locId) {
    var loc = findLocById(locId)
    goToLoc(loc);
}