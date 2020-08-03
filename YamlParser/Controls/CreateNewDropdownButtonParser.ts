import { BaseParser } from "../BaseParser"

export class CreateNewDropdownButtonParser extends BaseParser {

    constructor(data: any) {
        let importStatement = `\nimport { TestCreateNewDropdownButton } from "../TestControls/AdvancedControls/CreateNewDropdownButton"`;
        let templateName: string = "CreateNewDropdownButtonTemplate";
        let templatePath: string = "Templates/Controls/" + templateName + ".ejs.t";
        let renderedTemplateName: string = data.controlName + templateName;
        super(importStatement, templateName, templatePath, renderedTemplateName, data);
    }
}