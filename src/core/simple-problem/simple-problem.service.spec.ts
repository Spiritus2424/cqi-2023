import { Test, TestingModule } from '@nestjs/testing';
import { SimpleProblemService } from './simple-problem.service';

describe('SimpleProblemService', () => {
  let service: SimpleProblemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SimpleProblemService],
    }).compile();

    service = module.get<SimpleProblemService>(SimpleProblemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
