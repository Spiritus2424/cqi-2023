import {
	Body,
	Controller,
	Post,
	UploadedFile,
	UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JudgeService } from '../../core/judge/judge.service';
import { SubmitCodeDto } from './dto/submit-code.dto';

@Controller('algorithm')
export class AlgorithmController {
	constructor(private readonly _judgeService: JudgeService) {}

	@Post('submit-code')
	@UseInterceptors(FileInterceptor('file'))
	async submitCode(
		@UploadedFile() file: Express.Multer.File,
		@Body() body: SubmitCodeDto,
	): Promise<string> {
		console.log(file);
		// console.log(body.code);
		// console.log(body.compilerId);
		console.log(typeof body.compilerId === 'number');
		// console.log(body instanceof SubmitCodeDto);
		// return await this._judgeService.submitCode({
		// 	compilerId: body.compilerId,
		// 	sourceCode: file.buffer.toString(),
		// });

		return '';
	}
}
