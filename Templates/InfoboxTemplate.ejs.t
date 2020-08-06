/// <reference path="../bootstrap.ts" />
import { TestInfobox } from "../TestControls/Infobox";
var <%= controlName %>: TestInfobox;
describe("<%- testName %>", async function () {
    before(async function () {
        /* Initialization */
        <%= controlName %> = new TestInfobox("<%= controlName %>", "<%- selector %>", page);
        await <%= controlName %>.init();

        /* All actions to be performed prior to the running of test case */
        <%_ if (!!before && before.input) { _%>
        await <%= controlName %>.textbox.input(<%-JSON.stringify(before.input) %>);
        <%_ } _%>

    })

    it('Run Tests', async function () {
        /* All test cases to be performed */
        <%_ if (!!test && test.testExists == "yes") { _%>
        await <%= controlName %>.testExists();
        <%_ } _%>
    })

    <%_ if (nextTestPath) { _%>
        /* All actions to be performed after running test case */
        after(async function() {
        require("<%- nextTestPath%>");
        });
    <%_ } _%>

});

/* Infobox Template ending */

