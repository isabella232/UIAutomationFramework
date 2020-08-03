import { BaseParser } from "../BaseParser"

export class WaitUntilElementExistsParser extends BaseParser {

    constructor(data: any) {
        let importStatement = `\nimport { BaseControl } from "../Controls/BaseControl"`;
        let templateName: string = "WaitUntilElementExistsTemplate";
        let templatePath: string = "Templates/Utilities/" + templateName + ".ejs.t";
        let renderedTemplateName: string = data.utilityName + templateName;
        super(importStatement, templateName, templatePath, renderedTemplateName, data);
    }
}