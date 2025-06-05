/**
 * A technology like a programming language or a piece of software
 */
var Technology = /** @class */ (function () {
    /**
     * Creates a technology
     * @param name name of the technology
     * @param src source of the image of the technology
     */
    function Technology(name, src) {
        this.name = name;
        this.src = src;
    }
    /**
     * Gets a card with only the image of the technology
     * @return the card
     */
    Technology.prototype.getSmallCard = function () {
        var smallCard = document.createElement("div");
        smallCard.classList.add("technology-small-card");
        var image = document.createElement("img");
        image.src = this.src;
        image.alt = this.name;
        image.title = this.name;
        smallCard.appendChild(image);
        return smallCard;
    };
    /**
     * Gets a card with the name and the image of the technology
     * @return the card
     */
    Technology.prototype.getBigCard = function () {
        var bigCard = document.createElement("div");
        bigCard.classList.add("technology-big-card");
        var image = document.createElement("img");
        image.src = this.src;
        image.alt = "";
        bigCard.appendChild(image);
        var name = document.createElement("p");
        name.innerText = this.name;
        bigCard.appendChild(name);
        return bigCard;
    };
    return Technology;
}());
export { Technology };
