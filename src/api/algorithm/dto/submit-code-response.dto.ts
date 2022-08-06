import { ApiProperty } from '@nestjs/swagger';

export type SubmitStatus = 'SUCCESS' | 'ERROR';

export class SubmitCodeResponseDto {
	@ApiProperty({ enum: ['SUCCESS', 'ERROR'] })
	status: SubmitStatus;
	@ApiProperty()
	stderr?: string;
	@ApiProperty()
	compileOutput?: string;
	@ApiProperty()
	message?: string;
}
