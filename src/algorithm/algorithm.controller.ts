import {
	Controller,
	Post,
	UploadedFile,
	UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { writeFileSync } from 'fs';
import { PythonShell } from 'python-shell';

@Controller('algorithm')
export class AlgorithmController {
	@Post('upload')
	@UseInterceptors(FileInterceptor('file'))
	uploadFile(@UploadedFile() file: Express.Multer.File) {
		writeFileSync(file.originalname, file.buffer);

		const options = {
			pythonOptions: ['-u'], // get print results in real-time
		};
		PythonShell.run(file.originalname, options, function (err, results) {
			if (err) throw err;
			console.log(results);
			console.log('finished');
		});
	}

	@Post('java')
	@UseInterceptors(FileInterceptor('file'))
	compileJava(@UploadedFile() file: Express.Multer.File) {
		writeFileSync(file.originalname, file.buffer);
	}
}
