import {Loader} from "./Loader.js";
import {TechnologyCategory} from "./TechnologyCategory.js";

let loader: Loader = Loader.getInstance()

let categories: TechnologyCategory[] = loader.getTechnologyCategories();

let categoriesDiv: HTMLElement = document.getElementById("langages-et-logiciels");

for (let category of categories) {
    categoriesDiv.appendChild(category.getCard());
}