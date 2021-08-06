<% 

    getFunctionDeclarations = function(block, classObject) {
        declarations = [];
        for (i = 0; i < block.length; i++ ) {
            if ((typeof block[i]) == "string") {
                /* function without any argument */
                declarations[i] = classObject + "." + block[i] + "()";
            } else {
                /* function with an argument with args in an array */
                fntn = Object.keys(block[i])[0]
                argsArray = Object.values(block[i])[0];
                declarations[i] = classObject + "." + fntn + "("
                for (j = 0; j < argsArray.length - 1; j++) {
                        declarations[i] = declarations[i] + getArgumentFormat(argsArray[j]) + ","
                    }
                declarations[i] = declarations[i] + getArgumentFormat(argsArray[argsArray.length - 1])  + ")"
                }
        }

        return declarations;
    }

    getArgumentFormat = function(argument) {

        if(argument.startsWith('process.env.')) {
            return argument;
        }

        if ((typeof argument) == "string") {
            return "\'" + argument + "\'";
        }
        return argument;
    }
%>

/// <reference path="../bootstrap.ts" />
import { Test<%= controlType %> } from "../TestControls/<%= controlType %>"
var <%= testControlName %>: Test<%= controlType %>;
<% controlName = controlType.charAt(0).toLowerCase() + controlType.slice(1) %>
describe("<%- testName %>", async function () {
    before(async function () {
        /* Initialization */
        <%= testControlName %> = new Test<%= controlType %>("<%= testControlName %>", "<%- selector %>", page);
        await <%= testControlName %>.init();

        /* All actions to be performed prior to test case */
        <%_ if (!!before) { _%>
            <% var functionDeclarations = getFunctionDeclarations(before, testControlName + "." + controlName) %>
            <% for(var i = 0; i < functionDeclarations.length; i++) { %>
                <% declaration = functionDeclarations[i].replace(/"/g, '') %>
                await <%- declaration %>
            <% } %>
        <%_ } _%>

    })

    it('Run Tests', async function () {
        /* All test cases to be performed */
        <%_ if (!!test) { _%>
            <% var functionDeclarations = getFunctionDeclarations(test, testControlName) %>
            <% for(var i = 0; i < functionDeclarations.length; i++) { %>
                <% declaration = functionDeclarations[i].replace(/"/g, '') %>
                await <%- declaration %>
            <% } %>
        <%_ } _%>

    })


    <%_ if (!!after) { _%>
    after(async function() {
            describe("<%= testName %>", async function () {
            it('Run after block', async function () {
                /* All actions to be performed after the test case */
                <%_ if (!!after) { _%>
                    <% var functionDeclarations = getFunctionDeclarations(after, testControlName + "." + controlName) %>
                    <% for(var i = 0; i < functionDeclarations.length; i++) { %>
                        <% declaration = functionDeclarations[i].replace(/"/g, '') %>
                        await <%- declaration %>
                    <% } %>
                <%_ } _%>
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
