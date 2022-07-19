import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlgorithmController } from './algorithm/algorithm.controller';

@Module({
	imports: [],
	controllers: [AppController, AlgorithmController],
	providers: [AppService],
})
export class AppModule {}
