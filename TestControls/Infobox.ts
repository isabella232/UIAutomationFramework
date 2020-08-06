import 'mocha';
import { Infobox } from "../Controls/Infobox"
import { TestBaseControl } from "./BaseControl"

export class TestInfobox extends TestBaseControl {

    /**
     * Button object
     */
    public infobox: Infobox;

    constructor(name: string, selector: string, page: any) {
        super(name, selector, page);
        this.infobox = new Infobox(name, selector, page);
    }

    public async init() {

        //todo: sisatia
        //Add exists check here itself. Since you can't perform init without it existing in the first place
        //And this is a test class only

        //Think if we need to do that here, do we? 
        await this.infobox.init();
    }

    public async testExists() {
        await super.testExists(this.infobox);
    }

}