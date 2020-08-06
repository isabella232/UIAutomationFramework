import { BaseParser } from "../BaseParser"

export class CreateNewDropdownButtonParser extends BaseParser {


    constructor(data: any) {
        let templatePath: string = "Templates/CreateNewDropdownButtonTemplate.ejs.t";
        super(templatePath, data);
    }
}