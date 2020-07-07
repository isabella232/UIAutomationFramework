/// <reference path="bootstrap.ts" />
import { expect } from 'chai';
import 'mocha';

import { msLogin } from "../Utilities/MicrosoftLoginPage"

describe("Login using Microsoft Credentials", () => {
    let page: any;
    
    before(async function() {
        let args = require('minimist')(process.argv.slice(2));
        let username: string = args['username'];
        let password: string = args['password'];
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

