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

        let link: HTMLAnchorElement = document.createElement("a");
        link.innerHTML = this.text;
        link.href = this.href;
        link.target = "_blank";

        card.appendChild(link);

        return card;
    }
}