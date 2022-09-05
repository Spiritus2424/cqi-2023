import { ApiProperty } from '@nestjs/swagger';
import { SimpleProblem } from '@prisma/client';

export class SimpleProblemDto implements SimpleProblem {
	@ApiProperty()
	id: number;

	@ApiProperty()
	name: string;

	@ApiProperty()
	description: string;

	@ApiProperty()
	answer: string;
}
