class Renderer {
    constructor() {

    }
    renderRecipe(recipe) {
        $("#recipe").empty()
        const source = $('#recipe-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({ recipe });
        $("#recipe").append(newHTML)

    }
}