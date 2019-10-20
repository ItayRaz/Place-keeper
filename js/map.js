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

        marker.title = prompt('name:')
        if (!marker.title) return;
        var marker = new google.maps.Marker({ position: pos, map: gMap });
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

        return `<li onclick="onLoc(${loc.id})">${loc.name} <i class="far fa-trash-alt" onclick="onTrash(${loc.id})"></i></li>`
    })
    elLocsList.innerHTML = locsHTML.join('');
}

function onLoc(locId) {
    var loc = findLocById(locId)
    goToLoc(loc);
}

function onTrash(id) {
    removeLoc(id);
    renderLocs();
}