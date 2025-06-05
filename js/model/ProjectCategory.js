/**
 * A category of projects
 */
var ProjectCategory = /** @class */ (function () {
    /**
     * Creates a category of projects
     * @param name name of the category
     */
    function ProjectCategory(name) {
        this.name = name;
        this.projects = [];
    }
    /**
     * Adds projects to the projects list
     * @param projects projects to add
     */
    ProjectCategory.prototype.addProjects = function (projects) {
        this.projects = this.projects.concat(projects);
    };
    /**
     * Gets the card of the category which displays its name, and its projects
     * @return the card
     */
    ProjectCategory.prototype.getCard = function () {
        var card = document.createElement("div");
        card.classList.add("project-category-card");
        var name = document.createElement("h2");
        name.classList.add("project-category-title");
        name.innerText = this.name;
        card.appendChild(name);
        var projects = document.createElement("div");
        projects.classList.add("project-category");
        for (var _i = 0, _a = this.projects; _i < _a.length; _i++) {
            var project = _a[_i];
            projects.appendChild(project.getCard());
        }
        card.appendChild(projects);
        return card;
    };
    return ProjectCategory;
}());
export { ProjectCategory };
