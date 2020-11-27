import { BaseParser } from "./BaseParser"
import { ControlDataBlock } from "./DataTypes"

const CONTROLS: {[key: string] : string} = {
    //<ControlName> : <TemplatePath>
    "controlTemplate": "Templates/ControlTemplate.ejs.t"
}

export class ControlParserFactory extends BaseParser {

    constructor(controlType: string, data: ControlDataBlock) {
        const templatePath: string = CONTROLS["controlTemplate"];;
        super(templatePath, data);
    }
}