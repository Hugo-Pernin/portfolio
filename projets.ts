import {Loader} from "./Loader.js";
import {ProjectCategory} from "./ProjectCategory.js";

let loader: Loader = Loader.getInstance()

let categories: ProjectCategory[] = loader.getProjectCategories();

let categoriesDiv: HTMLElement = document.getElementsByTagName("main")[0];

for (let category of categories) {
    categoriesDiv.appendChild(category.getCard());
}