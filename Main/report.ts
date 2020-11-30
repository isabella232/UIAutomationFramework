import open = require('open')
import path = require('path')

async function openReport(){
    await open(path.resolve(__dirname, "../mochawesome-report/mochawesome.html"), {app: 'google chrome'});
}

openReport();