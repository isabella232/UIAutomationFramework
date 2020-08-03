
await checkElementExistenceToggled("<%= utilityName %>","<%= selector %>", page)
/* Include the other test cases here */
<%% if (locals.nextTest) { %>
    <%%- locals.nextTest %>
<%% } %>