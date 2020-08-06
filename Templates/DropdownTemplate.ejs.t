/// <reference path="../bootstrap.ts" />
import { TestDropdown } from "../TestControls/Dropdown"
var <%= controlName %>: TestDropdown;
describe("<%- testName %>", async function () {
    before(async function () {
        /* Initialization */
        <%= controlName %> = new TestDropdown("<%= controlName %>", "<%- selector %>", page);
        await <%= controlName %>.init();

        <%_ if (!!before && before.waitLoading) { _%>
        await <%= controlName %>.dropdown.loading();
        <%_ } _%>

        /* All actions to be performed prior to the running of test case */
        <%_ if (!!before && before.input) { _%>
        await <%= controlName %>.dropdown.input(<%-JSON.stringify(before.input) %>);
        <%_ } _%>


    })

    it('Run Tests', async function () {
        /* All test cases to be performed */
        <%_ if (!!test && test.testExists == "yes") { _%>
        await <%= controlName %>.testExists();
        <%_ } _%>

        <%_ if (!!test && test.testInput) { _%>
        await <%= controlName %>.testInput(<%-JSON.stringify(test.testInput) %>);
        <%_ } _%>
    })

        <%_ if (!!after) { _%>
        after(async function() {
            describe("<%= testName %>", async function () {
            it('Run after block', async function () {
                <%_ if (after.input) { %>
                await <%= controlName %>.dropdown.input(<%-JSON.stringify(after.input) %>);
                <%_ } %>

                <%_ if (after.waitLoading) { _%>
                await <%= controlName %>.dropdown.loading();
                <%_ } _%>
            })
                <%_ if (nextTestPath) { _%>
                        /* All actions to be performed after running test case */
                        after(async function() {
                        require("<%- nextTestPath%>");
                        });
                <%_ } _%>
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

/* Dropdown Template ending */
