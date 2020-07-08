import { BaseControl } from "./BaseControl"

export class Button extends BaseControl {

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
        logger.info(this.name + " button Clicked!");
    }
}