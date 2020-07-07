export {}
const puppeteer = require('puppeteer');
const { expect } = require('chai');
const _ = require('lodash');
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