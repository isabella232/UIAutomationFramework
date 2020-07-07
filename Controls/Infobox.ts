import { portalControl } from "./Controls"

export class Infobox extends portalControl {

    /*
     * Represents the element
     */
    public infoBox: any; 


    constructor (name: string, selector: string, page: any){
        super(name, selector, page);
        
    }


}