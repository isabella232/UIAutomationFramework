import Utilities = require ("../Utilities/Utils")
import { BaseControl } from "./BaseControl"

export class Textbox extends BaseControl{

    /*
     * Represent the element
     */
    
    public textbox: any;

    constructor (name: string, selector: string, page: any){
        super(name, selector, page);
    }

    public async init() {
        this.textbox = await super.init();
    }

    /*
     * Provide input to the text field
     */
    public async input(value: string) {
        await Utilities.inputTextHelper(this.selector, value, this.page, true);

        //Update logging functionality
        logger.info(this.name + " textbox Update!");
    }
    /*
     * Provide input to the text field
     */

    public async isInputValid() {
        await Utilities.delay(500);
        let validity: string = await this.page.evaluate((element:any) => element.getAttribute('data-validatable-control-validation-state'), this.textbox);
        return validity == "valid" ? true : false;
    }

}