/// <reference path="../bootstrap.ts" />
import { Util } from "../Utilities/Utils"
describe("<%- testName %>", async function () {
    var <%= utilityName %>: Util;
    before(async function () {
        /* Initialization */
        <%= utilityName %> = Util.getUtilities(page);
    })

    it('Delay', async function () {
        /* All test cases to be performed */
        this.timeout(<%= duration %> + 30);

        await <%= utilityName %>.delay(<%= duration %>);
    })

    <%_ if (nextTestPath) { _%>
        /* All actions to be performed after running test case */
        after(async function() {
        require("<%- nextTestPath%>");
        });
    <%_ } _%>

});
