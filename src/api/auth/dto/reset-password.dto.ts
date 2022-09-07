import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class ResetPasswordDto {
	@ApiProperty()
	@IsEmail()
	email: string;

	@ApiProperty()
	@IsString()
	oldPassword: string;

	@ApiProperty()
	@IsString()
	newPassword: string;
}

export class ResetPasswordResponseDto {}
