import { BaseParser } from "../BaseParser"

export class VirtualMachinesGridParser extends BaseParser {

    constructor(data: any) {
        let templatePath: string = "Templates/VirtualMachinesGridTemplate.ejs.t";
        super(templatePath, data);
    }
}