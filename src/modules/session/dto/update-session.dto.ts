import { PartialType } from '@nestjs/mapped-types';
import { RequestSessionDto } from './request-session.dto';

export class UpdateSessionDto extends PartialType(RequestSessionDto) {}
