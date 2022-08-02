import { Module } from '@nestjs/common';
import { AlgorithmController } from './algorithm/algorithm.controller';
import { CompilerController } from './compiler/compiler.controller';
import { OpenApiController } from './open-api/open-api.controller';

@Module({
	controllers: [CompilerController, AlgorithmController, OpenApiController],
})
export class ApiModule {}
