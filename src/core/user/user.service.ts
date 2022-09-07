import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../database/prisma/prisma.service';

@Injectable()
export class UserService {
	constructor(private readonly _prismaService: PrismaService) {}

	async findOne(email: string): Promise<User> {
		return this._prismaService.user.findUniqueOrThrow({
			where: {
				email: email,
			},
		});
	}

	async findOneById(userId: number): Promise<User> {
		return this._prismaService.user.findUniqueOrThrow({
			where: {
				id: userId,
			},
		});
	}

	async create(user: User): Promise<User> {
		return await this._prismaService.user.create({
			data: user,
		});
	}

	async updateUser(user: User): Promise<User> {
		return await this._prismaService.user.update({
			data: user,
			where: {
				id: user.id,
			},
		});
	}
}
