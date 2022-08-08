import { Module } from '@nestjs/common';
import { AlgorithmController } from './algorithm/algorithm.controller';
import { AuthController } from './auth/auth.controller';
import { CompilerController } from './compiler/compiler.controller';
import { OpenApiController } from './open-api/open-api.controller';
import { UserController } from './user/user.controller';
import { SchoolController } from './school/school.controller';

@Module({
	controllers: [
		CompilerController,
		AlgorithmController,
		OpenApiController,
		AuthController,
		UserController,
		SchoolController,
	],
})
export class ApiModule {}
