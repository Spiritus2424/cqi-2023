import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CodeSolutionService } from './code-solution/code-solution.service';
import { CodeTemplateService } from './code-template/code-template.service';
import { CompilerService } from './compiler/compiler.service';
import { DatabaseModule } from './database/database.module';
import { JudgeService } from './judge/judge.service';
import { UserService } from './user/user.service';

@Global()
@Module({
	imports: [DatabaseModule, HttpModule, AuthModule],
	providers: [
		JudgeService,
		CompilerService,
		CodeTemplateService,
		CodeSolutionService,
		UserService,
	],
	exports: [
		AuthModule,
		JudgeService,
		CompilerService,
		CodeTemplateService,
		CodeSolutionService,
		UserService,
	],
})
export class CoreModule {}
