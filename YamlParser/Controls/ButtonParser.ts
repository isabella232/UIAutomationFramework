import { BaseParser } from "../BaseParser"
import { ControlDataBlock } from "../DataTypes"

export class ButtonParser extends BaseParser {

    constructor(data: ControlDataBlock) {
        let templatePath: string = "Templates/ButtonTemplate.ejs.t";
        super(templatePath, data);
    }
}