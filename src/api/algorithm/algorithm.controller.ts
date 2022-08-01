import {
	Body,
	Controller,
	Param,
	ParseIntPipe,
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

	@Post('submit-code/:compilerId')
	@UseInterceptors(FileInterceptor('file'))
	async submitCode(
		@UploadedFile() file: Express.Multer.File,
		@Param('compilerId', ParseIntPipe) compilerId: number,
		@Body()
		body: SubmitCodeDto,
	): Promise<string> {
		console.log(file);
		console.log(body.code);
		console.log(compilerId);
		return await this._judgeService.submitCode({
			compilerId: compilerId,
			sourceCode: file.buffer.toString(),
		});
	}
}
