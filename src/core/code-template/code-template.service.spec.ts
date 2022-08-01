import { Test, TestingModule } from '@nestjs/testing';
import { CodeTemplateService } from './code-template.service';

describe('CodeTemplateService', () => {
  let service: CodeTemplateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CodeTemplateService],
    }).compile();

    service = module.get<CodeTemplateService>(CodeTemplateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
