import { Test, TestingModule } from '@nestjs/testing';
import { BrandKitService } from './brand-kit.service';
import { DatabaseService } from 'src/database/database.service';
import { BrandKitDto } from './dto/brand-kit-dto';

describe('BrandKitService', () => {
  let service: BrandKitService;
  let database: DatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BrandKitService,
        {
          provide: DatabaseService,
          useValue: {
            brandkit: {
              create: jest.fn(),
              findUnique: jest.fn(),
              findMany: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<BrandKitService>(BrandKitService);
    database = module.get<DatabaseService>(DatabaseService);
  });

  // it('should be defined', () => {
  //   expect(service).toBeDefined();
  // });

  describe('createBrandKit', () => {
    it('should create a new brand kit with Prisma', async () => {
      const userId = 'user123';
      const createDto: BrandKitDto = {
        name: 'My Brand',
        colours: ['#FF0000'],
        fonts: ['Roboto'],
        userId: 'user123',
        logoUrl: 'catImage',
      };

      const mockBrandKit = {
        id: 'brand123',
        ...createDto,
        // userId,
        // logoUrl: null,
        // secondaryColor: null,
        isDefault: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      database.brandKit.create({ data: { ...mockBrandKit } });

      const result = await service.createBrandKit(userId, createDto);
      expect(database.brandKit.create).toHaveBeenCalledWith({
        data: {
          ...createDto,
          userId,
        },
      });
      expect(result).toEqual(mockBrandKit);
    });
  });
});
