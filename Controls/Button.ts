import { portalControl } from "./Controls"
import Utilities = require("../Utilities/Utils")

export class Button extends portalControl {

    /*
     * Represents the element
     */
    public button: any;

    constructor(name: string, selector: string, page: any) {
        super(name, selector, page);
    }

    public async init() {
        this.button = await super.init();
    }

    public async click() {
        await this.button.click();

        //Update logging functionality
        console.log(this.name + " button Clicked!");
    }
}