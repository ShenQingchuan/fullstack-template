import type { MiddlewareConsumer, NestModule } from '@nestjs/common'
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { LoggerModule } from './logger/logger.module'
import { RequestIdMiddleware } from './logger/request-id.middleware'

@Module({
  imports: [LoggerModule],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestIdMiddleware).forRoutes('*')
  }
}
