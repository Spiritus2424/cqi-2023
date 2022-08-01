import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { CodeTemplateService } from './code-template/code-template.service';
import { CompilerService } from './compiler/compiler.service';
import { DatabaseModule } from './database/database.module';
import { JudgeService } from './judge/judge.service';

@Global()
@Module({
	imports: [DatabaseModule, HttpModule],
	providers: [JudgeService, CompilerService, CodeTemplateService],
	exports: [JudgeService, CompilerService],
})
export class CoreModule {}
