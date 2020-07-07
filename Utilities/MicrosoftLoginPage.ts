
const usernameSelector: string = 'input[type="email"][name=loginfmt]';
const nextButtonSelector: string = 'input[type="submit"]';
const signInWithUserNamePassSelector: string = '.actionLink > .normalText'
const passwordSelector: string = 'input[name=Password]';
const signInButtonSelector: string = '#submitButton';


export class msLogin {

    /*
     * Represents the username
     */
    private username: string;

    /*
     * Represents the password
     */
    private password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    public async loginAuthPage(page: any) {

        //Putting in try catch block since the sometimes, page doesn't ask for certain inputs
        //And automatically assumes them, such as 'password'

        //Enter username
        try {
            console.log('Checking if enter username present');
            await page.waitFor(usernameSelector)
            await page.$eval(usernameSelector, (el: any, username: string) => { el.value = username }, this.username);
            await page.click(nextButtonSelector);
        }
        catch(error) {
            console.log("Username element doesn't exist")
         }

        try {
            console.log('Checking if username/pass sign in option present')
            await page.waitFor(signInWithUserNamePassSelector);
            await page.click(signInWithUserNamePassSelector);
        }
        catch(error) {
            console.log("username/pass sign in option element doesn't exist")
         }

        try {
            console.log("Checking if enter password present")
            await page.waitFor(passwordSelector);
            await page.$eval(passwordSelector, (el: any, password: string) => { el.value = password }, this.password);
            await page.click(signInButtonSelector);
        }
        catch(error) {
            console.log("password element doesn't exist")
         }

        try {
            console.log("Moving to multi factor authentication");
            await page.waitFor('#WindowsAzureMultiFactorAuthentication');
            await page.click('#WindowsAzureMultiFactorAuthentication');
        }
        catch(error) {
            console.log("multi-factor auth element doesn't exist")
         }
    }

}