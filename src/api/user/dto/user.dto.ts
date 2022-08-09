import { ApiProperty } from '@nestjs/swagger';
import { Role, User } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class UserDto implements User {
	@ApiProperty()
	id: number;
	@ApiProperty()
	firstName: string;
	@ApiProperty()
	lastName: string;
	@ApiProperty()
	email: string;
	@ApiProperty()
	@Exclude()
	password: string;
	@ApiProperty({ enum: Role })
	@Exclude()
	role: Role;
	@ApiProperty()
	schoolId: number;

	constructor(partial: Partial<UserDto>) {
		Object.assign(this, partial);
	}
}
