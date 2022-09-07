import { Injectable } from '@nestjs/common';
import { SimpleProblem } from '@prisma/client';
import { PrismaService } from '../database/prisma/prisma.service';

@Injectable()
export class SimpleProblemService {
	constructor(private readonly _prismaService: PrismaService) {}

	async findMany(simpleProblemName?: string): Promise<SimpleProblem[]> {
		return this._prismaService.simpleProblem.findMany({
			where: {
				name: {
					contains: simpleProblemName,
					mode: 'insensitive',
				},
			},
		});
	}

	async findOne(problemId: number): Promise<SimpleProblem> {
		return this._prismaService.simpleProblem.findFirstOrThrow({
			where: {
				id: problemId,
			},
		});
	}
}
