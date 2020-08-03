import * as yaml from 'js-yaml';
import * as fs from 'fs';
import * as ejs from 'ejs';
import { ControlParserFactory } from "./ControlParserFactory"
import { BaseParser } from './BaseParser';
import { UtilityParserFactory } from './UtilityParserFactory';

export class YamlParser {

    private data: any

    public gotoPage: any

    public projectName: any;

    public page: any;

    private importDict: any;

    private importStatements: string;

    constructor(page: any) {
        this.page = page;
        this.importDict = {};
        this.importStatements = `import 'mocha';\nimport { BaseTestClass } from "./BaseTestClass"`
        try {
            let fileContents = fs.readFileSync('/Users/simratsatia/Desktop/UIAutomationFramework/spec.yml', 'utf8');
            this.data = yaml.safeLoad(fileContents);
            this.gotoPage = this.data[0]["goto"];
            this.projectName = this.data[0]["projectName"];
        } catch (e) {
            console.log(e);
        }
    }


    public async RenderTestTemplates() {

        await this.initTestTemplate();

        let i: number = 1;
        while (i < this.data.length) {
            let block: Record<Block, any> = this.data[i];
            let testName: string = block.name;

            if (block.control) {
                await this.initControl(testName, block.control)
            } else {
                await this.initUtility(block.utility)
            }
            i++;
        }

        let finalTemplateData = await ejs.renderFile("RenderedTestTemplates/TestCaseTemplate.ejs.t", {
            importedModules: this.importStatements, nextTest: ""
        })

        //console.log(this.projectName);
        fs.writeFileSync('Tests/' + this.projectName + '.ts', finalTemplateData);
        console.log('Final test file generated');
    }

    private async initTestTemplate(){
        let testCaseTemplatePath = "Templates/TestCaseTemplate.ejs.t";
        let testTemplateData: string = await ejs.renderFile(testCaseTemplatePath, {
            projectName: this.projectName
        });
        fs.writeFileSync('RenderedTestTemplates/TestCaseTemplate.ejs.t', testTemplateData);
        //Add log statement
        //todo: sisatia
    }

    private async initUtility(utilityBlock: Record<UtilityParser, any>) {
        let utilityType: string = utilityBlock.type;
        let data: any = {
            utilityName: utilityBlock.name.replace(/ /g, ''),
            selector: utilityBlock.selector,
            duration: utilityBlock.duration
        }

        let utilityParser: BaseParser = UtilityParserFactory.createInstance(utilityType, data);
        await utilityParser.renderTemplate();
        await utilityParser.renderTestTemplate();

        if (!this.importDict[utilityType]) {
            //Add the control to the dictonary now
            this.importDict[utilityType] = true;
            this.importStatements += utilityParser.importStatement;
        }
    }

    private async initControl(testName: string, controlBlock: Record<ControlParser, any>) {
        let controlType: string = controlBlock.type;
        let actionBlock: Record<Action, any> = controlBlock.action;

        //todo: sisatia
        //Make an interface for data type for sanity check
        let data: any = {
            testName: testName,
            controlName: controlBlock.name.replace(/ /g, ''),
            selector: controlBlock.selector,
            before: actionBlock ? actionBlock.before : undefined,
            after: actionBlock ? actionBlock.after : undefined,
            test: controlBlock.test
        }

        let controlParser: BaseParser = ControlParserFactory.createInstance(controlType, data);
        await controlParser.renderTemplate();
        await controlParser.renderTestTemplate();

        if (!this.importDict[controlType]) {
            //Add the control to the dictonary now
            this.importDict[controlType] = true;
            this.importStatements += controlParser.importStatement;
        }
    }

}


//General for all controls
enum ControlParser {
    Type = "type",
    Name = "name",
    Selector = "selector",
    Action = "action",
    Test = "test"
}

enum UtilityParser {
    Type = "type",
    Name = "name",
    Selector = "selector",
    Duration = "duration"
}

enum Action {
    Before = "before",
    After = "after"
}

enum Block {
    Name = "name",
    Control = "control",
    Utility = "utility"
    /* Add more fields, as and when required, such as delay */
}