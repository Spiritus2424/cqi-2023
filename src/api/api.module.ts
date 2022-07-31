import { Module } from '@nestjs/common';
import { AlgorithmController } from './algorithm/algorithm.controller';
import { CompilerController } from './compiler/compiler.controller';

@Module({
	controllers: [CompilerController, AlgorithmController],
})
export class ApiModule {}
