import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // 關鍵：標記為全局模塊
@Module({
  providers: [PrismaService],
  exports: [PrismaService] // 只導出需要的服務
})
export class PrismaModule {}