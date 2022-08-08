import { ApiProperty } from '@nestjs/swagger';
import { Role, User } from '@prisma/client';

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
	password: string;
	@ApiProperty({ enum: Role })
	role: Role;
	@ApiProperty()
	schoolId: number;
}
