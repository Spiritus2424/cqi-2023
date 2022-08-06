import { Injectable } from '@nestjs/common';
import { CodeSolution } from '@prisma/client';
import { PrismaService } from '../database/prisma/prisma.service';

@Injectable()
export class CodeSolutionService {
	constructor(private readonly _prismaService: PrismaService) {}

	async findOne(compilerId: number, problemId: number): Promise<CodeSolution> {
		return this._prismaService.codeSolution.findUniqueOrThrow({
			where: {
				problemId_compilerId: { compilerId: compilerId, problemId: problemId },
			},
		});
	}
}
