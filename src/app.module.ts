import { Module } from '@nestjs/common';
import { SessionModule } from './modules/session/session.module';

@Module({
  imports: [SessionModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
