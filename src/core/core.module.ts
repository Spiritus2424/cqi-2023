import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { CompilerService } from './compiler/compiler.service';
import { JudgeService } from './compiler/judge/judge.service';
import { DatabaseModule } from './database/database.module';

@Global()
@Module({
	imports: [DatabaseModule, HttpModule],
	providers: [JudgeService, CompilerService],
	exports: [JudgeService, CompilerService],
})
export class CoreModule {}
