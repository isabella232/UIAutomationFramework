//This file shall be updated once utilities have been converted into classes and not functions
//todo: sisatia abgopal

import { BaseParser } from "../BaseParser"
import { UtilityDataBlock } from "../DataTypes"

export class DelayParser extends BaseParser {

    constructor(data: UtilityDataBlock) {
        let templatePath: string = "Templates/DelayTemplate.ejs.t";
        super(templatePath, data);
    }
}

