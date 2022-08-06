import { ApiProperty } from '@nestjs/swagger';
import { Compiler } from '@prisma/client';

export class CompilerDto implements Compiler {
	@ApiProperty()
	id: number;

	@ApiProperty()
	name: string;
}
