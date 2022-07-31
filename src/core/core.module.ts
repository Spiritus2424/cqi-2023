import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { JudgeService } from './compiler/judge/judge.service';
import { DatabaseModule } from './database/database.module';

@Global()
@Module({
	imports: [DatabaseModule, HttpModule],
	providers: [JudgeService],
	exports: [JudgeService],
})
export class CoreModule {}
