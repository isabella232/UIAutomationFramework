import { BaseParser } from "../BaseParser"

export class InfoboxParser extends BaseParser {

    constructor(data: any) {
        let templatePath: string = "Templates/InfoboxTemplate.ejs.t";
        super(templatePath, data);
    }

}