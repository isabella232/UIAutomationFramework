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

    public async input(value: string) {
        await Utilities.inputTextHelper(this.selector, value, this.page, true);

        //Update logging functionality
        logger.info(this.name + " textbox Update!");
    }

}