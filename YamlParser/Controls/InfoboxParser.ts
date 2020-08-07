import { BaseParser } from "../BaseParser"
import { ControlDataBlock } from "../DataTypes"

export class InfoboxParser extends BaseParser {

    constructor(data: ControlDataBlock) {
        let templatePath: string = "Templates/InfoboxTemplate.ejs.t";
        super(templatePath, data);
    }

}