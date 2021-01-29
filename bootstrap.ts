export { }

import puppeteer from "puppeteer"
import expect from "chai"
import _ from "lodash"
import dotenv from "dotenv"
import { logger } from './Logger'

dotenv.config()

const globalVariables = _.pick(global, ['browser', 'expect', 'logger', 'page']);

const isHeadless = (parseInt((process.env.HEADLESS || "1")) === 1)


declare global {
  var expect: any;
  var browser: any;
  var logger: any;
  var page: any;
}

// puppeteer options
const opts = {
  headless: isHeadless,
  defaultViewport: null,
  userDataDir: "./user_data"
};

// expose variables
before(async function () {
  global.logger = logger

  global.expect = expect;
  global.browser = await puppeteer.launch(opts);
});

// close browser
after(function () {
  //browser.close();
});