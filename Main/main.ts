/// <reference path="../bootstrap.ts" />
import 'mocha';
import { BaseTestClass } from "../Tests/BaseTestClass"
//import { WorkloadBuilder } from '../Tests/WorkloadBuilder';
import {YamlParser} from "../YamlParser/YamlParser"

//create generator/loader to generate code for the page through JSON/YAML injestion
//todo: sisatia
describe('Load Starting page', async function () {
    var page: any;
    var parser: YamlParser = new YamlParser(page);
    before(async function () {
        page = await browser.newPage();
        await parser.RenderTestTemplates();
        let gotoPage: string = parser.gotoPage;
        await page.goto(gotoPage);
    });

    describe('Start Running Test Cases', async function () {
        it('Initiate Testing', async function() {
            const testClass: any = await import("../Tests/" + parser.projectName);
            let testInstance: BaseTestClass = new testClass[parser.projectName]();
            await testInstance.runTests(page);
        })
    });

});
