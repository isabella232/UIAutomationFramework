import { BaseParser } from "../BaseParser"

export class TextboxParser extends BaseParser {

    constructor(data: any) {
        let templatePath: string = "Templates/TextboxTemplate.ejs.t";
        super(templatePath, data);
    }
}