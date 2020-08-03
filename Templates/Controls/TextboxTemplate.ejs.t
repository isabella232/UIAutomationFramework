describe("<%- testName %>", async function () {
    let <%= controlName %>: TestTextbox;
    before(async function () {
        /* Initialization */
        <%= controlName %> = new TestTextbox("<%= controlName %>", "<%- selector %>", page);
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

        <%_ if (!!test && test.testInput) { _%>
        await <%= controlName %>.testInput(<%-JSON.stringify(test.testInput) %>);
        <%_ } _%>

        <%_ if (!!test && test.testValidity) { _%>
        await <%= controlName %>.testValidity();
        <%_ } _%>
    })

    after(async function () { 
        /* All actions to be performed after running test case */
        <%_ if (!!after && after.input) { %>
        await <%= controlName %>.textbox.input(<%-JSON.stringify(after.input) %>);
        <%_ } %>

        /* Include the other test cases here */
        <%% if (locals.nextTest) { %>
            <%%- locals.nextTest %>
        <%% } %>
    })
});
/* Textbox Template ending */

