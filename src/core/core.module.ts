import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { CodeSolutionService } from './code-solution/code-solution.service';
import { CodeTemplateService } from './code-template/code-template.service';
import { CompilerService } from './compiler/compiler.service';
import { DatabaseModule } from './database/database.module';
import { JudgeService } from './judge/judge.service';

@Global()
@Module({
	imports: [DatabaseModule, HttpModule],
	providers: [
		JudgeService,
		CompilerService,
		CodeTemplateService,
		CodeSolutionService,
	],
	exports: [
		JudgeService,
		CompilerService,
		CodeTemplateService,
		CodeSolutionService,
	],
})
export class CoreModule {}
