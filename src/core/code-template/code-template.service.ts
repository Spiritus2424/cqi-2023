import { Injectable } from '@nestjs/common';
import { CodeTemplate } from '@prisma/client';
import { PrismaService } from '../database/prisma/prisma.service';

@Injectable()
export class CodeTemplateService {
	constructor(private readonly _prismaService: PrismaService) {}

	async findOne(compilerId: number, problemId: number): Promise<CodeTemplate> {
		return this._prismaService.codeTemplate.findUnique({
			where: {
				problemId_compilerId: { compilerId: compilerId, problemId: problemId },
			},
		});
	}
}
