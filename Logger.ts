import * as winston from "winston"

const logger = winston.createLogger({
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



export { logger }