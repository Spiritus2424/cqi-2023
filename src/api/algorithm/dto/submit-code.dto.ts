import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class SubmitCodeDto {
	@ApiProperty()
	@IsString()
	code: string;

	@ApiProperty()
	@IsInt()
	compilerId: number;

	@ApiProperty()
	@IsInt()
	problemId: number;
}
