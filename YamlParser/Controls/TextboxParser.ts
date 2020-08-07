import { BaseParser } from "../BaseParser"
import { ControlDataBlock } from "../DataTypes"

export class TextboxParser extends BaseParser {

    constructor(data: ControlDataBlock) {
        let templatePath: string = "Templates/TextboxTemplate.ejs.t";
        super(templatePath, data);
    }
}