import { YamlParser } from "./YamlParser"
import * as winston from "winston"
import _ from "lodash"
import * as fsExtra from "fs-extra"
import * as path from 'path';

const globalVariables = _.pick(global, ['logger']);
const testDir = "../Tests"

declare global {
  var logger: any;
}

async function main() {
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
      
    var parser: YamlParser = new YamlParser();
    fsExtra.emptyDirSync(path.resolve(__dirname, "../Tests"))
    await parser.RenderTestTemplates();
}

main(); 