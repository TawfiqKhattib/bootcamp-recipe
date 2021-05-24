const express = require('express');
const router = express.Router();
let urllib = require('urllib');


router.get('/sanity', function(request, response) {
    response.send("ok");
})

router.get('/recipes/:recipe', function(request, response) {
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