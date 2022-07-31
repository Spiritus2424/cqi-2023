import { Module } from '@nestjs/common';
import { AlgorithmController } from './algorithm.controller';

@Module({
	controllers: [AlgorithmController],
})
export class AlgorithmModule {}
