import 'mocha';
import { CreateNewDropdownButton } from "../Controls/CreateNewDropdownButton"
import { TestBaseControl } from "./BaseControl"
export class TestCreateNewDropdownButton extends TestBaseControl {

    /**
     * Dropdown object
     */
    public createNew: CreateNewDropdownButton;

    constructor(name: string, selector: string, page: any) {
        super(name, selector, page);
        this.createNew = new CreateNewDropdownButton(name, selector, page);
    }

    public async init() {
        await this.createNew.init();
    }

    public async testExists(){
        await super.testExists(this.createNew);
    }

}