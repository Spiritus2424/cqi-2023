import { ApiProperty } from '@nestjs/swagger';

export class SubmitAnswerResponseDto {
	@ApiProperty()
	success: boolean;

	@ApiProperty()
	message: string;
}
