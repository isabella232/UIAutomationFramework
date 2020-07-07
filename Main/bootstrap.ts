export {}

import puppeteer from "puppeteer"
import expect from "chai"
import _ from "lodash"

const globalVariables = _.pick(global, ['browser', 'expect']);

declare global {
    var expect: any;
    var browser: any;
 }

// puppeteer options
const opts = {
    headless: false,
    defaultViewport: null,
    userDataDir: "./user_data"
};

// expose variables
before (async function () {
  global.expect = expect;
  global.browser = await puppeteer.launch(opts);
});

// close browser
after (function () {
//   browser.close();
});