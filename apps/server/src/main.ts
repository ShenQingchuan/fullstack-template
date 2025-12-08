import process from 'node:process'
import { ConsoleLogger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const logger = new ConsoleLogger()
  const app = await NestFactory.create(AppModule, {
    logger,
  })

  // Enable CORS for mobile development
  app.enableCors({
    origin: true, // Allow all origins for development
    credentials: true,
  })

  const host = process.env.HOST || '0.0.0.0' // Bind to all interfaces
  const port = process.env.PORT ? Number(process.env.PORT) : 7070

  await app.listen(port, host)
  logger.log(`Server is listening on http://${host}:${port}`)
}

bootstrap()
