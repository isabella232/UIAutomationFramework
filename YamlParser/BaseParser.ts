import * as ejs from 'ejs';
import * as fs from 'fs';
export class BaseParser {

    protected templateData: string;

    protected templatePath: string;  

    public data: any;
    
    constructor(templatePath: string, data: any) {
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
        fs.writeFileSync(this.data.currentTestPath, this.templateData);

        //todo: sisatia
        //update logging
        //console.log(this.templateName + ' Saved!'); 
    }


    //todo: sisatia
    //Remove this now, since we have consolidated test template only
    // public async renderTestTemplate() {
    //     let testCaseTemplatePath: string = "RenderedTestTemplates/TestCaseTemplate.ejs.t";
    //     let testTemplateData: string = await ejs.renderFile(testCaseTemplatePath, {
    //         nextTest: this.templateData, importedModules: this.IMPORT_PLACEHOLDER
    //     });

    //     fs.writeFileSync('RenderedTestTemplates/TestCaseTemplate.ejs.t', testTemplateData);
    //     console.log('TestCase Template file Updated!');
    // }
}