import { DelayParser } from "./Utilities/DelayParser";
import { WaitUntilElementExistsParser } from "./Utilities/WaitUntilElementExistsParser";

const UTILITIES: {[key: string] :any} = {
    //<ControlName> : <ControlParser>
    "delay": DelayParser,
    "waitUntilElementExistsParser": WaitUntilElementExistsParser
}

export class UtilityParserFactory {
    static createInstance(utilityType: string, data: any) {
        const parserCreator = UTILITIES[utilityType];
        const parser = parserCreator ? new parserCreator(data) : null;
        return parser;
    }
}