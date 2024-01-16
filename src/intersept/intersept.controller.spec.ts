import { Test, TestingModule } from '@nestjs/testing';
import { InterseptController } from './intersept.controller';

describe('InterseptController', () => {
  let controller: InterseptController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InterseptController],
    }).compile();

    controller = module.get<InterseptController>(InterseptController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
