import * as yaml from 'js-yaml';
import * as fs from 'fs';
const path = require("path");
import { ControlParserFactory } from "./ControlParserFactory"
import { BaseParser } from './BaseParser';
import { UtilityParserFactory } from './UtilityParserFactory';
import { ControlDataBlock, ControlParser, UtilityDataBlock, UtilityParser, Action, Block, CustomTestParser, CustomTestDataBlock } from "./DataTypes"
import { CustomTestsParser } from "./CustomTestParser" 

export class YamlParser {

    private data: any;

    public gotoPage: any;

    public projectName: any;

    constructor() {
        try {
            let fileContents =  fs.readFileSync(path.resolve(__dirname, "../spec.yml"), 'utf8');
            this.data = yaml.safeLoad(fileContents);
            this.gotoPage = this.data[0]["goto"];
            this.projectName = this.data[0]["projectName"];
        } catch (e) {
            console.log(e);
        }
    }


    public async RenderTestTemplates() {

        let i: number = 1;
        while (i < this.data.length) {
            let block: Record<Block, any> = this.data[i];
            let testName: string = block.name;
            let currentTestNumber: string = i + "";
            let nextTestNumber: string | undefined = (i < this.data.length - 1) ? (i + 1) + "": undefined;

            if (block.control) {
                await this.initControl(testName, block.control, currentTestNumber, nextTestNumber);
            } else if (block.utility) {
                await this.initUtility(testName, block.utility, currentTestNumber, nextTestNumber);
            } else {
                //custom test
                await this.initCustomTest(testName, block.custom, currentTestNumber, nextTestNumber)
            }
            i++;
        } 
    }

    private async initCustomTest(testName: string, customBlock: Record<CustomTestParser, any>, currentTestNumber: string, nextTestNumber: string | undefined) {
        let data: CustomTestDataBlock = {
            testName: testName,
            customTestPath: customBlock.customTestPath,
            currentTestPath: 'Tests/' + currentTestNumber + "-test.ts",
            nextTestPath: nextTestNumber ? './' + nextTestNumber + "-test.ts": undefined
        }

        let customTestParser: BaseParser = new CustomTestsParser(data);
        await customTestParser.renderTemplate();
    }

    private async initUtility(testName: string, utilityBlock: Record<UtilityParser, any>, currentTestNumber: string, nextTestNumber: string | undefined) {
        let utilityType: string = utilityBlock.type;
        let data: UtilityDataBlock = {
            testName: testName,
            utilityName: utilityBlock.name.replace(/ /g, ''),
            selector: utilityBlock.selector,
            duration: utilityBlock.duration,
            currentTestPath: 'Tests/' + currentTestNumber + "-test.ts",
            nextTestPath: nextTestNumber ? './' + nextTestNumber + "-test.ts": undefined
        }

        let utilityParser: BaseParser = new UtilityParserFactory(utilityType, data);
        await utilityParser.renderTemplate();
    }

    private async initControl(testName: string, controlBlock: Record<ControlParser, any>, currentTestNumber: string, nextTestNumber: string | undefined) {
        let controlType: string = controlBlock.type;
        let actionBlock: Record<Action, any> = controlBlock.action;

        let data: ControlDataBlock = {
            testName: testName,
            controlName: controlBlock.name.replace(/ /g, ''),
            selector: controlBlock.selector,
            before: actionBlock ? actionBlock.before : undefined,
            after: actionBlock ? actionBlock.after : undefined,
            test: controlBlock.test,
            currentTestPath: 'Tests/' + currentTestNumber + "-test.ts",
            nextTestPath: nextTestNumber ? './' + nextTestNumber + "-test.ts": undefined
        }

        let controlParser: BaseParser = new ControlParserFactory(controlType, data);
        await controlParser.renderTemplate();
    }

}
