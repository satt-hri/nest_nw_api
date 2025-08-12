import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // 使 PrismaService 在整个应用程序中可用，所谓的自动注入
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // 我理解虽然标注了@Global()，但仍然需要导出 PrismaService 以便其他模块可以使用
})
export class PrismaModule {}
