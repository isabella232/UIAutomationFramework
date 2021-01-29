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
        const jquery = await page.evaluate(() => window.fetch('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js').then((res) => res.text()));
        await global.page.goto(gotoPage);
        await page.evaluate(jquery);
    });

    it('Initiate Testing', async function() {

    });
});
