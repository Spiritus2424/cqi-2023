import { PrismaClient } from '@prisma/client';

async function generate(prismaClient: PrismaClient): Promise<void> {
	await prismaClient.school.createMany({
		data: [
			{ id: 0, name: 'Concordia' },
			{ id: 1, name: 'McGill' },
			{ id: 2, name: 'Polytechnique Montreal' },
		],
		skipDuplicates: true,
	});
}

export const SchoolSeed = {
	generate,
};
