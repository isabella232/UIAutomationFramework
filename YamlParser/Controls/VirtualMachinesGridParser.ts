import { BaseParser } from "../BaseParser"
import { ControlDataBlock } from "../DataTypes"

export class VirtualMachinesGridParser extends BaseParser {

    constructor(data: ControlDataBlock) {
        let templatePath: string = "Templates/VirtualMachinesGridTemplate.ejs.t";
        super(templatePath, data);
    }
}