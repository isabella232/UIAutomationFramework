/// <reference path="../bootstrap.ts" />
import { delay } from "../Utilities/Utils";
describe("<%- testName %>", async function () {
    it('Delay', async function () {
        /* All test cases to be performed */
        this.timeout(<%= duration %> + 30);

        await delay(<%= duration %>);
    })

    <%_ if (nextTestPath) { _%>
        /* All actions to be performed after running test case */
        after(async function() {
        require("<%- nextTestPath%>");
        });
    <%_ } _%>

});
