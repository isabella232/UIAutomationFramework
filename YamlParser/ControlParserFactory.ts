import { BaseParser } from "./BaseParser"
import { ControlDataBlock } from "./DataTypes"

const CONTROLS: {[key: string] : string} = {
    //<ControlName> : <ControlParser>
    "button": "Templates/ButtonTemplate.ejs.t",
    "dropdown": "Templates/DropdownTemplate.ejs.t",
    "textbox": "Templates/TextboxTemplate.ejs.t",
    "infobox": "Templates/InfoboxTemplate.ejs.t",
    "createNewDropdownButton": "Templates/CreateNewDropdownButtonTemplate.ejs.t",
    "virtualMachinesGrid": "Templates/VirtualMachinesGridTemplate.ejs.t"
}

export class ControlParserFactory extends BaseParser {

    constructor(controlType: string, data: ControlDataBlock) {
        const templatePath: string = CONTROLS[controlType];;
        super(templatePath, data);
    }
}