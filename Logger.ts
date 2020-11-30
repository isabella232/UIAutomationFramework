import * as winston from "winston"

const logger = winston.createLogger({
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.align(),
      winston.format.printf(
        info => `${info.level}: ${info.timestamp}: ${info.message}`
      )
    ),
    transports: [
      new (winston.transports.File)({
        filename: 'UITesting.log',
        level: 'info'
      })
    ],
  });



export { logger }