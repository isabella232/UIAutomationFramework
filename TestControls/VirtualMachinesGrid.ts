import 'mocha';
import { VirtualMachinesGrid } from "../Controls/VirtualMachinesGrid"
import { TestBaseControl } from "./BaseControl"
export class TestVirtualMachinesGrid extends TestBaseControl {

    /**
     * Dropdown object
     */
    public virtualMachinesGrid: VirtualMachinesGrid;

    constructor(name: string, selector: string, page: any) {
        super(name, selector, page);
        this.virtualMachinesGrid = new VirtualMachinesGrid(name, selector, page);
    }

    public async init() {
        await this.virtualMachinesGrid.init();
    }

}