import { Module } from '@nestjs/common';
import { URLService } from './urls.service';
import { URLController } from './urls.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [URLService],
  controllers: [URLController],
})
export class URLModule {}
