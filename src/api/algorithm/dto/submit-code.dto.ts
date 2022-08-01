import { IsString } from 'class-validator';

export class SubmitCodeDto {
	@IsString({ always: false })
	code?: string;
}
