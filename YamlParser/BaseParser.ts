import * as ejs from 'ejs';
import * as fs from 'fs';
export class BaseParser {
    
    public importStatement: string;

    protected templateName: string;

    protected templateData: string;   

    protected renderedTemplateName: string;  

    protected templatePath: string;  
    
    protected IMPORT_PLACEHOLDER: string = `<%_ if (locals.importedModules) { _%>\n<%- locals.importedModules %>\n<%_ } _%>`;

    public data: any;
    
    constructor(importStatement: string, templateName: string, templatePath: string, renderedTemplateName: string, data: any) {
        this.importStatement = importStatement;
        this.templateName = templateName;
        this.renderedTemplateName = renderedTemplateName;
        this.templatePath = templatePath;
        this.templateData = "";
        this.data = data;
    }



    public async renderTemplate() {
        this.templateData = await ejs.renderFile(this.templatePath, this.data);   

        //Generate this test file for each control only in debug mode
        //todo: sisatia

        //You should create a GUID to ensure that same files aren't overwritten
        //or make sure that unique names of controls are passed and throw error if names aren't unique
        //todo: sisatia
        fs.writeFileSync('RenderedTestTemplates/' + this.renderedTemplateName + '.ejs.t', this.templateData);

        //todo: sisatia
        //update logging
        console.log(this.templateName + ' Saved!');
    }

    public async renderTestTemplate() {
        let testCaseTemplatePath: string = "RenderedTestTemplates/TestCaseTemplate.ejs.t";
        let testTemplateData: string = await ejs.renderFile(testCaseTemplatePath, {
            nextTest: this.templateData, importedModules: this.IMPORT_PLACEHOLDER
        });

        fs.writeFileSync('RenderedTestTemplates/TestCaseTemplate.ejs.t', testTemplateData);
        console.log('TestCase Template file Updated!');
    }
}