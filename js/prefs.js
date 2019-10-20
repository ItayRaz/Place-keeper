'use strict'

function onSubmit() {
    var name = document.querySelector('.name').value;
    var bgc = document.querySelector('.bgc').value;
    var txt = document.querySelector('.txt').value;
    createUserPref(name, bgc, txt);
    setUserPrefs();
}

function showAge(newVal) {
    document.getElementById("sAge").innerHTML = newVal;
}

function setUserPrefs () {
    if (!loadFromStorage(PREF_KEY)) return;
    var user = loadFromStorage(PREF_KEY);
    document.body.style.background = 'none'
    document.body.style.backgroundColor = user.bgc;
    document.body.style.color = user.txtColor;
    document.querySelector('.forecast').innerHTML = `<h2 class="forcast-title"> Astrological Forecast </h2>` + user.forecast;
}