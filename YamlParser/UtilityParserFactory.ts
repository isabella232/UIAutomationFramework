import { BaseParser } from "./BaseParser";
import { UtilityDataBlock } from "./DataTypes";

const UTILITIES: {[key: string] : string} = {
    //<ControlName> : <ControlParser>
    "delay": "Templates/DelayTemplate.ejs.t",
    "waitUntilElementExists": "Templates/WaitUntilElementExistsemplate.ejs.t",
    "checkElementExistenceToggled": "Templates/CheckElementExistenceToggledTemplate.ejs.t"
}

export class UtilityParserFactory extends BaseParser{
    constructor(utilityType: string, data: UtilityDataBlock) {
        const templatePath: string = UTILITIES[utilityType];;
        super(templatePath, data);
    }
}