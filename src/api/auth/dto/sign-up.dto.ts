import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { IsEmail, IsEnum, IsInt, IsString } from 'class-validator';

export class SignUpDto {
	@ApiProperty()
	@IsString()
	firstName: string;

	@ApiProperty()
	@IsString()
	lastName: string;

	@ApiProperty({ enum: Role })
	@IsEnum(Role)
	role: Role;

	@ApiProperty()
	@IsInt()
	schoolId: number;

	@ApiProperty()
	@IsEmail()
	email: string;

	@ApiProperty()
	@IsString()
	password: string;
}

export class SignUpResponseDto {
	@ApiProperty()
	@IsInt()
	id: number;

	@ApiProperty()
	@IsString()
	firstName: string;

	@ApiProperty()
	@IsString()
	lastName: string;

	@ApiProperty()
	@IsEmail()
	email: string;

	@ApiProperty()
	@IsInt()
	schoolId: number;

	@ApiProperty({ enum: Role })
	@IsEnum(Role)
	role: Role;
}
