import { Injectable } from '@nestjs/common';
import { School } from '@prisma/client';
import { PrismaService } from '../database/prisma/prisma.service';

@Injectable()
export class SchoolService {
	constructor(private readonly _prismaService: PrismaService) {}

	async findAll(schoolName?: string): Promise<School[]> {
		return this._prismaService.school.findMany({
			where: {
				name: {
					contains: schoolName,
					mode: 'insensitive',
				},
			},
		});
	}
}
