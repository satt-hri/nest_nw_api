import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
  Redirect,
} from '@nestjs/common';
import { SessionService } from './session.service';
import { RequestSessionDto } from './dto/request-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import type { Request, Response } from 'express';

@Controller('sessions')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post()
  create(@Body() createSessionDto: RequestSessionDto) {
    return this.sessionService.create(createSessionDto);
  }

  @Get()
  findAll() {
    return this.sessionService.findAll();
  }
  @Get('/health_check')
  @Redirect('https://nestjs.com', 301)
  check() {
    return this.sessionService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string, @Req() request: Request) {
    //console.log(request.headers);
    return this.sessionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSessionDto: UpdateSessionDto) {
    return this.sessionService.update(+id, updateSessionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sessionService.remove(+id);
  }
}
