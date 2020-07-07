import { Button } from "../Button"
import { Textbox } from "../Textbox"
import { BaseControl } from "../BaseControl"
import * as WBSelectors from "../../Resources/workloadBuilderSelector"

export class CreateNewDropdownButton extends BaseControl {

    /*
     * Represents the element
     */
    public createNewbutton: any;
    
    constructor (name: string, selector: string, page: any){
        super(name, selector, page);
    }

    public async init() {
        this.createNewbutton = new Button(this.name, this.selector, this.page);
        await this.createNewbutton.init();
    }

    public async input (value: string) {
        this.createNewbutton = new Button(this.name, this.selector, this.page);
        await this.createNewbutton.init();
        await this.createNewbutton.click();

        let textBoxSelector: string = WBSelectors.Common.createNewTextbox;
        let textBox = new Textbox(this.name + "textbox", textBoxSelector, this.page);
        textBox.input(value);
        
        let okButton = new Button(this.name + "OK Button", WBSelectors.Common.createNewOkButton, this.page);
        await okButton.init();
        await okButton.click();
    }
}