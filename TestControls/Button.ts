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

    public async testIsDisabled(checkForDisabled: boolean = true) {
        let isDisabled: boolean = await this.button.isDisabled();
        describe(this.button.name + 'Is Disabled', async function() {
            it('Is Disabled', async function() {
                if (checkForDisabled) {
                    assert.isTrue(isDisabled, "The button is enabled" /*Failure message */)
                } else {
                    assert.isFalse(!isDisabled, "The button is disabled");
                }
            })
        })
 
    }

}