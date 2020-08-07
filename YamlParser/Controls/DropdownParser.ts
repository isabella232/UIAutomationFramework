import { BaseParser } from "../BaseParser"
import { ControlDataBlock } from "../DataTypes"

export class DropdownParser extends BaseParser {

    constructor(data: ControlDataBlock) {
        let templatePath: string = "Templates/DropdownTemplate.ejs.t";
        super(templatePath, data);
    }
    
}