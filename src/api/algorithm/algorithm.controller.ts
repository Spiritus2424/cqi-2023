import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CodeSolutionService } from 'src/core/code-solution/code-solution.service';
import { JudgeService } from '../../core/judge/judge.service';
import { SubmitCodeResponseDto } from './dto/submit-code-response.dto';
import { SubmitCodeDto } from './dto/submit-code.dto';

@ApiTags('Algorithm')
@Controller('algorithm')
export class AlgorithmController {
	constructor(
		private readonly _judgeService: JudgeService,
		private readonly _codeSolutionService: CodeSolutionService,
	) {}

	@ApiOkResponse()
	@Post('submit-code')
	async submitCode(
		@Body() body: SubmitCodeDto,
	): Promise<SubmitCodeResponseDto> {
		const codeSolution = await this._codeSolutionService.findOne(
			body.compilerId,
			body.problemId,
		);

		const submitResponse = await this._judgeService.submitCode({
			compilerId: body.compilerId,
			sourceCode: codeSolution.solution.concat('\n').concat(body.code),
		});

		console.log(submitResponse);
		return {
			status:
				submitResponse.stderr === null &&
				submitResponse.message === null &&
				submitResponse.compileOutput === null
					? 'SUCCESS'
					: 'ERROR',
			compileOutput: submitResponse.compileOutput,
			message: submitResponse.message,
			stderr: submitResponse.stderr,
		};
	}
}
