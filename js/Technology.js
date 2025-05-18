var Technology = /** @class */ (function () {
    function Technology(name, src) {
        this.name = name;
        this.src = src;
    }
    Technology.prototype.getSmallCard = function () {
        var smallCard = document.createElement("div");
        smallCard.classList.add("technology-small-card");
        var image = document.createElement("img");
        image.src = this.src;
        image.alt = this.name;
        smallCard.appendChild(image);
        return smallCard;
    };
    Technology.prototype.getBigCard = function () {
        var bigCard = document.createElement("div");
        bigCard.classList.add("technology-big-card");
        var name = document.createElement("p");
        name.innerText = this.name;
        bigCard.appendChild(name);
        var image = document.createElement("img");
        image.src = this.src;
        image.alt = this.name;
        bigCard.appendChild(image);
        return bigCard;
    };
    return Technology;
}());
export { Technology };
