import {
	Body,
	Controller,
	Post,
	UploadedFile,
	UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { writeFileSync } from 'fs';
import { JudgeService } from '../../core/compiler/judge/judge.service';

@Controller('algorithm')
export class AlgorithmController {
	constructor(private readonly _compiler: JudgeService) {}

	@Post('upload')
	@UseInterceptors(FileInterceptor('file'))
	uploadFile(@UploadedFile() file: Express.Multer.File) {
		writeFileSync(file.originalname, file.buffer);
	}

	@Post('java')
	@UseInterceptors(FileInterceptor('file'))
	async compileJava(
		@UploadedFile() file: Express.Multer.File,
		@Body() body: any,
	) {
		console.log(file);
		console.log(body);

		return body;
	}
}
