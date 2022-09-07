import { Test, TestingModule } from '@nestjs/testing';
import { SimpleProblemController } from './simple-problem.controller';

describe('SimpleProblemController', () => {
  let controller: SimpleProblemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SimpleProblemController],
    }).compile();

    controller = module.get<SimpleProblemController>(SimpleProblemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
