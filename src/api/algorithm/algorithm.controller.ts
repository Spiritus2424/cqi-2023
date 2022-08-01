import { Body, Controller, Post } from '@nestjs/common';
import { CodeSolutionService } from 'src/core/code-solution/code-solution.service';
import { JudgeService } from '../../core/judge/judge.service';
import { SubmitCodeDto } from './dto/submit-code.dto';

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
		console.log(codeSolution.solution);
		return this._judgeService.submitCode({
			compilerId: body.compilerId,
			sourceCode: codeSolution.solution,
		});
	}
}
