import { Body, Controller, ParseBoolPipe, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CodeSolutionService } from 'src/core/code-solution/code-solution.service';
import { SubmissionResult } from 'src/core/judge/interface/submission.interface';
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
	async submitCode(
		@Query('wait', ParseBoolPipe) waitForSubmission = false,
		@Body() body: SubmitCodeDto,
	): Promise<SubmissionResult> {
		const codeSolution = await this._codeSolutionService.findOne(
			body.compilerId,
			body.problemId,
		);

		return this._judgeService.submitCode(
			{
				compilerId: body.compilerId,
				sourceCode: codeSolution.solution.concat('\n').concat(body.code),
			},
			waitForSubmission,
		);
	}
}
