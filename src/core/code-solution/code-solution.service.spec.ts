import { Test, TestingModule } from '@nestjs/testing';
import { CodeSolutionService } from './code-solution.service';

describe('CodeSolutionService', () => {
  let service: CodeSolutionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CodeSolutionService],
    }).compile();

    service = module.get<CodeSolutionService>(CodeSolutionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
