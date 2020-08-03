import { DelayParser } from "./Utilities/DelayParser";
import { WaitUntilElementExistsParser } from "./Utilities/WaitUntilElementExistsParser";
import { CheckElementExistenceToggledParser } from "./Utilities/CheckElementExistenceToggledParser"

const UTILITIES: {[key: string] :any} = {
    //<ControlName> : <ControlParser>
    "delay": DelayParser,
    "waitUntilElementExists": WaitUntilElementExistsParser,
    "checkElementExistenceToggled": CheckElementExistenceToggledParser
}

export class UtilityParserFactory {
    static createInstance(utilityType: string, data: any) {
        const parserCreator = UTILITIES[utilityType];
        const parser = parserCreator ? new parserCreator(data) : null;
        return parser;
    }
}