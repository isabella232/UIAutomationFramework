/// <reference path="../bootstrap.ts" />
import 'mocha';
import {YamlParser} from "../YamlParser/YamlParser"
// import dotenv from "dotenv"
// dotenv.config()

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
        if (process.env.INJECTJQUERY == "1") {
            const jquery = await global.page.evaluate(() => window.fetch('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js').then((res) => res.text()));
            await page.evaluate(jquery);
        }
    });

    it('Initiate Testing', async function() {

    });
});
