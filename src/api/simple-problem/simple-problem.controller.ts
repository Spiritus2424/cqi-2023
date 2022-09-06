import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { SimpleProblem } from '@prisma/client';
import { SimpleProblemService } from 'src/core/simple-problem/simple-problem.service';
import { SimpleProblemDto } from './dto/simple-problem.dto';

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

	@Post('submit-answer')
	async submitAnswer(): Promise<any> {}
}
