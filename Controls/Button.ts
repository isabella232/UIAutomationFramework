import { BaseControl } from "./BaseControl"

export class Button extends BaseControl {

    constructor(name: string, selector: string, page: any) {
        super(name, selector, page);
    }

    public async init() {
        this.controlElement = await super.init();
    }

    public async click() {
        //click the button
        await this.controlElement.click();

        //Update logging functionality
        logger.info(this.name + " button Clicked!");

        //Check if a new tab has been opened now
        await super.updatePage();
    }

    public async isDisabled() {
        let isDisabled: boolean = await this.page.evaluate((element: any) => element.ariaDisabled, this.controlElement);
        return isDisabled;
    }
}