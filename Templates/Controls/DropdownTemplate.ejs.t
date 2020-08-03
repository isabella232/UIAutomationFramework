describe("<%- testName %>", async function () {
    let <%= controlName %>: TestDropdown;
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

    after(async function () { 
        /* All actions to be performed after running test case */
        <%_ if (!!after && after.input) { %>
        await <%= controlName %>.dropdown.input(<%-JSON.stringify(after.input) %>);
        <%_ } %>

        <%_ if (!!after && after.waitLoading) { _%>
        await <%= controlName %>.dropdown.loading();
        <%_ } _%>

        /* Include the other test cases here */
        <%% if (locals.nextTest) { %>
            <%%- locals.nextTest %>
        <%% } %>
    })
});
/* Dropdown Template ending */

