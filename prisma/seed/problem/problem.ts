import { PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs';
import { join } from 'path';

async function generate(prismaClient: PrismaClient): Promise<void> {
	await prismaClient.problem.createMany({
		data: [
			{
				id: 0,
				name: 'Two Sum',
				description: readFileSync(
					join(__dirname, 'descriptions/two-sum.txt'),
				).toString(),
			},
		],
		skipDuplicates: true,
	});
}

export const ProblemSeed = {
	generate,
};
