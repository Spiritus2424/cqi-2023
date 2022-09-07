import { ApiProperty } from '@nestjs/swagger';
import { SimpleProblem } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class SimpleProblemDto implements SimpleProblem {
	@ApiProperty()
	id: number;

	@ApiProperty()
	name: string;

	@ApiProperty()
	description: string;

	@ApiProperty()
	@Exclude()
	answer: string;

	constructor(partial: Partial<SimpleProblemDto>) {
		Object.assign(this, partial);
	}
}
