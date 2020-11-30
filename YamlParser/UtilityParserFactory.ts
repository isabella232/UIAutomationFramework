import { BaseParser } from "./BaseParser";
import { UtilityDataBlock } from "./DataTypes";

const UTILITIES: {[key: string] : string} = {
    //<ControlName> : <TemplatePath>
    "delay": "Templates/DelayTemplate.ejs.t",
    "waitUntilElementExists": "Templates/WaitUntilElementExistsTemplate.ejs.t",
    "checkElementExistenceToggled": "Templates/CheckElementExistenceToggledTemplate.ejs.t"
}

export class UtilityParserFactory extends BaseParser{
    constructor(utilityType: string, data: UtilityDataBlock) {
        const templatePath: string = UTILITIES[utilityType];;
        super(templatePath, data);
    }
}