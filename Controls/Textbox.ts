import Utilities = require ("../Utilities/Utils")
import { portalControl } from "./Controls"

export class Textbox extends portalControl{

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
        console.log(this.name + " textbox Update!");
    }

}