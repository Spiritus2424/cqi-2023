import { ApiProperty } from '@nestjs/swagger';

export enum SubmitStatus {
	SUCCESS,
	ERROR,
}

export class SubmitCodeResponseDto {
	@ApiProperty()
	status: SubmitStatus;
	@ApiProperty()
	stderr?: string;
	@ApiProperty()
	compileOutput?: string;
	@ApiProperty()
	message?: string;
}
