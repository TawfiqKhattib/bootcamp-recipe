// const source = $('#player-template').html();
// const template = Handlebars.compile(source);

let renderRecipr = new Renderer();

// const renderRecipe = function(recipe) {
//     $("#recipe").empty()
//     const source = $('#recipe-template').html();
//     const template = Handlebars.compile(source);
//     const newHTML = template({ recipe });
//     $("#recipe").append(newHTML)

// }
$.get(`/sanity`, function(Okmsg) {
    console.log(Okmsg);
})

// const playerRender = function(playersData) {
//     $("#players").empty();
//     const newHTMLqoute = template({ player: playersData });
//     $("#players").append(newHTMLqoute);
// }

$("#search").on("click", function() {
    let input = $("#prod-input").val();
    $.get(`/recipes/${input}`, function(recipesData) {
        renderRecipr.renderRecipe(recipesData);
    })
    $("#prod-input").val("");
});

// $("div").on("click", ".mimg", function() {

//     let name = $(this).closest("div");
//     namePlayer = name.find("#name").text().split(",");
//     img = name.find(".mimg");
//     namePlayer[1] = namePlayer[1].replace(/\s/g, '');
//     $.get(`/playerStats/${namePlayer}`, function(playersData) {
//         name.find("#spanImg").append(`<div> ${playersData.name} played ${playersData.number} with team ${playersData.val}</div>`);
//     })

// })

// $("#dreamTeam").on("click", function() {
//     $.get("/dreamTeam", function(playesData) {
//         playerRender(playesData);
//     })
// })

// $("div").on("click", "#addToDreamTeam", function() {
//     let name = $(this).closest("div");
//     namePlayer = name.find("#name").text().split(",");
//     let player = {};
//     player.firstName = namePlayer[0];
//     player.lastName = namePlayer[1];
//     player.number = name.find("#number").text();
//     player.val = name.find("#pos").text();
//     $.post("/roster", player, function(response) {
//         console.log("the player add to dream team");
//     })
// });


//Put new teams 

// let newTeams = {
//     "wizards": "1610612764",
//     "raptors": "1610612761",
//     "spurs": "1610612759",
//     "rockets": "1610612745"
// }
// $.ajax({
//     methods: "PUT",
//     url: '/team/',
//     data: newTeams
// })