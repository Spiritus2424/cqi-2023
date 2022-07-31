import { Module } from '@nestjs/common';
import { JavaService } from './java/java.service';

@Module({
	providers: [JavaService],
})
export class ProgrammingLanguageModule {}
