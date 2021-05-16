import { BaseLogin } from "./BaseLoginPage";

const usernameSelector: string = "form > div > input[type='text']";
const passwordSelector: string = "input[type='password']";
const signInButtonSelector: string = 'button > span';
const loginPageUrl: string = "https://www.flipkart.com";

export class flipkartLogin extends BaseLogin {

    public async login() {

        //goto the login page url
        await this.page.goto(loginPageUrl);

        //enter username
        await this.page.waitFor(usernameSelector);
        await this.util.inputTextHelper(usernameSelector, this.username, false);

        //enter password
        await this.page.waitFor(passwordSelector);
        await this.util.inputTextHelper(passwordSelector, this.password, false);

        //click the login button
        await this.page.waitFor(signInButtonSelector);
        await this.page.click(signInButtonSelector);

    }

    public async testLogin(){
        //Check if the signIn button no longer exists
        await this.util.delay(1000);
        await super.testLogin(signInButtonSelector, false);

    }
}