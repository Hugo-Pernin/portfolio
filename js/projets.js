import { Loader } from "./Loader.js";
var loader = Loader.getInstance();
var categories = loader.getProjectCategories();
var categoriesDiv = document.getElementById("liste-projets");
for (var _i = 0, categories_1 = categories; _i < categories_1.length; _i++) {
    var category = categories_1[_i];
    categoriesDiv.appendChild(category.getCard());
}
