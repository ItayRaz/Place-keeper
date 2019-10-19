'use strict'

const LOC_KEY = 'locs'
let gNextId = 100;
let gMap;
let gLocs = [];


function createLocs() {
    var locs = loadFromStorage(LOC_KEY);
    if (!locs) locs = [createLoc(29.55805, 34.94821, 'Eilat')]
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
    gMarker = new google.maps.Marker({ position: pos, map: gMap })
}

function findLocById (id) {
    var loc = gLocs.find((loc) => {
        return loc.id === id;
    })
    return loc
}
