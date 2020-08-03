//This file shall be updated once utilities have been converted into classes and not functions
//todo: sisatia abgopal

import { BaseParser } from "../BaseParser"

export class CheckElementExistenceToggledParser extends BaseParser {

    constructor(data: any) {
        let importStatement = `\nimport { checkElementExistenceToggled } from "../Utilities/Utils"`;
        let templateName: string = "CheckElementExistenceToggledTemplate";
        let templatePath: string = "Templates/Utilities/" + templateName + ".ejs.t";
        let renderedTemplateName: string = data.utilityName + templateName;
        super(importStatement, templateName, templatePath, renderedTemplateName, data);
    }
}