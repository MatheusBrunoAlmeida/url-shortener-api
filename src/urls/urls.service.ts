// src/urls/urls.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateURLDto } from './dto/create-url.dto';

@Injectable()
export class URLService {
  constructor(private readonly prisma: PrismaService) {}

  async shortenURL(createURLDto: CreateURLDto, userId: number | undefined) {
    return this.prisma.uRL.create({
      data: {
        ...createURLDto,
        short: this.generateShortURL(),
        userId,
      },
    });
  }

  async getUrl(short: string) {
    const url = await this.prisma.uRL.findUnique({ where: { short } });
    if (!url) {
      throw new Error('URL not found');
    }
    return url;
  }

  async trackClick(short: string) {
    const url = await this.prisma.uRL.findUnique({ where: { short } });
    if (url) {
      await this.prisma.click.create({
        data: {
          urlId: url.id,
        },
      });
    }
  }

  private generateShortURL(): string {
    return Math.random().toString(36).substring(2, 8);
  }
}
