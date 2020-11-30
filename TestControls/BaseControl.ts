import { BaseControl } from "../Controls/BaseControl"
import 'mocha';
import { assert, expect } from 'chai';

export class TestBaseControl extends BaseControl {

    constructor(name: string, selector: string, page: any) {
        super(name, selector, page);
    }

    protected async testExists(control: BaseControl) {
        describe(control.name + ' element exists', async function() {
            it('Element exists', async function () {
                let result = await control.exists();
                assert.isTrue(result, control.name + " does not exist");
            });

            afterEach(async function (this: any) {
                if (this.currentTest.state !== 'passed') {
                    await page.screenshot({ path: "Screenshots/" + this.name + "-exist-test-failed.png" });
                }
            });
        })
    };

}
