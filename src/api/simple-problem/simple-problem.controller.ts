import {
	Body,
	Controller,
	Get,
	NotFoundException,
	Post,
	Query,
} from '@nestjs/common';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { SimpleProblem } from '@prisma/client';
import { SimpleProblemService } from 'src/core/simple-problem/simple-problem.service';
import { SimpleProblemDto } from './dto/simple-problem.dto';
import { SubmitAnswerResponseDto } from './dto/submit-answer-response.dto';
import { SubmitAnswerDto } from './dto/submit-answer.dto';

@ApiTags('Simple Problem')
@Controller('simple-problem')
export class SimpleProblemController {
	constructor(private readonly _simpleProblemService: SimpleProblemService) {}

	@ApiQuery({
		name: 'name',
		description: 'Filter simple problem by name',
		required: false,
		type: String,
	})
	@ApiOkResponse({ type: SimpleProblemDto, isArray: true })
	@Get('')
	async findMany(
		@Query('name') simpleProblemName?: string,
	): Promise<SimpleProblemDto[]> {
		return (
			await this._simpleProblemService.findMany(simpleProblemName?.trim())
		).map((value: SimpleProblem) => {
			return new SimpleProblemDto(value);
		});
	}

	@ApiOkResponse({ type: SubmitAnswerResponseDto })
	@Post('submit-answer')
	async submitAnswer(
		@Body() body: SubmitAnswerDto,
	): Promise<SubmitAnswerResponseDto> {
		let simpleProblem: SimpleProblem;

		try {
			simpleProblem = await this._simpleProblemService.findOne(body.problemId);
		} catch (error) {
			throw new NotFoundException({
				error: 'Problem not found.',
			});
		}

		const success = body.answer === simpleProblem.answer;
		const message = success ? 'Success' : 'Wrong answer';

		return {
			success: success,
			message: message,
		};
	}
}
