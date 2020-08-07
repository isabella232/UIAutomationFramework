import { YamlParser } from "./YamlParser"
import * as winston from "winston"
import _ from "lodash"

const globalVariables = _.pick(global, ['logger']);

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
    parser.RenderTestTemplates();
}

main(); 