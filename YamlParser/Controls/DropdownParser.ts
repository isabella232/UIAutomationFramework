import { BaseParser } from "../BaseParser"

export class DropdownParser extends BaseParser {

    constructor(data: any) {
        let templatePath: string = "Templates/DropdownTemplate.ejs.t";
        super(templatePath, data);
    }
    
}