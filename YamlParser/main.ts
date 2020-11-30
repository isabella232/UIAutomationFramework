import { YamlParser } from "./YamlParser"
import * as winston from "winston"
import _ from "lodash"
import * as fsExtra from "fs-extra"
import * as path from 'path';
import { logger } from '../Logger'

const globalVariables = _.pick(global, ['logger']);
const testDir = "../Tests"

declare global {
  var logger: any;
}

async function main() {
    global.logger = logger
      
    var parser: YamlParser = new YamlParser();
    logger.info("");
    logger.info("=============================================")
    logger.info("INITIATING PARSING OF YAML");
    fsExtra.emptyDirSync(path.resolve(__dirname, "../Tests"))
    await parser.RenderTestTemplates();
}

main(); 