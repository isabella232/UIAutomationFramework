/// <reference path="../bootstrap.ts" />
import 'mocha';
import {YamlParser} from "../YamlParser/YamlParser"

//create generator/loader to generate code for the page through JSON/YAML injestion
//todo: sisatia
describe('Load Starting page', async function () {
    //var page: any;
    var parser: YamlParser = new YamlParser();
    before(async function () {
        global.page = await browser.newPage();
        let gotoPage: string = parser.gotoPage;
        await global.page.goto(gotoPage);
    });

    it('Initiate Testing', async function() {

    });
});
