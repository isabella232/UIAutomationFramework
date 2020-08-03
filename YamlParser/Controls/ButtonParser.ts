import { BaseParser } from "../BaseParser"

export class ButtonParser extends BaseParser {

    constructor(data: any) {
        let importStatement: string = `\nimport { TestButton } from "../TestControls/Button";`;
        let templateName: string = "ButtonTemplate";
        let templatePath: string = "Templates/Controls/" + templateName + ".ejs.t";
        let renderedTemplateName: string = data.controlName + templateName
        super(importStatement, templateName, templatePath, renderedTemplateName, data);
    }
}