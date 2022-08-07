import { Role } from '@prisma/client';

export class CreateUserDto {
	firstName: string;
	lastName: string;
	role: Role;
	schoolId: number;
	email: string;
	password: string;
}
