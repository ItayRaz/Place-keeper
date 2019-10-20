'use strict'

const LOC_KEY = 'locs'
let gNextId = 100;
let gMap;
let gLocs = [];


function createLocs() {
    var locs = loadFromStorage(LOC_KEY);
    if (!locs || locs.length === 0) locs = [createLoc(29.55805, 34.94821, 'Eilat')]
    gLocs = locs;
    gNextId = gLocs[0].id;
    saveToStorage(LOC_KEY, gLocs);
}


function createLoc(lat, lng, name) {
    let loc = {
        id: ++gNextId,
        lat,
        lng,
        name
    }
    return loc;
}

function addLoc(lat, lng, name) {
    gLocs.unshift(createLoc(lat, lng, name));
    saveToStorage(LOC_KEY, gLocs);
    renderLocs()
}


function centerMap(position) {
    let pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    var marker = new google.maps.Marker({ position: pos, map: gMap });
    gMap.setCenter(pos);
}

function getgLocs() {
    return gLocs;
}

function goToLoc(loc) {
    var pos = {
        lat: loc.lat,
        lng: loc.lng
    }
    gMap = new google.maps.Map(document.getElementById('map'), {
        center: pos,
        zoom: 12
    });
    gMap.addListener('click', function (event) {
        var pos = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
        }

        var marker = new google.maps.Marker({ position: pos, map: gMap });
        marker.title = prompt('name:');
        if (!marker.title) return;
        marker.getTitle();
        addLoc(pos.lat, pos.lng, marker.title)
        gMap.setCenter(pos);
    })
    gMarker = new google.maps.Marker({ position: pos, map: gMap })
}

function removeLoc(id) {
    var locIdx = findLocIndex(id);
    gLocs.splice(locIdx, 1);
    saveToStorage(LOC_KEY, gLocs);
}





function findLocById (id) {
    var loc = gLocs.find((loc) => {
        return loc.id === id;
    })
    return loc
}

function findLocIndex (id) {
    var loc = gLocs.findIndex((loc) => {
        return loc.id === id;
    })
    return loc;
}
