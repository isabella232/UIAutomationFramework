
import { BaseParser } from "./BaseParser"
import { CustomTestDataBlock } from "./DataTypes"

export class CustomTestsParser extends BaseParser {

    constructor(data: CustomTestDataBlock) {
        let templatePath: string = "Templates/CustomTestTemplate.ejs.t";
        super(templatePath, data);
    }
}
