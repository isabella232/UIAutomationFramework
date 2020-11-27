/// <reference path="../bootstrap.ts" />
import 'mocha';
import {YamlParser} from "../YamlParser/YamlParser"

describe('Load Starting page', async function () {
    //var page: any;
    var parser: YamlParser = new YamlParser();
    before(async function () {
        global.logger.info();
        global.logger.info("=============================================")
        global.logger.info("INITIATE TESTING");
        global.page = await browser.newPage();
        let gotoPage: string = parser.gotoPage;
        await global.page.goto(gotoPage);
    });

    it('Initiate Testing', async function() {

    });
});
