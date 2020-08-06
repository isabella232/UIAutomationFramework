import { BaseParser } from "../BaseParser"

export class ButtonParser extends BaseParser {

    constructor(data: any) {
        let templatePath: string = "Templates/ButtonTemplate.ejs.t";
        super(templatePath, data);
    }
}