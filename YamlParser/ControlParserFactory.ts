import { ButtonParser } from "./Controls/ButtonParser";
import { DropdownParser } from "./Controls/DropdownParser";
import { TextboxParser } from "./Controls/TextboxParser";
import { InfoboxParser } from "./Controls/InfoboxParser";
import { CreateNewDropdownButtonParser } from "./Controls/CreateNewDropdownButtonParser"

const CONTROLS: {[key: string] :any} = {
    //<ControlName> : <ControlParser>
    "button": ButtonParser,
    "dropdown": DropdownParser,
    "textbox": TextboxParser,
    "infobox": InfoboxParser,
    "createNewDropdownButton": CreateNewDropdownButtonParser
}

export class ControlParserFactory {
    static createInstance(controlType: string, data: any) {
        const parserCreator = CONTROLS[controlType];
        const parser = parserCreator ? new parserCreator(data) : null;
        return parser;
    }
}