


export class Util {

    private page: any

    private static util: Util;

    private constructor(page: any) {
        this.page = page;
    }

    /**
     * Function to create the instance of a utility class. Conforms to the singleton design pattern. 
     */
    public static getUtilities(page: any): Util {
        if (!Util.util) {
            Util.util = new Util(page);
        }

        return Util.util;
    }

    /**
     * Get the xPath based on the selector
     */
    public async getXPath(selector: string) {
        let xPath = await this.page.evaluate((selector: string) => {
            var item = $(selector)[0]
            while (item == undefined) {
                item = $(selector)[0]
            }
            const getPathTo = (element: any): any => {
                if (element.tagName == 'HTML') {
                    return '/HTML[1]';
                }
                if (element === document.body)
                    return '/HTML[1]/BODY[1]';

                var ix = 0;
                var siblings = element.parentNode.childNodes;
                for (var i = 0; i < siblings.length; i++) {
                    var sibling = siblings[i];
                    if (sibling === element)
                        return getPathTo(element.parentNode) + '/' + element.tagName + '[' + (ix + 1) + ']';
                    if (sibling.nodeType === 1 && sibling.tagName === element.tagName)
                        ix++;
                }
            }

            return getPathTo(item);
        }, selector);

        return xPath;
    }

    /**
     * Function to click the element using XPath
     */
    public async clickUsingXPath(selector: string) {
        let xPath: string = await this.getXPath(selector);

        let item = await this.page.$x(xPath);
        await item[0].click();
    }

    /**
     * Function to add the desired delay
     */
    public delay(time: number /** time in millisecond */): any {
        return new Promise(function (resolve) {
            setTimeout(resolve, time)
        });
    }

    /**
     * Function to check if the element came and went out of existence i.e. toggled
     */
    public async checkElementExistenceToggled(name: string, selector: string) {
        logger.info(name + " element present");

        let element: any;
        let elementRemoved: boolean = false;
        while (!elementRemoved) {
            try {
                element = await this.page.waitFor(selector, { timeout: 2000 });
            }
            catch {
                elementRemoved = true;
            }
        }
        logger.info(name + " element removed");
    }

    /**
     * Generic function to input text in any field
     */
    public async  inputTextHelper(selector: string, value: string, xPathClickRequired?: boolean) {
        await this.page.waitFor(selector);
        if (xPathClickRequired) {
            await this.clickUsingXPath(selector);
        }
        await this.clearTextField(selector);
        await this.page.$eval(selector, (el: any, value: string) => { el.value = value + " " }, value);
        await this.page.keyboard.press('Backspace');
    }

    /**
     * Function to clear the text field
     */
    public async clearTextField(selector: string) {
        logger.info("Clearing the text field")
        const textField = await this.page.waitFor(selector);
        await textField.click({ clickCount: 3 });
        await this.page.keyboard.press('Backspace');
    }

}