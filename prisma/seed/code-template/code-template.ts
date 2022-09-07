import { PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs';
import { join } from 'path';

async function generate(prismaClient: PrismaClient): Promise<void> {
	await prismaClient.codeTemplate.createMany({
		data: [
			{
				compilerId: 62,
				problemId: 0,
				template: readFileSync(
					join(__dirname, 'templates/two-sum.txt'),
				).toString(),
			},
		],
		skipDuplicates: true,
	});
}

export const CodeTemplateSeed = {
	generate,
};
