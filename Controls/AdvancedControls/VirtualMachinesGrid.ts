import { Button } from "../Button"
import { Textbox } from "../Textbox"
import { BaseControl } from "../BaseControl"
import * as WBSelectors from "../../Resources/workloadBuilderSelector"
import Utilities = require ("../../Utilities/Utils")

export class VirtualMachinesGrid extends BaseControl {

    constructor (name: string, selector: string, page: any){
        super(name, selector, page);
    }

    public async input(value: string) {
        await this.filterValue(value);
        let rowSelector: string = "div.azc-grid-cellContent:contains('" + value + "')";
        await Utilities.checkElementExistenceToggled("UI Shield", WBSelectors.Common.uiShield, this.page);
        await Utilities.clickUsingXPath(rowSelector, this.page);

    }

    private async filterValue(value: string) {
        logger.info("Filtering the value: " + value);
        let filterBoxSelector: string = 
            WBSelectors.Common.vmGridFilterBox;
        await Utilities.delay(1000);
        await Utilities.inputTextHelper(filterBoxSelector, value, this.page, true);
        await Utilities.delay(1000);
    }
}