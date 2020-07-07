/*
 * Function to return the xpath of an element
 */

export async function getXPath(selector: string, page: any) {

    let xPath = await page.evaluate((selector: string) => {
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

/*
 * Function to click the element using XPath
 */
export async function clickUsingXPath(selector: string, page: any) {
    let xPath: string = await getXPath(selector, page);

    let item = await page.$x(xPath);
    await item[0].click();
}

/*
 * Function to add the desired delay
 */
export function delay(time: number /* time in millisecond */): any {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

 /*
  * To transition from the existence and non existence of an element
  */
export async function checkElementExistenceToggled(name: string, selector: string, page: any) {
    console.log(name + " element present");

    let element: any;
    let elementRemoved: boolean = false;
    while (!elementRemoved) {
        try {
            element = await page.waitFor(selector, { timeout: 2000 });
        }
        catch {
            elementRemoved = true;
        }
    }
    console.log(name + " element removed");
}
/*
 * Generic function to input text in any field
 */
export async function inputTextHelper(selector: string, value: string, page: any, xPathClickRequired?: boolean) {
    await page.waitFor(selector);
    if (xPathClickRequired) {
        await clickUsingXPath(selector, page);
    }
    await clearTextField(selector, page);
    await page.$eval(selector, (el: any, value: string) => { el.value = value + " " }, value);
    await page.keyboard.press('Backspace');
}

async function clearTextField(selector: string, page:any) {
    console.log("Clearing the text field")
    const textField = await page.waitFor(selector);
    await textField.click({ clickCount: 3 });
    await page.keyboard.press('Backspace');
}

