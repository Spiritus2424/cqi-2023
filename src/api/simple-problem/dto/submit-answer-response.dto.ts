import { ApiProperty } from '@nestjs/swagger';

export type SubmitStatus = 'SUCCESS' | 'ERROR';

export class SubmitAnswerResponseDto {
	@ApiProperty({ enum: ['SUCCESS', 'ERROR'] })
	status: SubmitStatus;
}
