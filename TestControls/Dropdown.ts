import 'mocha';
import { assert } from 'chai';
import { Dropdown } from "../Controls/Dropdown"
import { TestBaseControl } from "./BaseControl"
import * as Utilities from "../Utilities/Utils"
export class TestDropdown extends TestBaseControl{

    /**
     * Dropdown object
     */
    public dropdown: Dropdown;

    constructor(name: string, selector: string, page: any) {
        super(name, selector, page);
        this.dropdown = new Dropdown(name, selector, page);
    }

    public async init() {
        await this.dropdown.init();
    }

    public async testExists(){
        await super.testExists(this.dropdown);
    }

    public async testInput(input: string){
        await Utilities.delay(500);
        /* Describe doesn't have the context of this, but only function variables, hence 
        added page + dropdown */
        let page: any = this.page;
        let dropdown: Dropdown = this.dropdown;
        describe(dropdown.name + ' Dropdown Input', async function() {
            it('Input Test', async function() {
                let value: string = await page.evaluate((element: any) => element.textContent, dropdown.controlElement);
                assert.equal(value, input, "Input value doesn't match");
            })
        })
    }

}