/**
 * A category of technologies
 */
var TechnologyCategory = /** @class */ (function () {
    /**
     * Creates a category of technologies
     * @param name name of the category
     */
    function TechnologyCategory(name) {
        this.name = name;
        this.technologies = [];
    }
    /**
     * Adds technologies to the technologies list
     * @param technologies technologies to add
     */
    TechnologyCategory.prototype.addTechnologies = function (technologies) {
        this.technologies = this.technologies.concat(technologies);
    };
    /**
     * Gets the card of the category which displays its name, and its technologies logos and names
     * @return the card
     */
    TechnologyCategory.prototype.getCard = function () {
        var card = document.createElement("div");
        card.classList.add("technology-category-card");
        var name = document.createElement("h3");
        name.innerText = this.name;
        card.appendChild(name);
        var technologies = document.createElement("div");
        for (var _i = 0, _a = this.technologies; _i < _a.length; _i++) {
            var technology = _a[_i];
            technologies.appendChild(technology.getBigCard());
        }
        card.appendChild(technologies);
        return card;
    };
    return TechnologyCategory;
}());
export { TechnologyCategory };
