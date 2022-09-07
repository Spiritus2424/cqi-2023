import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class SubmitAnswerDto {
	@ApiProperty()
	@IsString()
	answer: string;

	@ApiProperty()
	@IsInt()
	problemId: number;
}
