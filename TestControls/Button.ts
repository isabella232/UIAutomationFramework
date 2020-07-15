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

        //todo: sisatia
        //Add exists check here itself. Since you can't perform init without it existing in the first place
        //And this is a test class only

        //Think if we need to do that here, do we? 
        await this.button.init();
    }

    public async testExists() {
        //let button: Button = this.button;
        // describe('Button Exists', async function () {
        //     // it('Dummy test', function(done) {
        //     //     assert.equal(1,1,"Dummy Message");
        //     //     done();
        //     // })

        //     // it('Element Exists', async function () {
        //     //     let result = await button.exists();
        //     //     result = false;
        //     //     assert.isTrue(result, button.name + " does not exist");
        //     // })
        // });

        await super.testExists(this.button);
    }

}