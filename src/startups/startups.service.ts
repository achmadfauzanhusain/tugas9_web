import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateStartupDto } from './dto/create-startup.dto.js';
import { UpdateStartupDto } from './dto/update-startup.dto.js';
import { Startup } from './entities/startup.entity.js';

@Injectable()
export class StartupsService {
  private startups: Startup[] = [];
  private nextId = 1;

  create(dto: CreateStartupDto): Startup {
    const duplicate = this.startups.some(
      (s) => s.name.toLowerCase() === dto.name.toLowerCase(),
    );
    if (duplicate) {
      throw new ConflictException(`Startup "${dto.name}" sudah terdaftar`);
    }
    const startup: Startup = {
      id: this.nextId++,
      ...dto,
      isActive: dto.isActive ?? true,
    };
    this.startups.push(startup);
    return startup;
  }

  findAll(): Startup[] {
    return this.startups;
  }

  findOne(id: number): Startup {
    const startup = this.startups.find((s) => s.id === id);
    if (!startup) {
      throw new NotFoundException(`Startup dengan id ${id} tidak ditemukan`);
    }
    return startup;
  }

  update(id: number, dto: UpdateStartupDto): Startup {
    const startup = this.findOne(id); // otomatis melempar NotFound
    Object.assign(startup, dto);
    return startup;
  }

  remove(id: number): { message: string } {
    const startup = this.findOne(id);
    this.startups = this.startups.filter((s) => s.id !== startup.id);
    return { message: `Startup "${startup.name}" berhasil dihapus` };
  }
}