var aztroAPIKey = '0c3a2c35c5mshca3267e96406afcp16bdbcjsn57d168946cdf';
var startPageEl = $('#start-page');
var moodPageEl = $('#mood-choices');
var signPageEl = $('#sign');
var resultPageEl = $('#result-page');
var gameGenreEl = $('game-genre');
var gameRecsEl = $('#game-recs');
var horoscopeEl = $('#horoscope');
var inputMoodEl = $('#user-input-mood');
var horoscopeMoodEl = $('#horoscope-mood');





























// make var for RAWG API
var rawgAPIKey = '55468ae1e1444c17bf3c3a29d8b79732';


// Handle changing page through carosel/cycling
// display/showing

// function to fetch data from RAWG
getVideoGames = function(event) {
    event.preventDefault();
    var game = $('game-recs');
    console.log(game);

    var rawgApiUrl = 'https://api.rawg.io/api/platforms?key=' + rawgAPIKey;

    fetch (rawgApiUrl)
    .then (function (reponse) {
        return reponse.json()
    })
    .then (function (data) {
        console.log(data);
        document.querySelector('#game-recs').textContent = 
        document.querySelector('#game-genre').textContent = 
    })
}

getHoroscope = function(event) {
    event.preventDefault();
    console.log(horoscopeMoodEl);

    var aztroApiUrl = 
}

// function to fetch data from Aztro

// function display the data

// EXTRA: function to change background color depending on selected mood

// local storage function for previous inputs