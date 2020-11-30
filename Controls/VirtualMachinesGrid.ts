import { BaseControl } from "./BaseControl"
import * as CommonSelectors from "../Resources/CommonSelectors"

export class VirtualMachinesGrid extends BaseControl {

    constructor (name: string, selector: string, page: any){
        super(name, selector, page);
    }

    public async input(value: string) {
        await this.filterValue(value);
        let rowSelector: string = "div.azc-grid-cellContent:contains('" + value + "')";
        await this.utils.checkElementExistenceToggled("UI Shield", CommonSelectors.Common.uiShield);
        await this.utils.clickUsingXPath(rowSelector);

    }

    private async filterValue(value: string) {
        logger.info("Filtering the value: " + value);
        let filterBoxSelector: string = 
            CommonSelectors.Common.vmGridFilterBox;
        await this.utils.delay(1000);
        await this.utils.inputTextHelper(filterBoxSelector, value,true);
        await this.utils.delay(1000);
    }
}