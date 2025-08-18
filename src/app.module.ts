import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { SessionModule } from './modules/session/session.module';
import { PrismaModule } from 'prisma/prisma.module';
import { LogMiddleware } from './common/middleware/log.middleware';

@Module({
  imports: [PrismaModule, SessionModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // Middleware configuration can be added here if needed
    consumer.apply(LogMiddleware).forRoutes({path:"sessions",method:RequestMethod.GET}); // Apply LogMiddleware to all routes, adjust as necessary
  }
}
