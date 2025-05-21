import {Loader} from "./Loader.js";
import {Project} from "./Project.js";

let loader: Loader = Loader.getInstance()

let projectsList: Project[] = loader.getProjects();

let projectsDiv: HTMLElement = document.getElementById("liste-projets");

for (let project of projectsList) {
    projectsDiv.appendChild(project.getCard());
}