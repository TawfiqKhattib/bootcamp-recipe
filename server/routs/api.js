const express = require('express');
const router = express.Router();
let urllib = require('urllib');


router.get('/sanity', function(request, response) {
    response.send("ok");
})

router.get('/recipes/:recipe', function(request, response) {
    let dataPlayers = []
    let playerData = {}
    dataPlayers = []
    playerData = {}
    let recipe = request.params.recipe
    let url = 'https://recipes-goodness.herokuapp.com/recipes/' + recipe;
    urllib.request(url, function(err, data, res) {
        if (err) {
            throw err; // you need to handle error
        }
        let myData = JSON.parse(data)
        myData = myData.results
        response.send(myData)
    })
});

module.exports = router;
// router.get('/playerStats/:player', function(request, response) {
//     playerDataUrl = 'https://nba-players.herokuapp.com/players-stats/';
//     let player = request.params.player
//     namePlayer = player.split(",");
//     namePlayer[1] = namePlayer[1].replace(/\s/g, '');

//     url = playerDataUrl + namePlayer[1] + "/" + namePlayer[0]
//     playerData = {}
//     console.log("player   ", player);
//     urllib.request(url, function(err, data, res) {
//         if (err) {
//             throw err; // you need to handle error
//         }
//         const buf = Buffer.from('Sorry, that player was not found. Please check the spelling.', 'utf8').toString('base64');
//         if (data.toString('base64') !== buf) {
//             mydata = JSON.parse(data)
//             playerData.name = mydata.name;
//             playerData.number = mydata.games_played;
//             playerData.url = "";
//             playerData.val = mydata.team_acronym;
//             response.send(playerData);
//         }

//     });
// })

// router.get('/dreamTeam/', function(request, response) {
//     let randTeam = 0;
//     if (dreamTeam.length === 0) {
//         urllib.request('http://data.nba.net/10s/prod/v1/2018/players.json', function(err, data, res) {
//             if (err) {
//                 throw err; // you need to handle error
//             }

//             myData = JSON.parse(data)
//             myData = myData.league.standard;
//             for (let i = 0; i < 5; i++) {
//                 let players = [];
//                 let playerData = {};
//                 randTeam = Math.floor(Math.random() * Object.keys(teamToIDs).length);
//                 for (let player of myData) {
//                     if (player.teamId === teamToIDs[Object.keys(teamToIDs)[randTeam]] && player.isActive) {
//                         playerData.firstName = player.firstName;
//                         playerData.lastName = player.lastName;
//                         playerData.number = player.jersey;
//                         playerData.val = player.pos;
//                         players.push(playerData);
//                         playerData = {};

//                     }
//                 }
//                 let playerNum = Math.floor(Math.random() * players.length);
//                 dreamTeam.push(players[playerNum]);
//             }

//         })
//     }
//     console.log(dreamTeam);
//     response.send(dreamTeam);
// })

// router.post('/roster', function(req, res) {
//     const player = req.body;
//     dreamTeam.push(player);
//     res.send(dreamTeam);
// })

// router.put('/team/:teams', (req, res) => {
//     let newTeams = req.body;
//     for (let team in newTeams) {
//         teamToIDs[team] = newTeams[team];
//     }
//     res.end();
// })