import { Module } from '@nestjs/common';
import { AlgorithmModule } from './algorithm/algorithm.module';

@Module({
	imports: [AlgorithmModule],
})
export class ApiModule {}
