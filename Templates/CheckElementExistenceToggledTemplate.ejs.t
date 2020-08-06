/// <reference path="../bootstrap.ts" />
import { checkElementExistenceToggled } from "../Utilities/Utils";
describe("<%- testName %>", async function () {
    it('CheckElementExistenceToggled', async function () {
        /* All test cases to be performed */
        await checkElementExistenceToggled("<%= utilityName %>","<%= selector %>", page)
    })

    <%_ if (nextTestPath) { _%>
    /* All actions to be performed after running test case */
    after(async function() {
    require("<%- nextTestPath%>");
    });
    <%_ } _%>

});

