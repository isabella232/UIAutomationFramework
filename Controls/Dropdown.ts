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
        await this.utils.checkElementExistenceToggled(this.name, selector);
    }

    public async input(value: string, filter: boolean = true) {
        logger.info(this.name + " dropdown selection!");
        await this.controlElement.click();
        
        if(filter) {
            await this.filterValue(value);
        }
        let dropdownItemSelector: string = "span:contains('" + value + "')";
        await this.utils.clickUsingXPath(dropdownItemSelector);

        //Update logging functionality
        logger.info(this.name + " Dropdown Update!");
    }

    private async filterValue(value: string) {
        logger.info("Filtering the value: " + value);

        let filterBoxSelector: string = 
            CommonSelectors.Common.dropdownFilterBox;
        await this.utils.delay(1000);
        await this.utils.inputTextHelper(filterBoxSelector, value, false);
        await this.utils.delay(1000);
    }
}