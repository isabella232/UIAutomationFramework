/// <reference path="../bootstrap.ts" />
describe("<%= testName %>", async function () {

    it('Run Custom Tests', async function () {
        require("<%= customTestPath %>");
    })

    after(async function() {
        <%_ if (nextTestPath) { _%>
            /* All actions to be performed after running test case */
            require("<%- nextTestPath %>");
        <%_ } _%>
    });
});

/* Button Template ending */ 