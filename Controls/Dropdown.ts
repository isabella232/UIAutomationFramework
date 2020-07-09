import Utilities = require ("../Utilities/Utils")
import { BaseControl } from "./BaseControl"
import * as WBSelectors from "../Resources/workloadBuilderSelector"

export class Dropdown extends BaseControl{

    /**
     * Represents the element
     */
    public dropdown: any;  

    constructor (name: string, selector: string, page: any){
        super(name, selector, page);
    }

    public async init() {
        this.dropdown = await super.init();
    }

    public async loading() {
        logger.info("Dropdown loading in progress");

        //Likely to have this selector also as user input/resource file for extensibility
        //todo: sisatia
        let selector: string = ".azc-disabled" + this.selector;
        await Utilities.checkElementExistenceToggled(this.name, selector, this.page);
    }

    public async input(value: string) {
        logger.info(this.name + " dropdown selection!");
        await this.dropdown.click();
        await this.filterValue(value);
        let dropdownItemSelector: string = "span:contains('" + value + "')";
        await Utilities.clickUsingXPath(dropdownItemSelector, this.page);

        //Update logging functionality
        logger.info(this.name + " dropdown Update!");
    }

    private async filterValue(value: string) {
        logger.info("Filtering the value: " + value);

        let filterBoxSelector: string = 
            WBSelectors.Common.dropdownFilterBox;
        await Utilities.delay(1000);
        await Utilities.inputTextHelper(filterBoxSelector, value, this.page, false);
        await Utilities.delay(1000);
    }
}