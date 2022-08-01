import { IsInt, IsOptional, IsString } from 'class-validator';

export class SubmitCodeDto {
	@IsString()
	@IsOptional()
	code?: string;

	@IsInt()
	compilerId: number;
}
