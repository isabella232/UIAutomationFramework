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
        
        await this.infobox.init();
    }

    public async testExists() {
        await super.testExists(this.infobox);
    }

}