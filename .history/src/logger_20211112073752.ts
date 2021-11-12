import { createLogger, format, transports } from 'winston'

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.splat(),
        format.simple()
    ),
    transports: [
        new 
    ]
})