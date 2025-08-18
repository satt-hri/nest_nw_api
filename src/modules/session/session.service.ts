import { Injectable } from '@nestjs/common';
import { RequestSessionDto } from './dto/request-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class SessionService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: RequestSessionDto) {
    return {
      message: `用户 ${dto.login} 登录成功，overwrite=${dto.overwrite}`,
    };
  }

  findAll() {
    return `This action returns all session`;
  }

  async findOne(id: number) {
    const result = await this.prisma.user_master.findUnique({
      where: { user_id: id },
    });
    //console.log(result);
    return result;
  }

  update(id: number, updateSessionDto: UpdateSessionDto) {
    return `This action updates a #${id} session`;
  }

  remove(id: number) {
    return `This action removes a #${id} session`;
  }
}
