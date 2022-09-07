import { PrismaClient } from '@prisma/client';

export default async function generateSimpleProblem(
	prismaClient: PrismaClient,
): Promise<void> {
	await prismaClient.simpleProblem.createMany({
		data: [{ id: 0, name: 'Name', description: '', answer: '6' }],
		skipDuplicates: true,
	});
}
