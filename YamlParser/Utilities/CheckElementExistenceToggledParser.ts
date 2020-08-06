//This file shall be updated once utilities have been converted into classes and not functions
//todo: sisatia abgopal

import { BaseParser } from "../BaseParser"

export class CheckElementExistenceToggledParser extends BaseParser {

    constructor(data: any) {
        let templatePath: string = "Templates/CheckElementExistenceToggledTemplate.ejs.t";
        super(templatePath, data);
    }
}
