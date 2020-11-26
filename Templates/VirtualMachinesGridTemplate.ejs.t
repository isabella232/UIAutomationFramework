/// <reference path="../bootstrap.ts" />
import { VirtualMachinesGrid } from "../Controls/VirtualMachinesGrid";
var <%= controlName %>: VirtualMachinesGrid;
describe("<%- testName %>", async function () {
    before(async function () {
        /* Initialization */
        <%= controlName %> = new VirtualMachinesGrid("<%= controlName %>", "<%- selector %>", page);
        
        /* All actions to be performed prior to the running of test case */
        <%_ if (!!before && before.input) { _%>
        await <%= controlName %>.input(<%-JSON.stringify(before.input) %>);
        <%_ } _%>

    });

    it('Run Tests - NONE', async function () {
        /* All test cases to be performed */
    });

    <%_ if (nextTestPath) { _%>
        /* All actions to be performed after running test case */
        after(async function() {
        require("<%- nextTestPath%>");
        });
    <%_ } _%>

});
