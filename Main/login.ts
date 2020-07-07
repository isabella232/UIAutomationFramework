/// <reference path="bootstrap.ts" />
import { expect } from 'chai';
import 'mocha';

import { msLogin } from "../Utilities/MicrosoftLoginPage"

describe("Login using Microsoft Credentials", () => {
    let page: any;
    
    before(async function() {
        page = await browser.newPage();
        await page.goto('https://aka.ms/workloadbuilder');

        let login = new msLogin("sisatia@microsoft.com", "******");
        await login.loginAuthPage(page);
    })

    after(async function () {
        await browser.close();
    })

    it('Login to Microsoft', async function () {
        await page.waitFor('.fxs-topbar-internal.fxs-internal-full')
    });
})

