'use strict'

var gUser;
const PREF_KEY = 'prefs'
var gForecast = [`The Moon is traveling through witty Gemini today. Call, text, send email, write letters. Visit someone you've missed. Watch a movie and talk about it at a coffee shop. Get out and about. Don't sleep in.`, `Our instincts are to communicate, think, and learn under the influence of Moon in Gemini. We are motivated by a desire for variety and by an instinctive curiosity. The Moon in Gemini is light-hearted, breezy, and curious, but it can also be restless and fickle.`, `The Moon in Gemini generally favors the following activities: Mental and communicative actions, and more than one activity at once. Reading, learning, letters and emails, errands, writing, teaching, making connections, short trips.`]

function createUserPref(name, bgc, txtColor) {
    var user = {
        name,
        bgc,
        txtColor,
        forecast: gForecast[getRandomInt(0, 2)]
    }
    saveToStorage(PREF_KEY, user);
    gUser = loadFromStorage(PREF_KEY);
    return user;
}

function setUserPrefs () {
    if (!loadFromStorage(PREF_KEY)) return;
    var user = loadFromStorage(PREF_KEY)    
    document.body.style.backgroundColor = user.bgc;
    document.body.style.color = user.txtColor;
    document.querySelector('.forecast').innerText = user.forecast;
}