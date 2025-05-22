/**
 * A project
 */
var Project = /** @class */ (function () {
    /**
     * Creates a project
     * @param name name of the project
     * @param description description of the project
     */
    function Project(name, description) {
        this.name = name;
        this.description = description;
        this.links = [];
        this.languagesList = [];
        this.softwareList = [];
    }
    /**
     * Adds links to the links list
     * @param links links to add
     */
    Project.prototype.addLinks = function (links) {
        this.links = this.links.concat(links);
    };
    /**
     * Adds languages to the languages list
     * @param languages languages to add
     */
    Project.prototype.addLanguages = function (languages) {
        this.languagesList = this.languagesList.concat(languages);
    };
    /**
     * Adds software to the software list
     * @param software software to add
     */
    Project.prototype.addSoftware = function (software) {
        this.softwareList = this.softwareList.concat(software);
    };
    /**
     * Gets the card of the project which displays its name, description, link, languages and software
     * @return the card
     */
    Project.prototype.getCard = function () {
        var card = document.createElement("div");
        card.classList.add("project-card");
        var name = document.createElement("h2");
        name.innerText = this.name;
        card.appendChild(name);
        var description = document.createElement("p");
        description.innerText = this.description;
        card.appendChild(description);
        var links = document.createElement("div");
        links.classList.add("links");
        for (var _i = 0, _a = this.links; _i < _a.length; _i++) {
            var link = _a[_i];
            links.appendChild(link.getCard());
        }
        card.appendChild(links);
        var technologies = document.createElement("div");
        technologies.classList.add("technologies");
        for (var _b = 0, _c = this.languagesList; _b < _c.length; _b++) {
            var language = _c[_b];
            technologies.appendChild(language.getSmallCard());
        }
        var separator = document.createElement("p");
        separator.classList.add("separator");
        separator.innerText = "|";
        technologies.appendChild(separator);
        for (var _d = 0, _e = this.softwareList; _d < _e.length; _d++) {
            var software = _e[_d];
            technologies.appendChild(software.getSmallCard());
        }
        card.appendChild(technologies);
        return card;
    };
    return Project;
}());
export { Project };
