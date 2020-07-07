export { }

import puppeteer from "puppeteer"
import expect from "chai"
import _ from "lodash"
import * as winston from "winston"

const globalVariables = _.pick(global, ['browser', 'expect', 'logger']);

declare global {
  var expect: any;
  var browser: any;
  var logger: any;
}

// puppeteer options
const opts = {
  headless: false,
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
      new winston.transports.Console()
    ],
  });

  


  global.expect = expect;
  global.browser = await puppeteer.launch(opts);
});

// close browser
after(function () {
  //   browser.close();
});