import {
	Controller,
	Post,
	UploadedFile,
	UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { writeFileSync } from 'fs';

@Controller('algorithm')
export class AlgorithmController {
	@Post('upload')
	@UseInterceptors(FileInterceptor('file'))
	uploadFile(@UploadedFile() file: Express.Multer.File) {
		writeFileSync(file.originalname, file.buffer);
	}

	@Post('java')
	@UseInterceptors(FileInterceptor('file'))
	compileJava(@UploadedFile() file: Express.Multer.File) {
		writeFileSync(file.originalname, file.buffer);
	}
}
