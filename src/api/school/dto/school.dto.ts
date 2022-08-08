import { ApiProperty } from '@nestjs/swagger';
import { School } from '@prisma/client';

export class SchoolDto implements School {
	@ApiProperty()
	id: number;

	@ApiProperty()
	name: string;
}
