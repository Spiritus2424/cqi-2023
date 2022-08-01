import { IsInt, IsString } from 'class-validator';

export class SubmitCodeDto {
	@IsString()
	code: string;

	@IsInt()
	compilerId: number;

	@IsInt()
	problemId: number;
}
