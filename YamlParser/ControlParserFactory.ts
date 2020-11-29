import { BaseParser } from "./BaseParser"
import { ControlDataBlock } from "./DataTypes"

export class ControlParserFactory extends BaseParser {

    constructor(data: ControlDataBlock) {
        const templatePath: string = "Templates/ControlTemplate.ejs.t"
        super(templatePath, data);
    }
}