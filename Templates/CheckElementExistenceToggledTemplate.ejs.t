/// <reference path="../bootstrap.ts" />
import { Util } from "../Utilities/Utils"
describe("<%- testName %>", async function () {
    var <%= utilityName %>: Util;
    before(async function () {
        /* Initialization */
        <%= utilityName %> = Util.getUtilities(page);
    })

    it('CheckElementExistenceToggled', async function () {
        /* All test cases to be performed */
        await <%= utilityName %>.checkElementExistenceToggled("<%= utilityName %>","<%= selector %>")
    })

    <%_ if (nextTestPath) { _%>
    /* All actions to be performed after running test case */
    after(async function() {
    require("<%- nextTestPath%>");
    });
    <%_ } _%>

});

