import Utilities = require ("../Utilities/Utils")
import { BaseControl } from "./BaseControl"
import * as CommonSelectors from "../Resources/CommonSelectors"

export class Dropdown extends BaseControl{

    constructor (name: string, selector: string, page: any){
        super(name, selector, page);
    }

    public async init() {
        this.controlElement = await super.init();
    }

    public async loading() {
        logger.info("Dropdown loading in progress");

        //Likely to have this selector also as user input/resource file for extensibility
        //todo: sisatia
        let selector: string = ".azc-disabled" + this.selector;
        await Utilities.checkElementExistenceToggled(this.name, selector, this.page);
    }

    public async input(value: string, filter: boolean = true) {
        logger.info(this.name + " dropdown selection!");
        await this.controlElement.click();
        if(filter) {
            await this.filterValue(value);
        }
        let dropdownItemSelector: string = "span:contains('" + value + "')";
        await Utilities.clickUsingXPath(dropdownItemSelector, this.page);

        //Update logging functionality
        logger.info(this.name + " Dropdown Update!");
    }

    private async filterValue(value: string) {
        logger.info("Filtering the value: " + value);

        let filterBoxSelector: string = 
            CommonSelectors.Common.dropdownFilterBox;
        await Utilities.delay(1000);
        await Utilities.inputTextHelper(filterBoxSelector, value, this.page, false);
        await Utilities.delay(1000);
    }
}