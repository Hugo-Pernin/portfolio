/**
 * A technology like a programming language or a piece of software
 */
export class Technology {
    private name: string;
    private src: string;

    /**
     * Creates a technology
     * @param name name of the technology
     * @param src source of the image of the technology
     */
    constructor(name: string, src: string) {
        this.name = name;
        this.src = src;
    }

    /**
     * Gets a card with only the image of the technology
     * @return the card
     */
    public getSmallCard(): HTMLDivElement {
        let smallCard: HTMLDivElement = document.createElement("div");
        smallCard.classList.add("technology-small-card");
        let image: HTMLImageElement = document.createElement("img");
        image.src = this.src;
        image.alt = this.name;
        image.title = this.name;
        smallCard.appendChild(image);
        return smallCard;
    }

    /**
     * Gets a card with the name and the image of the technology
     * @return the card
     */
    public getBigCard(): HTMLDivElement {
        let bigCard: HTMLDivElement = document.createElement("div");
        bigCard.classList.add("technology-big-card");

        let image: HTMLImageElement = document.createElement("img");
        image.src = this.src;
        image.alt = "";
        bigCard.appendChild(image);

        let name: HTMLParagraphElement = document.createElement("p");
        name.innerText = this.name;
        bigCard.appendChild(name);

        return bigCard;
    }
}