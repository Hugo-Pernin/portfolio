/**
 * A project
 */
var Project = /** @class */ (function () {
    /**
     * Creates a project
     * @param name name of the project
     * @param description description of the project
     * @param linkText text of the link
     * @param linkHref url of the redirection of the link
     */
    function Project(name, description, linkText, linkHref) {
        this.name = name;
        this.description = description;
        this.linkText = linkText;
        this.linkHref = linkHref;
        this.languagesList = [];
        this.softwareList = [];
    }
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
        if (this.linkHref != null) {
            var link = document.createElement("a");
            link.innerText = this.linkText;
            link.href = this.linkHref;
            link.target = "_blank";
            card.appendChild(link);
        }
        var technologies = document.createElement("div");
        technologies.classList.add("technologies");
        for (var _i = 0, _a = this.languagesList; _i < _a.length; _i++) {
            var language = _a[_i];
            technologies.appendChild(language.getSmallCard());
        }
        var separator = document.createElement("p");
        separator.classList.add("separator");
        separator.innerText = "|";
        technologies.appendChild(separator);
        for (var _b = 0, _c = this.softwareList; _b < _c.length; _b++) {
            var software = _c[_b];
            technologies.appendChild(software.getSmallCard());
        }
        card.appendChild(technologies);
        return card;
    };
    return Project;
}());
export { Project };
