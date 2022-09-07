import { PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs';
import { join } from 'path';

async function generate(prismaClient: PrismaClient): Promise<void> {
	await prismaClient.codeSolution.createMany({
		data: [
			{
				compilerId: 62,
				problemId: 0,
				solution: readFileSync(
					join(__dirname, 'solutions/two-sum.txt'),
				).toString(),
			},
		],
		skipDuplicates: true,
	});
}

export const CodeSolutionSeed = {
	generate,
};
