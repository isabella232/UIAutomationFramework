/// <reference path="../bootstrap.ts" />
import { TestButton } from "../TestControls/Button";
var <%= controlName %>: TestButton;
describe("<%= testName %>", async function () {
    before(async function () {
        /* Initialization */
        <%= controlName %> = new TestButton("<%= controlName %>", "<%- selector %>", page);
        await <%= controlName %>.init();

        /* All actions to be performed prior to the running of test case */
        <%_ if (!!before && before.click == "yes") { _%>
        await <%= controlName %>.button.click();
        <%_ } _%>

    })

    it('Run Tests', async function () {
        /* All test cases to be performed */
        <%_ if (!!test && test.testExists == "yes") { _%>
        await <%= controlName %>.testExists();
        <%_ } _%>

        <%_ if (!!test && test.testIsDisabled) { _%>
        <%_ if (test.testIsDisabled == "yes") { %>
        await <%= controlName %>.testIsDisabled(true);
        <% } else {%>
        await <%= controlName %>.testIsDisabled(false);
        <% } %>
        <%_ } _%>
    })

    <%_ if (!!after) { _%>
    after(async function() {
            describe("<%= testName %>", async function () {
            it('Run after block', async function () {
                <%_ if (after.click == "yes") { %>
                await <%= controlName %>.button.click();
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

/* Button Template ending */ 