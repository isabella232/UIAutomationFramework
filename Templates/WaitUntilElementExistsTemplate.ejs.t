/// <reference path="../bootstrap.ts" />
import { BaseControl } from "../Controls/BaseControl";
var <%= utilityName %>: BaseControl;
describe("<%= testName %>", async function () {
    before(async function () {
        /* Initialization */
        <%= utilityName %> = new BaseControl("<%= utilityName %>", "<%- selector %>", page);
        await <%= utilityName %>.init();
    })

    it('Run Tests', async function () {
        /* All test cases to be performed */
        await <%= utilityName %>.waitUntilElementExists(<%= duration %>);
    })

    <%_ if (nextTestPath) { _%>
        /* All actions to be performed after running test case */
        after(async function() {
        require("<%- nextTestPath%>");
        });
    <%_ } _%>
});