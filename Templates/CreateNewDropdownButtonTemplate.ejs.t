/// <reference path="../bootstrap.ts" />
import { TestCreateNewDropdownButton } from "../TestControls/CreateNewDropdownButton";
var <%= controlName %>: TestCreateNewDropdownButton;
describe("<%- testName %>", async function () {
    before(async function () {
        /* Initialization */
        <%= controlName %> = new TestCreateNewDropdownButton("<%= controlName %>", "<%- selector %>", page);
        await <%= controlName %>.init();

        /* All actions to be performed prior to the running of test case */
        <%_ if (!!before && before.input) { _%>
        await <%= controlName %>.createNew.input(<%-JSON.stringify(before.input) %>);
        <%_ } _%>

    })

    it('Run Tests', async function () {
        /* All test cases to be performed */
        <%_ if (!!test && test.testExists == "yes") { _%>
        await <%= controlName %>.testExists();
        <%_ } _%>
    })

    <%_ if (!!after) { _%>
    after(async function() {
            describe("<%= testName %>", async function () {
            it('Run after block', async function () {
            <%_ if (after.input) { %>
            await <%= controlName %>.createNew.input(<%-JSON.stringify(after.input) %>);
            <%_ } %>
            })
                <%_ if (nextTestPath) { _%>
                        /* All actions to be performed after running test case */
                        after(async function() {
                        require("<%- nextTestPath%>");
                        });
                <%_ } _%>
        });
    });
        <%_ } else{ %>  
            <%_ if (nextTestPath) { _%>
                    /* All actions to be performed after running test case */
                    after(async function() {
                    require("<%- nextTestPath%>");
                    });
            <%_ } _%>
        <% } %> 
});
/* CreateNewDropdownButton Template ending */
