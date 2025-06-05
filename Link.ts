/**
 * Link to another website
 */
export class Link {
    private text: string;
    private href: string;

    /**
     * Creates a Link
     * @param text text of the link
     * @param href href of the link
     */
    public constructor(text: string, href: string) {
        this.text = text;
        this.href = href;
    }

    /**
     * Gets the card of the link
     * @return the card
     */
    public getCard(): HTMLDivElement {
        let card: HTMLDivElement = document.createElement("div");
        card.classList.add("link-card");

        let link: HTMLAnchorElement = document.createElement("a");
        link.href = this.href;
        link.target = "_blank";

        let text: HTMLParagraphElement = document.createElement("p");
        text.innerText = this.text;

        let image: HTMLImageElement = document.createElement("img");
        image.src = "images/new_tab.svg";
        image.alt = "";

        link.appendChild(text);
        link.appendChild(image);
        card.appendChild(link);

        return card;
    }
}