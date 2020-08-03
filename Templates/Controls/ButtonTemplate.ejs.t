describe("<%= testName %>", async function () {
    let <%= controlName %>: TestButton;
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

    after(async function () { 
        /* All actions to be performed after running test case */
        <%_ if (!!after && after.click == "yes") { %>
        await <%= controlName %>.button.click();
        <%_ } %>

        /* Include the other test cases here */
        <%% if (locals.nextTest) { %>
            <%%- locals.nextTest %>
        <%% } %>
    })
});
/* Button Template ending */