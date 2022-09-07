import {
	Controller,
	Get,
	NotFoundException,
	Param,
	Query,
} from '@nestjs/common';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CompilerService } from 'src/core/compiler/compiler.service';
import { CompilerDto } from './dto/compiler.dto';

@ApiTags('Compiler')
@Controller('compilers')
export class CompilerController {
	constructor(private readonly _compilerService: CompilerService) {}

	@ApiQuery({
		name: 'name',
		description: 'Filter compilers by name',
		required: false,
		type: String,
	})
	@ApiOkResponse({ type: CompilerDto, isArray: true })
	@Get('')
	async findMany(@Query('name') compilerName?: string): Promise<CompilerDto[]> {
		return this._compilerService.findMany(compilerName?.trim());
	}

	@ApiOkResponse({ type: CompilerDto })
	@Get(':id')
	async findOne(@Param('id') compilerId: number): Promise<CompilerDto> {
		let compiler: CompilerDto;
		try {
			compiler = await this._compilerService.findOne(compilerId);
		} catch (error) {
			throw new NotFoundException({
				message: 'Compiler Not Found. You can check at {host}/compilers',
			});
		}

		return compiler;
	}
}
