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