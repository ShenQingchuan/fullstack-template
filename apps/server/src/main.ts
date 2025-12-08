import process from 'node:process'
import { NestFactory } from '@nestjs/core'
import { Logger } from 'nestjs-pino'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  })

  const logger = app.get(Logger)
  app.useLogger(logger)

  app.enableCors({
    origin: true,
    credentials: true,
  })

  const host = process.env.HOST || '0.0.0.0'
  const port = process.env.PORT ? Number(process.env.PORT) : 7070

  await app.listen(port, host)
  logger.log(`Server is listening on http://${host}:${port}`)
}

bootstrap()
