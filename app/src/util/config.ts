import type { LoggerOptions } from 'pino'

// Dynamically switch logging options based on environment
export const envToLogger: Record<string, LoggerOptions | boolean> = {
  development: {
    level: 'debug',
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname'
      }
    }
  },
  production: true,
  test: false
}
