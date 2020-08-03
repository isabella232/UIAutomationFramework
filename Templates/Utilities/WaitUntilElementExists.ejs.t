/* Initialization */
<%= utilityName %> = new BaseControl("<%= utilityName %>", "<%- selector %>", page);
await <%= utilityName %>.init();
await <%= utilityName %>.waitUntilElementExists(<%= duration %>);
/* Include the other test cases here */
<%% if (locals.nextTest) { %>
    <%%- locals.nextTest %>
<%% } %>
 