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
     * Adds a link to the links list
     * @param link link to add
     */
    Project.prototype.addLink = function (link) {
        this.links.push(link);
    };
    /**
     * Adds a language to the languages list
     * @param language language to add
     */
    Project.prototype.addLanguage = function (language) {
        this.languagesList.push(language);
    };
    /**
     * Adds a piece of software to the software list
     * @param software piece of software to add
     */
    Project.prototype.addSoftware = function (software) {
        this.softwareList.push(software);
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
        for (var _i = 0, _a = this.links; _i < _a.length; _i++) {
            var link = _a[_i];
            card.appendChild(link.getCard());
        }
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
