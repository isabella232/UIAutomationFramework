import Utilities = require("../Utilities/Utils")
import { Constants } from "../Resources/workloadBuilderSelector"

export class BaseControl {

    /*
     * Represents the name of the element
     */
    protected name: string

    /*
     * Represents the selector for the element
     */
    protected selector: string;

    /*
     * Represents the page object for the element
     */
    protected page: any;

    constructor(name: string, selector: string, page: any) {
        this.name = name;
        this.selector = selector;
        this.page = page;
    }

    /*
     * Initializing the control object
     */

    //We have separate init function if we choose to initailize all the objects in some other manner in future. 
    public async init() {
        return await this.page.waitFor(this.selector);
    }

    /*
     * To explicitly check if an elements exists of not with the required timeout
     */
    public async exists() {
        try {
            await this.page.waitFor(this.selector, { timeout: Constants.elementExistenceTimeout });
            logger.info(this.name + " exists");
            return true;
        } catch {
            logger.info(this.name + " does not exist");
            return false;
        }

    }

    /*
     * To keep polling for the element's existense
     */

    public async pollexists() {
        var elementPresent: boolean = false;
        while (!elementPresent) {

            //todo: sisatia
            //Add this value of 5000 to WBSelectors
            await Utilities.delay(5000);
            elementPresent = await this.exists();
        }
    }



}