import { PrismaClient } from '@prisma/client';

async function generate(prismaClient: PrismaClient): Promise<void> {
	await prismaClient.simpleProblem.createMany({
		data: [{ id: 0, name: 'Name', description: '', answer: '6' }],
		skipDuplicates: true,
	});
}

export const SimpleProblemSeed = {
	generate,
};
