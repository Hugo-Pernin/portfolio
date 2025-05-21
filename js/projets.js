import { Loader } from "./Loader.js";
var loader = Loader.getInstance();
var projectsList = loader.getProjects();
var projectsDiv = document.getElementById("liste-projets");
for (var _i = 0, projectsList_1 = projectsList; _i < projectsList_1.length; _i++) {
    var project = projectsList_1[_i];
    projectsDiv.appendChild(project.getCard());
}
