import { BaseParser } from "../BaseParser"

export class TextboxParser extends BaseParser {

    constructor(data: any) {
        let importStatement = `\nimport { TestTextbox } from "../TestControls/Textbox"`;
        let templateName: string = "TextboxTemplate";
        let templatePath: string = "Templates/Controls/" + templateName + ".ejs.t";
        let renderedTemplateName: string = data.controlName + templateName;
        super(importStatement, templateName, templatePath, renderedTemplateName, data);
    }
}