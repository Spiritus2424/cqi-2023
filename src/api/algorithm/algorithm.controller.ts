import { Body, Controller, Post, Put } from '@nestjs/common';
import { ApiExcludeEndpoint, ApiTags } from '@nestjs/swagger';
import { CodeSolutionService } from 'src/core/code-solution/code-solution.service';
import { JudgeService } from '../../core/judge/judge.service';
import { SubmitCodeDto } from './dto/submit-code.dto';

@ApiTags('Algorithm')
@Controller('algorithm')
export class AlgorithmController {
	constructor(
		private readonly _judgeService: JudgeService,
		private readonly _codeSolutionService: CodeSolutionService,
	) {}

	@Post('submit-code')
	async submitCode(@Body() body: SubmitCodeDto): Promise<string> {
		const codeSolution = await this._codeSolutionService.findOne(
			body.compilerId,
			body.problemId,
		);
		return this._judgeService.submitCode({
			compilerId: body.compilerId,
			sourceCode: codeSolution.solution.concat('\n').concat(body.code),
			callbackUrl: 'http://cqi-server:3000/algorithm/submission-done',
		});
	}

	@ApiExcludeEndpoint()
	@Put('submission-done')
	async submissionDone(@Body() body: any): Promise<void> {
		console.log(body);
	}
}
