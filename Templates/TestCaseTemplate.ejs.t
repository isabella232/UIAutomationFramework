/// <reference path="../bootstrap.ts" />
/* Add import statements here */
<%%_ if (locals.importedModules) { _%>
<%%- locals.importedModules %>
<%%_ } _%>

export class <%= projectName %> extends BaseTestClass {

    public async runTests(page: any) {
        /* Include test cases here */
        <%% if (locals.nextTest) { %>
        <%%- locals.nextTest %>
        <%% } %>
    }
}