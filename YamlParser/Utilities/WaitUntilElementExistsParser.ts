import { BaseParser } from "../BaseParser"

export class WaitUntilElementExistsParser extends BaseParser {

    constructor(data: any) {
        let templatePath: string = "Templates/WaitUntilElementExistsTemplate.ejs.t";
        super(templatePath, data);
    }
}
