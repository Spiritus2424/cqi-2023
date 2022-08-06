import { Injectable } from '@nestjs/common';
import { Compiler } from '@prisma/client';
import { PrismaService } from '../database/prisma/prisma.service';

@Injectable()
export class CompilerService {
	constructor(private readonly _prismaService: PrismaService) {}

	async findMany(name?: string): Promise<Compiler[]> {
		return this._prismaService.compiler.findMany({
			where: {
				name: {
					contains: name,
					mode: 'insensitive',
				},
			},
		});
	}

	async findOne(id: number): Promise<Compiler> {
		return this._prismaService.compiler.findUniqueOrThrow({
			where: {
				id: id,
			},
		});
	}
}
