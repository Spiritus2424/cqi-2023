import { Module } from '@nestjs/common';
import { AlgorithmModule } from './algorithm/algorithm.module';
import { DatabaseModule } from './database/database.module';
import { ProgrammingLanguageModule } from './programming-language/programming-language.module';

@Module({
	imports: [AlgorithmModule, ProgrammingLanguageModule, DatabaseModule],
})
export class CoreModule {}
