import process from 'node:process'
import { ConsoleLogger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const logger = new ConsoleLogger()
  const app = await NestFactory.create(AppModule, {
    logger,
  })

  const host = process.env.HOST || 'localhost'
  const port = process.env.PORT ? Number(process.env.PORT) : 7070

  await app.listen(port)
  logger.log(`Server is listening on http://${host}:${port}`)
}

bootstrap()
