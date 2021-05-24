let renderRecipr = new Renderer();

$.get(`/sanity`, function(Okmsg) {
    console.log(Okmsg);
})

$("#search").on("click", function() {
    let input = $("#prod-input").val();
    $.get(`/recipes/${input}`, function(recipesData) {
        renderRecipr.renderRecipe(recipesData);
    })
    $("#prod-input").val("");
});

$("div").on("click", ".mimg", function() {

    let name = $(this).closest("div");
    recipeList = name.find(".recipeList").text().split(' ').splice(0, 1);
    alert(recipeList)

})