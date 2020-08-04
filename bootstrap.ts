export { }

import puppeteer from "puppeteer"
import expect from "chai"
import _ from "lodash"
import * as winston from "winston"
import dotenv from "dotenv"
import { YamlParser } from "./YamlParser/YamlParser"

dotenv.config()

const globalVariables = _.pick(global, ['browser', 'expect', 'logger']);

const isHeadless = (parseInt((process.env.HEADLESS || "1")) === 1)


declare global {
  var expect: any;
  var browser: any;
  var logger: any;
}

// puppeteer options
const opts = {
  headless: isHeadless,
  defaultViewport: null,
  userDataDir: "./user_data"
};

// expose variables
before(async function () {
  global.logger = winston.createLogger({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp(),
      winston.format.align(),
      winston.format.printf(
        info => `${info.level}: ${info.message}`
      )
    ),
    transports: [
      new (winston.transports.File)({
        filename: 'UITesting.log',
        level: 'info'
      })
    ],
  });

  global.expect = expect;
  global.browser = await puppeteer.launch(opts);
});

// close browser
after(function () {
  //   browser.close();
});