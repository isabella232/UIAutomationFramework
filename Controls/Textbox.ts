import { BaseControl } from "./BaseControl"

export class Textbox extends BaseControl{

    constructor (name: string, selector: string, page: any){
        super(name, selector, page);
    }

    public async init() {
        this.controlElement = await super.init();
    }

    /**
     * Provide input to the text field
     */
    public async input(value: string) {
        await this.utils.inputTextHelper(this.selector, value,true);

        //Update logging functionality
        logger.info(this.name + " textbox Update!");
    }
    /**
     * Provide input to the text field
     */

    public async isInputValid() {
        await this.utils.delay(500);
        let validity: string = await this.page.evaluate((element:any) => element.getAttribute('data-validatable-control-validation-state'), this.controlElement);
        return validity == "valid" ? true : false;
    }

}