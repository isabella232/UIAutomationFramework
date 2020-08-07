import { BaseParser } from "../BaseParser"
import { UtilityDataBlock } from "../DataTypes"

export class WaitUntilElementExistsParser extends BaseParser {

    constructor(data: UtilityDataBlock) {
        let templatePath: string = "Templates/WaitUntilElementExistsTemplate.ejs.t";
        super(templatePath, data);
    }
}
