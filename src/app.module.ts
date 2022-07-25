import { Module } from '@nestjs/common';
import { AlgorithmModule } from './algorithm/algorithm.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProgrammingLanguageModule } from './programming-language/programming-language.module';

@Module({
	imports: [AlgorithmModule, ProgrammingLanguageModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
