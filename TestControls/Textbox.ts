import 'mocha';
import { assert } from 'chai';
import { Textbox } from "../Controls/Textbox"
import { TestBaseControl } from "./BaseControl"

export class TestTextbox extends TestBaseControl {

    /**
     * Button object
     */
    public textbox: Textbox;

    constructor(name: string, selector: string, page: any) {
        super(name, selector, page);
        this.textbox = new Textbox(name, selector, page);
    }

    public async init() {

        //todo: sisatia
        //Add exists check here itself. Since you can't perform init without it existing in the first place
        //And this is a test class only

        //Think if we need to do that here, do we? 
        await this.textbox.init();
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

        await super.testExists(this.textbox);
    }

    public async testInput(input: string) {
        let page: any = this.page;
        let textbox: Textbox = this.textbox;

        describe(textbox.name + ' Textbox Input', async function() {
            it('Input Test', async function() {
                let value: string = await page.evaluate((element: any) => element.value, textbox.controlElement);
                assert.equal(value, input, "Input value doesn't match");
            })
        })
    }

    public async testValidity() {
        let page: any = this.page;
        let textbox: Textbox = this.textbox;

        describe(textbox.name + ' Textbox Validity', async function() {
            it('Validity Test', async function() {
                let valid: boolean = await textbox.isInputValid();
                assert.isTrue(valid, "Input value doesn't pass the validation");
            })
        })
    }

}