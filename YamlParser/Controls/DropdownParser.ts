import { BaseParser } from "../BaseParser"

export class DropdownParser extends BaseParser {

    constructor(data: any) {
        let importStatement = `\nimport { TestDropdown } from "../TestControls/Dropdown"`;
        let templateName: string = "DropdownTemplate";
        let templatePath: string = "Templates/Controls/" + templateName + ".ejs.t";
        let renderedTemplateName: string = data.controlName + templateName;
        super(importStatement, templateName, templatePath, renderedTemplateName, data);
    }
}