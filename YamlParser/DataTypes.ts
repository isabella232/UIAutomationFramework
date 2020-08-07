//Interface for each data block

interface BaseDataBlock {
    testName: string;
    selector: string;
    currentTestPath: string;
    nextTestPath: string | undefined;
}

export interface ControlDataBlock extends BaseDataBlock {
    controlName: string;
    before: any;
    after: any;
    test: any ;
}

export interface UtilityDataBlock extends BaseDataBlock {
    utilityName: string;
    duration: string;
}

//General for all controls
export enum ControlParser {
    Type = "type",
    Name = "name",
    Selector = "selector",
    Action = "action",
    Test = "test"
}

export enum UtilityParser {
    Type = "type",
    Name = "name",
    Selector = "selector",
    Duration = "duration"
}

export enum Action {
    Before = "before",
    After = "after"
}

export enum Block {
    Name = "name",
    Control = "control",
    Utility = "utility"
    /* Add more fields, as and when required, such as delay */
}