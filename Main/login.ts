/// <reference path="../bootstrap.ts" />
import "mocha"
import dotenv from "dotenv"
import { assert } from "chai"

import { msLogin } from "../Login/MicrosoftLoginPage"
import { flipkartLogin } from "../Login/FlipkartLoginPage"
import { BaseLogin } from "../Login/BaseLoginPage"


dotenv.config()


describe("Login using Credentials", () => {
    let page: any;
    let login: BaseLogin;

    before(async function () {

        const username: string = process.env.USERNAME || "";
        const password: string = process.env.PASSWORD || "";

        assert(username.length != 0, "Username cannot be empty");
        assert(password.length != 0, "Password cannot be empty");

        page = await browser.newPage();

        switch(process.env.LOGIN) {
            case "microsoft":  {
                login = new msLogin(page, username, password);
                break;
            }

            case "flipkart": {
                login = new flipkartLogin(page, username, password);
                break;
            }

            default: {
                //log error
            }

        }

        await login.login();
    })
    
    it('Login', async function () {
        await login.testLogin(page);
    });
})

