import { Util } from "./Utils";
import { assert } from "chai"
/// <reference path="../bootstrap.ts" />

export class BaseLogin {

    /**
     * Represents the page
     */
    public page: any;

    /**
     * Represents the username
     */
    public username: string;

    /**
     * Represents the password
     */
    public password: string;

    /**
     * Represents the utilities
     */
    public util: Util

    protected TIMEOUT_POLL_ELEMENTS_EXISTENCE: number = 5000;

    constructor(page: any, username: string, password: string) {
        this.page = page;
        this.username = username;
        this.password = password;
        this.util = Util.getUtilities(page);
    }

    public async login() {
        // Not Implemented
    }

    public async testLogin(selector: string, successfulloginforexists: boolean = true) {
        let page: any = this.page;
        describe('Test for successful login', async function() {
            it('Test for successful login', async function () {
                let exists: boolean = false; 
                try {
                    await page.waitFor(selector, { timeout: this.TIMEOUT_POLL_ELEMENTS_EXISTENCE});
                    exists = true;
                }
                catch {
                    exists = false;
                }
                if (!successfulloginforexists && exists) {
                    assert.fail("Login was unsuccessful");
                }
                
                if (!exists) {
                    assert.fail("Login was unsuccessful");
                }
            });
        })

        after(async function () {
            await browser.close();
        })

    }
}