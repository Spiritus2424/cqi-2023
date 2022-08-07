import { Module } from '@nestjs/common';
import { AlgorithmController } from './algorithm/algorithm.controller';
import { CompilerController } from './compiler/compiler.controller';
import { OpenApiController } from './open-api/open-api.controller';
import { AuthController } from './auth/auth.controller';
import { UserController } from './user/user.controller';

@Module({
	controllers: [CompilerController, AlgorithmController, OpenApiController, AuthController, UserController],
})
export class ApiModule {}
