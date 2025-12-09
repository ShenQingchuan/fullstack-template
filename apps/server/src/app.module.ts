import type { MiddlewareConsumer, NestModule } from '@nestjs/common'
import { Module } from '@nestjs/common'
import { AppController } from './app.controller.js'
import { ConfigModule } from './components/config/index.js'
import { LoggerModule } from './components/logger/logger.module.js'
import { RequestIdMiddleware } from './middlewares/request-id.middleware.js'

@Module({
  imports: [ConfigModule, LoggerModule],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestIdMiddleware).forRoutes('{*path}')
  }
}
