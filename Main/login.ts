/// <reference path="../bootstrap.ts" />
import "mocha"
import dotenv from "dotenv"
import { assert } from "chai"

import { msLogin } from "../Utilities/MicrosoftLoginPage"


dotenv.config()


describe("Login using Microsoft Credentials", () => {
    let page: any;

    before(async function () {

        const username: string = process.env.AZURE_USERNAME || "";
        const password: string = process.env.AZURE_PASSWORD || "";

        assert(username.length != 0, "Username cannot be empty")
        assert(password.length != 0, "Password cannot be empty")

        page = await browser.newPage();
        await page.goto('https://aka.ms/workloadbuilder');

        let login = new msLogin(username, password);
        await login.loginAuthPage(page);
    })

    after(async function () {
        await browser.close();
    })

    it('Login to Microsoft', async function () {
        await page.waitFor('.fxs-topbar-internal.fxs-internal-full')
    });
})

