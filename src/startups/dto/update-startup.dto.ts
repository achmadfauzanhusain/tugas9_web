import { PartialType } from '@nestjs/mapped-types';
import { CreateStartupDto } from './create-startup.dto.js';

export class UpdateStartupDto extends PartialType(CreateStartupDto) {}
