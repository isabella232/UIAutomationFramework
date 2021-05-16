import { BaseLogin } from "./BaseLoginPage"

const usernameSelector: string = 'input[type="email"][name=loginfmt]';
const nextButtonSelector: string = 'input[type="submit"]';
const signInWithUserNamePassSelector: string = '#optionsContainer'
const passwordSelector: string = 'input[name=Password]';
const signInButtonSelector: string = '#submitButton';
const loginPageUrl: string = 'https://www.portal.azure.com'
const testLoginSelector: string = ".fxs-topbar-internal.fxs-internal-full"

export class msLogin extends BaseLogin {

    public async login() {

        //goto the login page url
        await this.page.goto(loginPageUrl);

        //Putting in try catch block since the sometimes, page doesn't ask for certain inputs
        //And automatically assumes them, such as 'password'

        //Enter username
        try {
            logger.info('Checking if enter username present');
            await this.page.waitFor(usernameSelector)
            await this.page.$eval(usernameSelector, (el: any, username: string) => { el.value = username }, this.username);
            await this.page.click(nextButtonSelector);
        }
        catch(error) {
            logger.info("Username element doesn't exist")
         }

        try {
            logger.info('Checking if username/pass sign in option present')
            await this.page.waitFor(signInWithUserNamePassSelector);
            await this.page.click(signInWithUserNamePassSelector);
        }
        catch(error) {
            logger.info("username/pass sign in option element doesn't exist")
         }

        try {
            logger.info("Checking if enter password present")
            await this.page.waitFor(passwordSelector);
            await this.page.$eval(passwordSelector, (el: any, password: string) => { el.value = password }, this.password);
            await this.page.click(signInButtonSelector);
        }
        catch(error) {
            logger.info("password element doesn't exist")
         }

        try {
            logger.info("Moving to multi factor authentication");
            await this.page.waitFor('#WindowsAzureMultiFactorAuthentication');
            await this.page.click('#WindowsAzureMultiFactorAuthentication');
        }
        catch(error) {
            logger.info("multi-factor auth element doesn't exist")
         }
    }

    public async testLogin() {
        await super.testLogin(testLoginSelector);
    }

}