export class BaseControl {

    /**
     * Represents the name of the element
     */
    protected name: string

    /**
     * Represents the selector for the element
     */
    protected selector: string;

    /**
     * Represents the page object for the element
     */
    protected page: any;

    /**
     * Represents the control element object
     */
    protected controlElement: any;

    protected TIMEOUT_ELEMENTS_EXISTENCE: number = 5000;

    protected TIMEOUT_POLL_ELEMENTS_EXISTENCE: number = 5000;

    constructor(name: string, selector: string, page: any) {
        this.name = name;
        this.selector = selector;
        this.page = page;
    }

    /**
     * Initializing the control object
     */

    //We have separate init function if we choose to initailize all the objects in some other manner in future. 
    public async init() {
        this.controlElement = await this.page.waitFor(this.selector);
        return this.controlElement;
    }

    /**
     * To explicitly check if an elements exists of not with the required timeout
     */
    public async exists() {
        try {
            await this.page.waitFor(this.selector, { timeout: this.TIMEOUT_ELEMENTS_EXISTENCE });
            logger.info(this.name + " exists");
            return true;
        } catch {
            logger.info(this.name + " does not exist");
            return false;
        }
    }

    /**
     * To keep polling for the element's existense
     */

    public async waitUntilElementExists() {
        var elementPresent: boolean = false;
        while (!elementPresent) {
            const timeoutValue = this.TIMEOUT_POLL_ELEMENTS_EXISTENCE;

            await (new Promise(function(resolve, reject) {
                setTimeout(resolve, timeoutValue);
            }));

            elementPresent = await this.exists();
        }
    }
}