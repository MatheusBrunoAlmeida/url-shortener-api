import { Test, TestingModule } from '@nestjs/testing';
import { URLService } from '../../urls/urls.service';
import { PrismaService } from '../../prisma/prisma.service';

describe('URLService', () => {
  let service: URLService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        URLService,
        {
          provide: PrismaService,
          useValue: {}, // Mock
        },
      ],
    }).compile();

    service = module.get<URLService>(URLService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
