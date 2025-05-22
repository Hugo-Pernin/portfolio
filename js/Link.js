/**
 * Link to another website
 */
var Link = /** @class */ (function () {
    /**
     * Creates a Link
     * @param text text of the link
     * @param href href of the link
     */
    function Link(text, href) {
        this.text = text;
        this.href = href;
    }
    /**
     * Gets the card of the link
     * @return the card
     */
    Link.prototype.getCard = function () {
        var card = document.createElement("div");
        card.classList.add("link-card");
        var link = document.createElement("a");
        link.innerHTML = this.text;
        link.href = this.href;
        link.target = "_blank";
        var image = document.createElement("img");
        image.src = "img/new_tab.svg";
        image.alt = "";
        link.appendChild(image);
        card.appendChild(link);
        return card;
    };
    return Link;
}());
export { Link };
