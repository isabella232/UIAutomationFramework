import { Button } from "../Button"
import { Textbox } from "../Textbox"
import { BaseControl } from "../BaseControl"
import * as CommonSelectors from "../../Resources/CommonSelectors"

export class CreateNewDropdownButton extends BaseControl {
    
    constructor (name: string, selector: string, page: any){
        super(name, selector, page);
    }

    public async init() {
        this.controlElement = new Button(this.name, this.selector, this.page);
        await this.controlElement.init();
    }

    public async input (value: string) {
        this.controlElement = new Button(this.name, this.selector, this.page);
        await this.controlElement.init();
        await this.controlElement.click();

        let textBoxSelector: string = CommonSelectors.Common.createNewTextbox;
        let textBox = new Textbox(this.name + "textbox", textBoxSelector, this.page);
        textBox.input(value);
        
        let okButton = new Button(this.name + "OK Button", CommonSelectors.Common.createNewOkButton, this.page);
        await okButton.init();
        await okButton.click();
    }
}