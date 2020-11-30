import 'mocha';
import { CreateNewDropdownButton } from "../Controls/CreateNewDropdownButton"
import { TestBaseControl } from "./BaseControl"
export class TestCreateNewDropdownButton extends TestBaseControl {

    /**
     * Dropdown object
     */
    public createNewDropdownButton: CreateNewDropdownButton;

    constructor(name: string, selector: string, page: any) {
        super(name, selector, page);
        this.createNewDropdownButton = new CreateNewDropdownButton(name, selector, page);
    }

    public async init() {
        await this.createNewDropdownButton.init();
    }

    public async testExists(){
        await super.testExists(this.createNewDropdownButton);
    }

}