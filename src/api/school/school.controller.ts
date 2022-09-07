import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { SchoolService } from 'src/core/school/school.service';
import { SchoolDto } from './dto/school.dto';

@ApiTags('School')
@Controller('schools')
export class SchoolController {
	constructor(private readonly _schoolService: SchoolService) {}

	@ApiQuery({
		name: 'name',
		description: 'Filter schools by name',
		required: false,
		type: String,
	})
	@ApiOkResponse({ isArray: true, type: SchoolDto })
	@Get()
	async findAll(@Query('name') schoolName?: string): Promise<SchoolDto[]> {
		return this._schoolService.findAll(schoolName);
	}
}
