import { BaseParser } from "../BaseParser"
import { ControlDataBlock } from "../DataTypes"

export class CreateNewDropdownButtonParser extends BaseParser {


    constructor(data: ControlDataBlock) {
        let templatePath: string = "Templates/CreateNewDropdownButtonTemplate.ejs.t";
        super(templatePath, data);
    }
}