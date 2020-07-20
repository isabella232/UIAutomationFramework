import 'mocha';
import { assert } from 'chai';
import { Button } from "../Controls/Button"
import { TestBaseControl } from "./BaseControl"

export class TestButton extends TestBaseControl {

    /**
     * Button object
     */
    public button: Button;

    constructor(name: string, selector: string, page: any) {
        super(name, selector, page);
        this.button = new Button(name, selector, page);
    }

    public async init() {
        await this.button.init();
    }

    public async testExists() {
        await super.testExists(this.button);
    }

}