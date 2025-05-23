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
        this.languages = [];
        this.software = [];
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
        this.languages = this.languages.concat(languages);
    };
    /**
     * Adds software to the software list
     * @param software software to add
     */
    Project.prototype.addSoftware = function (software) {
        this.software = this.software.concat(software);
    };
    /**
     * Gets the card of the project which displays its name, description, link, languages and software
     * @return the card
     */
    Project.prototype.getCard = function () {
        var card = document.createElement("div");
        card.classList.add("project-card");
        var nameAndTechnologies = document.createElement("div");
        nameAndTechnologies.classList.add("name-and-technologies");
        card.appendChild(nameAndTechnologies);
        var name = document.createElement("h3");
        name.innerText = this.name;
        nameAndTechnologies.appendChild(name);
        var technologies = document.createElement("div");
        technologies.classList.add("technologies");
        for (var _i = 0, _a = this.languages; _i < _a.length; _i++) {
            var language = _a[_i];
            technologies.appendChild(language.getSmallCard());
        }
        if ((this.languages.length > 0) && (this.software.length > 0)) {
            var separator = document.createElement("p");
            separator.classList.add("separator");
            separator.innerText = "|";
            technologies.appendChild(separator);
        }
        for (var _b = 0, _c = this.software; _b < _c.length; _b++) {
            var software = _c[_b];
            technologies.appendChild(software.getSmallCard());
        }
        nameAndTechnologies.appendChild(technologies);
        var description = document.createElement("p");
        description.innerText = this.description;
        card.appendChild(description);
        var links = document.createElement("div");
        links.classList.add("links");
        for (var _d = 0, _e = this.links; _d < _e.length; _d++) {
            var link = _e[_d];
            links.appendChild(link.getCard());
        }
        card.appendChild(links);
        return card;
    };
    return Project;
}());
export { Project };
