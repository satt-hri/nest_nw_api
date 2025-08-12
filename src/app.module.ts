import { Module } from '@nestjs/common';
import { SessionModule } from './modules/session/session.module';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule, SessionModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
