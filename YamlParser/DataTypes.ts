//Interface for each data block

interface BaseDataBlock {
    testName: string;
    currentTestPath: string;
    nextTestPath: string | undefined;
}

export interface ControlDataBlock extends BaseDataBlock {
    controlName: string;
    before: any;
    after: any;
    test: any ;
    selector: string;
}

export interface UtilityDataBlock extends BaseDataBlock {
    utilityName: string;
    duration: string;
    selector: string;
}

export interface CustomTestDataBlock extends BaseDataBlock {
    customTestPath: string;
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

export enum CustomTestParser {
    CustomTestPath = "customTestPath"
}

export enum Action {
    Before = "before",
    After = "after"
}

export enum Block {
    Name = "name",
    Control = "control",
    Utility = "utility",
    Custom = "custom"
    /* Add more fields, as and when required, such as delay */
}