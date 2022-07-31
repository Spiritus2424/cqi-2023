import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { Compiler } from '@prisma/client';
import { CompilerService } from 'src/core/compiler/compiler.service';

@Controller('compilers')
export class CompilerController {
	constructor(private readonly _compilerService: CompilerService) {}

	@Get('')
	async findMany(@Query('name') compilerName: string): Promise<Compiler[]> {
		return this._compilerService.findMany(compilerName);
	}

	@Get(':id')
	async findOne(
		@Param('id', ParseIntPipe) compilerId: number,
	): Promise<Compiler> {
		return this._compilerService.findOne(compilerId);
	}
}
