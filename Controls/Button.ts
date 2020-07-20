import { BaseControl } from "./BaseControl"

export class Button extends BaseControl {

    constructor(name: string, selector: string, page: any) {
        super(name, selector, page);
    }

    public async init() {
        this.controlElement = await super.init();
    }

    public async click() {
        await this.controlElement.click();

        //Update logging functionality
        logger.info(this.name + " button Clicked!");
    }

    public async isDisabled() {
        let isDisabled: boolean = await this.page.evaluate((element: any) => element.ariaDisabled);
        return isDisabled;
    }
}